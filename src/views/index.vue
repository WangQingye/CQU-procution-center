<template>
  <div class="main">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-width: 1200px;

  // 纯色
  // background: linear-gradient(to bottom, $--color-primary 390px, #fbfbfa 390px);

  // 图片
  background: url(../assets/imgs/sucaibg.jpg) left top no-repeat,
    #fbfbfa right bottom repeat;

  background-size: 100%, 390px, auto;
  height: auto;
}
</style>
