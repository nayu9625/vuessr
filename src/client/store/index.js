import { createStore } from 'vuex';
import demoModule from './modules/demo';

export default () => {
  return createStore({
    modules: {
      demo: demoModule(),
      // 其他模块
    }
  })
}