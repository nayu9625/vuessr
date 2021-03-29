import {
  createApp,
  createSSRApp
} from 'vue';

import App from './App.vue';
import createRouter from './router';
import createStore from './store';
import { isSSR } from './utils';

export default function() {
  const app = (isSSR? createSSRApp: createApp)(App);
  const router = createRouter();
  const store = createStore();
  app.use(router).use(store);
  return {
    app,
    router,
    store,
  }
}