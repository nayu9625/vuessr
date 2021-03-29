import createApp from './app';
const { app, store } = createApp();
// 把app挂载到HTML根节点上

if(window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}
app.mount('#app', true);