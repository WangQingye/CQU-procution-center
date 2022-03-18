<template>
  <div class='uploader-wrapper'>
    <div class="uploader" v-show="showUpload">
      <el-upload drag :on-progress="onProgress" :before-upload="beforeUpload" action="https://jsonplaceholder.typicode.com/posts/" accept=".step,.stp,.stl,.ply,.obj,.zip,.rar" :limit="10" :show-file-list="false" multiple>
        <div class="upload">
          <img class="upload-img" src="@/assets/imgs/upload.png" alt="logo">
          <p class="upload-text">拖拽或点击上传文件</p>
          <p class="upload-tip">
            3D预览支持格式：STEP(.step, .stp)，STL(.stl)，PLY(.ply)，OBJ(.obj) ，可上传压缩包（zip、rar）直接上传
            单次上传文件≤10个，单个文件大小&lt;100M
          </p>
        </div>
      </el-upload>
    </div>
    <div class="upload-list upload" v-show="!showUpload">
      <ul class="upload-files">
        <li v-for="(file,index) in uploadFiles" class="upload-file" :key="index">
          <img class="file-logo" src="@/assets/imgs/zip.png" alt="logo">
          <p class="file-name">{{file.name}}</p>
          <p class="file-size">{{(file.size / 1024 / 1024).toFixed(1)}}MB</p>
          <el-progress class="progress" color="#409EFF" :percentage="50"></el-progress>
          <p class="file-operation">
            <span>上传中</span>&nbsp;&nbsp;|&nbsp;&nbsp; <span class="del-btn">删除</span>
          </p>
        </li>
      </ul>
      <div class="buttons">
        <el-button class="btn" @click="showUpload=true">点击添加上传文件</el-button>
        <el-button class="btn" type="primary" @click="submitFiles">确认提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      uploadFiles: [
        {
          size: 100000000,
          name: '模拟文件.zip',
        },
        {
          size: 100000000,
          name: '模拟文件.zip',
        },
      ],
      showUpload: true,
    }
  },
  methods: {
    beforeUpload(file) {
      if (file.size / 1024 / 1024 > 100) {
        this.$message({
          message: '文件大小超过100M，请压缩后上传',
          type: 'warning',
        })
        return false
      } else {
        this.uploadFiles.unshift(file)
      }
    },
    onProgress(event, file, fileList) {
      console.log(event, file, fileList)
      this.showUpload = false
    },
    submitFiles() {
      this.$emit('submitFiles', this.uploadFiles)
    },
  },
}
</script>
<style scoped lang='scss'>
.uploader-wrapper {
  /deep/ .el-upload {
    width: 100%;
    height: 357px;
  }
  /deep/ .el-upload-dragger {
    width: 100%;
    height: 357px;
    border: none;
  }
  .upload {
    text-align: center;
    width: 100%;
    height: 357px;
    background: #fbfafa;
    border: 1px solid #f5f0f0;
    border-radius: 4px;
    .upload-img {
      width: 50px;
      height: 50px;
      margin: 83px 0 50px 0;
    }
    .upload-text {
      font-size: 16px;
      font-weight: 500;
      color: #4d4d4d;
      margin-bottom: 54px;
    }
    .upload-tip {
      width: 724px;
      margin: 0 auto;
      height: 33px;
      font-size: 15px;
      line-height: 20px;
      font-weight: 400;
      color: #999999;
    }
  }
  .upload-list {
    padding: 32px 50px 28px 50px;
    box-sizing: border-box;

    .upload-files {
      height: 220px;
      margin-bottom: 15px;
      overflow-y: auto;
      .upload-file {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        .file-logo {
          width: 40px;
          height: 40px;
        }
        .file-name {
          font-size: 14px;
          color: #4d4d4d;
          min-width: 20%;
          text-align: left;
        }
        .file-size {
          font-size: 14px;
          color: #4d4d4d;
          margin-right: 10%;
        }
        .progress {
          width: 30%;
        }
        .file-operation {
          margin-left: 8%;
          min-width: 105px;
          font-size: 14px;
          color: #4d4d4d;
          .del-btn {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .buttons {
      float: right;
      .btn {
        width: 200px;
        height: 60px;
        margin-left: 40px;
      }
    }
  }
}
</style>