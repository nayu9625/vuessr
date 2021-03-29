<template>
  <h1 class="home-h1">home</h1>
  <div>{{ userInfo.name }} - {{ userInfo.address }}</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import axios from "axios";
export default {
  name: "Home",
  setup() {
    const { commit, getters } = useStore();
    const userInfo = computed(() => getters["demo/getData"]);
    const fetchData = () => {
      axios
        .get(
          "https://www.fastmock.site/mock/ad64be64a14d93d6621f92d1e7bad8cd/vuessr/userInfo"
        )
        .then(res => {
          console.log(res.data);
          commit("demo/setData", res.data);
        });
    };
    if(userInfo.value.name === 'ny' && typeof window !== "undefined") { // 根据初始值判断是否需要请求
       fetchData();
    }
    return {
      userInfo,
      fetchData
    };
  },
  // SSR提供的钩子函数 只在服务端执行
  async serverPrefetch() {
    console.log("服务端执行");
    await this.fetchData();
  },
  customPrefetch() {
    console.log('自定义函数');
  }
};
</script>

<style scoped>
.home-h1 {
  color: red;
}
</style>