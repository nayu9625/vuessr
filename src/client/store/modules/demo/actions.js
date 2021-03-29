export default {
  setData({commit}) {
    const payload = {
      name: 'nyy',
      address: '松江'
    }
    commit('setData', payload);
  }
}