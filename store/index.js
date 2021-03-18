export const state = () => ({
  activeSidebarMenu: 'index',
  quotesList: [],
})

export const actions = {
  async nuxtServerInit({ commit }, { $config }) {
    const resArticles = await this.$axios.$get(
      `${$config.apiUrl}short-quotes?limit=40`,
      {
        headers: { 'X-API-KEY': $config.apiKey },
      }
    )
    commit('setArticles', resArticles.contents)
  },
}

export const getters = {
  getQuotesList(state) {
    return state.quotesList
  },
}

export const mutations = {
  updateActiveSidebarMenu(state, menuName) {
    state.activeSidebarMenu = menuName
  },

  setArticles(state, text) {
    state.quotesList = text
  },
}
