import * as M from '@findy-sources/mapping'

const categories = {
  'product:apparel': ['ladies', 'men', 'divided', 'kids'],
  'product:household': ['home'],
  product: ['ladies', 'men', 'divided', 'kids', 'home']
}

const spec: M.MappingSpec = {
  product: {},
  'product:apparel': {},
  'product:household': {},
  any: {
    geolocation: {
      country: M.allow('US'),
      radius: {
        min: M.pipe(M.allowIf(x => x === 0), M.noProp)
      }
    },
    price: {
      min: M.pipe(M.allowIf(min => min < 400), M.noProp)
    },
    keyword: keyword => ({
      q: keyword,
      _origin: 'http://www.hm.com',
      _path: '/us/products/search'
    }),
    profile: ({ category, keyword }) => ({
      category: categories[category],
      _origin: 'http://api.hm.com',
      _path: '/v2/us/en/products/display',
      ...!keyword && {
        concealCategories: true,
        pageSize: 60,
        deviceType: 'DESKTOP'
      }
    })
  },
  variants: (assets: any) => {
    const { category, ...params } = assets

    return category.map(categories => ({ page, request }) =>
      request({
        categories,
        page: page + 1,
        ...params
      })
    )
  }
}

export const variants = M.specToVariants(spec)
