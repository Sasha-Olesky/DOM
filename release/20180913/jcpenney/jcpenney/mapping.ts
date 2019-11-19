import * as M from '@findy-sources/mapping'

import { keywordMap, noKeywordMap } from './categoryMap'

export const itemsPerPage = 40
export const _origin = 'https://search-api.jcpenney.com'
export const _originSite = 'https://www.jcpenney.com'

const spec: M.MappingSpec = {
  product: {},
  'product:apparel': {},
  'product:apparel:*': {},
  'product:household': {},
  any: {
    category: M.pipe(
      (x, { keyword }) => (keyword ? keywordMap[x] : noKeywordMap[x]),
      M.toProp('_categories')
    ),
    geolocation: {
      country: M.allow('US'),
      radius: {
        min: M.pipe(M.allowIf(x => x === 0), M.noProp)
      }
    },
    keyword: M.toProp('Ntt'),
    condition: M.pipe(M.allowIf(x => x.includes('New')), M.noProp),
    marketplace: M.pipe(M.allowIf(x => x.includes('Retail')), M.noProp),
    rating: () => undefined,
    profile: ({ category, keyword }) => ({
      mode: 1,
      responseType: 'organic',
      _origin,
      _path: '/v1/search-service/s/' + keyword
    })
  },
  variants: (assets: any) => {
    const { _categories, ...params } = assets

    return _categories.map(category => ({ page, request }) =>
      request({
        ...params, // shoud go first, so '_origin' could be overridden by entry from 'category'
        ...category,
        page: page
      })
    )
  }
}

export const variants = M.specToVariants(spec)
