import * as P from '@findy-sources/parse'
import * as U from '@findy-sources/util'
import * as R from 'ramda'

import { _originSite } from './mapping'

const parse = P.parseJSON(
    {
      values: [
        {
          root: 'organicZoneInfo products',
          id: 'ppId',
          title: 'name',
          photoUrl: 'imagesInfo thumbnailImageId | cutPhotoUrl',
          additionalPhotoUrls: 'imagesInfo altThumbnailImageId | cutPhotoUrl',
          url: `pdpUrl | makeUrl: ${_originSite}`,
          attributes: {
            price: {
              min: 'currentMin',
              max: 'currentMax',
            },
            priceUnit: 'currencyCode',
            condition: '| makeConst: New | valueToArray',
            marketplace: '| makeConst: Retail'
          },
          location: { country: '| makeConst: US' }
        }
      ],
      hasMorePages: 'organicZoneInfo nextPage',
      estimatedTotal: 'organicZoneInfo totalNumRecs'
    },
    {
      cutPhotoUrl: x => `https://s7d4.scene7.com/is/image/JCPenney/${x}?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2`
    }
  )

export default data => {
  const { hasMorePages, ...rest } = parse(data)

  return { hasMorePages: Boolean(hasMorePages), ...rest }
}
