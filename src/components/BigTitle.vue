<template>
  <div class='big-title'>
    <p class='cn-text'>{{cnText}}</p>
    <p clasS='en-text'>{{enText}}</p>
  </div>
</template>
<script>
export default {
  props: {
    cnText: {
      type: String,
      default: '标题',
    },
    enText: {
      type: String,
      default: 'TITLE',
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped lang='scss'>
.big-title {
  text-align: center;
  .cn-text {
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
  }
  .en-text {
    font-size: 60px;
    font-family: Arial;
    font-weight: bold;
    color: #ffffff;
    opacity: 0.1;
    margin-top: -34px;
  }
}
</style>