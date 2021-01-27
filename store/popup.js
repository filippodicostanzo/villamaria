export const state = () => ({
  active: true
})

export const mutations = {
  remove(state) {
    state.active = false
  }
}
