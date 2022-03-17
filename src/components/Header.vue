<template>
  <div class="header">
    <img class="header-logo"
      src="@/assets/imgs/logo.png"
      alt="logo">
    <div class="header-right">
      <el-tabs class="header-tabs"
        @tab-click="handleClick"
        v-model="activeName">
        <el-tab-pane name="home">
          <p class="tab"
            slot="label">首页</p>
        </el-tab-pane>
        <el-tab-pane name="news">
          <p class="tab"
            slot="label">中心新闻</p>
        </el-tab-pane>
        <el-tab-pane name="models">
          <p class="tab"
            slot="label">模型库</p>
        </el-tab-pane>
        <el-tab-pane name="production-services">
          <p class="tab"
            slot="label">预约制造</p>
        </el-tab-pane>
      </el-tabs>
      <el-dropdown placement="bottom-start">
        <span class="el-dropdown-link">
          <el-avatar :size="36" :src="avatarImg"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <div class="header-dropdown">
            <div class="user-info">
              <p class="nickname">开开心心昵称</p>
              <p class="user-type">学生用户</p>
            </div>
            <div class="option">
              <i class="el-icon-user"></i>
              <p class="option-text">个人中心</p>
            </div>
            <div class="option">
              <i class="el-icon-circle-close"></i>
              <p class="option-text">退出登录</p>
            </div>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import avatarImg from '@/assets/imgs/avatar.jpg'
export default {
  name: 'Header',
  data() {
    return {
      activeName: 'production-services',
      avatarImg
    }
  },
  methods: {
    handleClick(tab) {
      this.$router.push(`/${tab.name}`);
    },
  },
}
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-logo {
    margin-left: 40px;
    width: 268px;
    height: 30px;
  }
  .header-right {
    display: flex;
    align-items: center;
    .header-tabs {
      height: 60px;
      .tab {
        width: 120px;
        font-size: 15px;
        text-align: center;
        line-height: 60px;
        color: white;
      }
      /deep/ .el-tabs__active-bar {
        background-color: #fff;
      }
      /deep/ .el-tabs__nav-wrap::after {
        background-color: transparent;
      }
      /deep/ .el-tabs__nav {
        height: 62px;
      }
    }
    .el-dropdown-link {
      height: 60px;
      margin: 0 60px;
      color: white;
      display: flex;
      align-items: center;
    }
  }
}
</style>
<style lang="scss">
.header-dropdown {
  width: 160px;
  .user-info {
    width: 100px;
    padding: 0 15px;
    margin: 0 auto;
    border-bottom: 1px solid #ededed;
    margin-bottom: 6px;
    .nickname {
      font-size: 16px;
      color: #1a1a1a;
      margin-top: 6px;
      margin-bottom: 12px;
    }
    .user-type {
      color: $--color-primary;
      font-size: 14px;
      margin-bottom: 12px;
    }
  }
  .option {
    width: 160px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background-color: #f7f2f2;
    }
    .option-text {
      margin-left: 20px;
    }
  }
}
</style>