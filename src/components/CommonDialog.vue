<template>
  <el-dialog :visible.sync="visible"
    :show-close="false"
    :width="width || '50%'"
    center>
    <div slot="title">
      <div class="title">
        <p>{{title}}</p>
        <i class="el-icon-close close-btn"
          @click="cancel"></i>
      </div>
    </div>
    <slot></slot>
    <span slot="footer"
      class="dialog-footer" v-if="showBtns">
      <el-button class="btn" @click="cancel">取 消</el-button>
      <el-button class="btn btn-right" type="primary"
        @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '50%',
    },
    title: {
      type: String,
      default: '标题',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    showBtns: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    cancel() {
      this.$emit('update:visible', false)
      this.$emit('close')
    },
    submit() {
      this.$emit('update:visible', false)
      this.$emit('submit')
    },
  },
}
</script>
<style scoped lang='scss'>
/deep/ .el-dialog__header {
  padding: 0
}
.title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E6E6E6;
  align-items: center;
  font-size: 15px;
  padding: 18px 28px;
  .close-btn {
    cursor: pointer;
  }
}
.dialog-footer {
  .btn {
    width: 140px
  }
  .btn-right {
    margin-left: 10px;
  }
}
</style>