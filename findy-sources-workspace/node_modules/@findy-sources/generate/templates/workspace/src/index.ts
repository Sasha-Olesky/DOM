import { setOptions } from '@findy-sources/meta'
import runner from '@findy-sources/runner'

const req = require.context('.', true, /\.\/.[^\/]+\/index.ts/)
const sources = req.keys().map(x => req(x).default)

export = options => {
  setOptions(options)

  return { setOptions, run: runner(sources) }
}
