export const state = () => ({
  activeSidebarMenu: 'index',
})

export const mutations = {
  updateActiveSidebarMenu(state, menuName) {
    state.activeSidebarMenu = menuName
  },
}
