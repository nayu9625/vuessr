<template>
   <h1 class="home-h1">About</h1>
   <ul>
     <li>{{ userInfo.name }}</li> 
     <li>{{ userInfo.address }}</li> 
   </ul>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'About',
  setup() {
    const { getters } = useStore();
    const userInfo = getters['demo/getData'];
    return {
      userInfo,
    }
  }
}
</script>

<style scoped>
  .home-h1 {
    color: blue;
  }
</style>