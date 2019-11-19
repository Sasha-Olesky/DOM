import { parseHTML, parseJSON } from '@findy-sources/parse'

const parse = {
  html: parseHTML(
    {
      values: [
        {
          root: 'ul[class="products-list"] > li',
          id: 'button[class*="btn quicklook"]@data-product',
          title: 'a@title',
          photoUrl: 'img[class*="primary-image"]@src | makeUrl: http:',
          additionalPhotoUrls: [
            'img[class*="secondary-image"]@src | makeUrl: http:'
          ],
          url: 'a@href | cutURL',
          attributes: {
            price: '.price | getNumber | toRange',
            priceUnit: '| priceUnit'
          }
        }
      ],
      hasMorePages: '#products-container section.hm-pager a.NEXT@href',
      estimatedTotal:
        '#filter-controls-container div.bottom-bar span | getNumber'
    },
    {
      priceUnit: x => 'USD',
      cutURL: x => x.split('?')[0]
    }
  ),
  json: parseJSON(
    {
      values: [
        {
          root: 'displayArticles',
          id: 'productNumber',
          title: 'name',
          photoUrl: 'primaryImage url | makeUrl: http:',
          additionalPhotoUrls:
            'secondaryImage url | makeUrl: http: | valueToArray',
          url: 'webUrl',
          attributes: {
            price: 'priceInfo price | toRange',
            priceUnit: 'priceInfo currencyIso'
          }
        }
      ],
      hasMorePages: 'pagination',
      estimatedTotal: 'pagination count'
    },
    {
      photoUrl: x => `http:${x}`,
      hasMorePages: x => x.count / x.pageSize > x.page
    }
  )
}

export default (data, profile) => {
  const { hasMorePages, ...rest } = (profile.keyword ? parse.html : parse.json)(
    data
  )

  return { hasMorePages: Boolean(hasMorePages), ...rest }
}
