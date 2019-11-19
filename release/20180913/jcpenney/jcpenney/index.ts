import { withPage } from '@findy-sources/context-helpers'
import { Profile, Source } from '@findy-sources/meta'

import { variants } from './mapping'
import parseData from './parseData'

const source: Source = (profile: Profile) => ({ radius }) => {
  return variants(profile, radius).map(variant => {
    return withPage(async ctx => {
      return parseData(await variant(ctx))
    })
  })
}

export default { name: 'jcpenney', source }
