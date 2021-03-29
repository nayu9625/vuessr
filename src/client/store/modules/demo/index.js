import actions from './actions';
import mutations from './mutations';
import getters from './getters'; 
import store from './store';

export default () => {
  return {
    namespaced: true,
    state: store(),
    actions,
    mutations,
    getters
  }
}