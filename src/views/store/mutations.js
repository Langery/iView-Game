import * as types from './mutation-types'

const mutations = {
  [types.SET_LOG_IN] (state, info) {
    state.logInfo = info
  }
}

export default mutations
