<template>
  <div class="files-table">
    <el-table class="table"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      height="482"
      align="left"
      header-align="left"
      style="width: 100%">
      <el-table-column type="selection"
        width="25">
      </el-table-column>
      <el-table-column type="index"
        align="center"
        header-align="left"
        width="90"
        label="全选">
      </el-table-column>
      <el-table-column label="预览"
        min-width="120">
        <template slot-scope="scope">
          <img class="file-img"
            :src="scope.row.img"
            alt="logo">
        </template>
      </el-table-column>
      <el-table-column prop="name"
        label="附件信息"
        min-width="220">
        <template slot-scope="scope">
          <p class="file-info-text">附件名：{{scope.row.name}}</p>
          <p class="file-info-text"
            v-if="scope.row.length">尺寸：{{`${scope.row.length} × ${scope.row.width} × ${scope.row.height}`}}mm</p>
          <p class="file-info-text"
            v-if="scope.row.volumn">体积：{{scope.row.volumn}}</p>
          <p class="file-info-text"
            v-if="scope.row.surface">表面积：{{scope.row.surface}}</p>
          <el-tag class="file-info-tag"
            type="info"
            @click="editSize"
            v-if="!scope.row.length">无法识别请编辑尺寸</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address"
        min-width="220"
        label="加工参数">
        <template slot-scope="scope">
          <el-tag type="info"
            @click="editParam">
            <div v-if="scope.row.material"
              class="file-param-text-wrapper">
              <p class="file-param-text">材料：{{scope.row.material}}</p>
              <p class="file-param-text">颜色：{{scope.row.color}}</p>
              <p class="file-param-text">填充：{{scope.row.padding}}</p>
              <p class="file-param-text">后处理：{{scope.row.dispose}}</p>
            </div>
            <p v-else
              class="file-param-text-wrapper">点击选择加工参数</p>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address"
        min-width="120"
        label="数量（件）">
        <template slot-scope="scope">
          <el-input-number size="small"
            :min="0"
            v-model="scope.row.number"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="address"
        min-width="160"
        label="预估费用（预估）">
        <template slot-scope="scope">
          <p v-if="!scope.row.material">请确认加工参数</p>
          <p v-else-if="!scope.row.length">请确认尺寸</p>
          <p v-else>30积分</p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dropdown trigger="click"
            placement="bottom"
            @command="handleCommand($event, scope.row)">
            <span class="el-dropdown-link">
              <i class="el-icon-more"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="copy">复制此项</el-dropdown-item>
              <el-dropdown-item command="del">删除此项</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-buttons">
      <div class="left">
        <el-button class="btn" @click="handleCommand">批量编辑</el-button>
        <el-button class="btn" @click="handleCommand">批量删除</el-button>
      </div>
      <div class="right">
        <el-button class="btn">
          <img class="btn-img"
            src="@/assets/imgs/upload.png"
            alt="logo">
          <span>继续上传文件</span>
        </el-button>
      </div>
    </div>
    <div class="submit-buttons">
      <el-button class="btn btn-left" @click="backToUpload">取消返回</el-button>
      <el-button class="btn" @click="handleCommand"
        type="primary">提交制作审核</el-button>
    </div>
    <CommonDialog :visible.sync="showEditSize"
      width="500px"
      @submit="submitEditSize"
      title="附件信息">
      <div class="edit-size-form">
        <el-form ref="form"
          :model="editObj"
          label-width="80px">
          <el-form-item>
            <p slot="label">极限尺寸<span class="required-icon"> *</span></p>
            <el-col :span="6">
              <el-input type="number"
                placeholder="长"
                v-model="editObj.length"></el-input>
            </el-col>
            <el-col :span="2"
              class="input-icon">×</el-col>
            <el-col :span="6">
              <el-input type="number"
                placeholder="宽"
                v-model="editObj.length"></el-input>
            </el-col>
            <el-col :span="2"
              class="input-icon">×</el-col>
            <el-col :span="6">
              <el-input type="number"
                placeholder="高"
                v-model="editObj.length"></el-input>
            </el-col>
            <el-col :span="2"
              class="input-icon">mm</el-col>
          </el-form-item>
          <el-form-item>
            <p slot="label">预估体积<span class="required-icon"> *</span></p>
            <el-col :span="14">
              <el-input type="number"
                placeholder="预估体积"
                v-model="editObj.length"></el-input>
            </el-col>
            <el-col :span="3"
              class="input-icon">mm³</el-col>
          </el-form-item>
        </el-form>
      </div>
    </CommonDialog>
    <CommonDialog :visible.sync="showEditParam"
      width="500px"
      @submit="submitEditParam"
      title="附件信息">
      <div class="edit-size-form">
        <el-form ref="form"
          :model="editObj"
          label-width="80px">
          <el-form-item>
            <p slot="label">材料<span class="required-icon"> *</span></p>
            <el-cascader style="width:100%"
              v-model="editObj.material"
              :options="cascaderOptions"></el-cascader>
          </el-form-item>
          <el-form-item label="后处理">
            <el-select style="width:100%"
              v-model="editObj.color"
              placeholder="点击选择">
              <el-option v-for="option in commonOptions"
                :key="option"
                :label="option"
                :value="option">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <p slot="label">机器精度<span class="required-icon"> *</span></p>
            <el-cascader style="width:100%"
              v-model="editObj.dispose"
              :options="cascaderOptions"></el-cascader>
          </el-form-item>
          <el-form-item label="表面效果">
            <el-select style="width:100%"
              v-model="editObj.padding"
              placeholder="点击选择">
              <el-option v-for="option in commonOptions"
                :key="option"
                :label="option"
                :value="option">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </CommonDialog>
  </div>
