<template>
  <div id="app-box">首页</div>
  <router-link to="/">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  setup() {}
}
</script>

<style>

</style>