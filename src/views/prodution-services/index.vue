<template>
  <div class='prodution-services'>
    <BigTitle cn-text="预约制造" en-text="PRODUCTION SERVICES"/>
    <div class="content"></div>
  </div>
</template>
<script>
import BigTitle from '@/components/BigTitle.vue'
export default {
  components: {
    BigTitle,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped lang='scss'>
.prodution-services {
  padding-top: 90px;
  .content {
    width: 72%;
    height: 750px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
  }
}
</style>