</template>

<script>
import imgModel from '@/assets/imgs/model.png'
import imgZip from '@/assets/imgs/zip.png'
import CommonDialog from '@/components/CommonDialog.vue'
export default {
  components: {
    CommonDialog,
  },
  data() {
    return {
      showEditSize: false,
      showEditParam: false,
      tableData: [
        {
          name: 'asdsa.obj',
          img: imgModel,
          length: 75,
          width: 75,
          height: 75,
          volumn: '65,171.11mm³',
          surface: '30428.25m㎡',
          material: '',
          color: '',
          padding: '',
          dispose: '',
          number: 1,
        },
        {
          name: '测试模型123456789101112',
          img: imgModel,
          length: 75,
          width: 75,
          height: 75,
          volumn: '65,171.11mm³',
          surface: '30428.25m㎡',
          material: '高精度进口树脂',
          color: '白',
          padding: '实心',
          dispose: '不处理',
          number: 2,
        },
        {
          name: '文件',
          img: imgZip,
          length: '',
          width: '',
          height: '',
          address: '上海市普陀区金沙江路 1518 弄',
          material: '高精度进口树脂',
          color: '白',
          padding: '实心',
          dispose: '不处理',
          number: 3,
        },
      ],
      multipleSelection: [],
      editObj: {},
      commonOptions: ['选项1', '选项2'],
      cascaderOptions: [
        {
          value: 'op1',
          label: '选项1',
          children: [
            {
              value: 'op1sub1',
              label: '子选项1',
            },
            {
              value: 'op1sub2',
              label: '子选项2',
            },
          ],
        },
        {
          value: 'op2',
          label: '选项2',
          children: [
            {
              value: 'op2sub1',
              label: '子选项1',
            },
            {
              value: 'op2sub2',
              label: '子选项2',
            },
          ],
        },
      ],
    }
  },

  methods: {
    handleCommand(command, row) {
      this.$message({
        message: '操作成功',
        type: 'success',
      })
      console.log(command, row)
    },
    editSize() {
      this.showEditSize = true
    },
    editParam() {
      this.showEditParam = true
    },
    submitEditSize() {
      this.$message({
        message: '编辑成功',
        type: 'success',
      })
    },
    submitEditParam() {
      this.$message({
        message: '编辑成功',
        type: 'success',
      })
    },
    backToUpload() {
      this.$emit('backToUpload')
    }
  },
}
</script>
<style scoped lang='scss'>
.files-table {
  .table {
    border: 1px solid #f2f0f0;
    border-radius: 4px;
    /deep/ .el-table::before {
      height: 0px;
    }

    .file-img {
      width: 100px;
      height: 100px;
      margin: 10px 0 0 0;
    }
    .file-info-text {
      font-size: 14px;
      color: #4d4d4d;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 19px;
    }
    .file-info-tag {
      margin-top: 40px;
    }
    /deep/ .el-tag {
      display: inline-block;
      height: auto;
      cursor: pointer;
      font-size: 14px;
      line-height: 19px;
      padding: 10px;
    }
    .file-param-text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /deep/ .el-input-number--small {
      width: 100px;
    }
  }
  .table-buttons {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    .btn {
      background: #fbfafa;
    }
    .right {
      .btn {
        width: 200px;
      }
      .btn-img {
        width: 20px;
        height: 20px;
        margin-right: 20px;
        vertical-align: middle;
      }
    }
  }

  .submit-buttons {
    float: right;
    margin-top: 110px;
    margin-right: -45px;
    .btn {
      width: 170px;
      height: 50px;
    }
    .btn-left {
      margin-right: 10px;
    }
  }
  .edit-size-form {
    margin: 20px 0;
    .required-icon {
      color: $--color-primary;
    }
    .input-icon {
      text-align: center;
    }
  }
}
</style>