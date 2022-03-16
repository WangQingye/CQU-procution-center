<template>
  <div class='footer'>
    <div class='content'>
      <p>© 2021-2022 重庆大学创新中心</p>
      <p><span class="link">管理员</span> | <span class="link">友情链接</span> | <span class="link">常见问题</span></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped lang='scss'>
.footer {
  width: 72%;
  font-size: 14px;
  height: 60px;
  margin: 0 auto;
  color: #999999;
  .content {
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .link {
      cursor: pointer;
    }
  }
}
</style>