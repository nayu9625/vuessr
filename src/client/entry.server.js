import CreateApp from './app';

export default function() {
   const {
    app,
    router,
    store,
   } = CreateApp();
   return {
    app,
    router,
    store,
   }
}