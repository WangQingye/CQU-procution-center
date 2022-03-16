<template>
  <div class="main">
    <div class="background">
      <div class="background-top"></div>
      <div class="background-bottom"></div>
    </div>
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
  // height: 100vh;
  width: 100%;
  min-width: 1200px;
  height: auto;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    .background-top {
      height: 390px;
      background-color: $--color-primary;
    }
    .background-bottom {
      height: calc(100% - 390px);
      background-color: #fbfbfa;
    }
  }
}
</style>
