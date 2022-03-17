<template>
  <div class='prodution-services'>
    <BigTitle cn-text="预约制造"
      en-text="PRODUCTION SERVICES" />
    <div class="content">
      <div class="step-1">
        <p class="title">
          <img class="title-img"
            src="@/assets/imgs/title1.png"
            alt="logo">
          <span>选择加工工艺</span>
        </p>
        <div class="types">
          <div :class="['type', nowType ===  type.text ? 'selected' : '']"
            v-for="(type, index) in types"
            @click="changeType(type)"
            :key="index">
            <img class="type-img"
              :src="type.logo"
              alt="logo">
            <p class="type-text">{{type.text}}</p>
          </div>
        </div>
      </div>
      <div class="step-2">
        <div class="title-wrapper">
          <p class="title">
            <img class="title-img"
              src="@/assets/imgs/title2.png"
              alt="logo">
            <span>上传图纸附件</span>
          </p>
          <el-button class="video"
            @click="showVideo = true">
            <img class="video-img"
              src="@/assets/imgs/video.png"
              alt="logo">
            <span>操作演示</span>
          </el-button>
        </div>
        <Uploader v-show="showUpload"
          @submitFiles="submitFiles" />
        <FilesTable @backToUpload="showUpload = true" v-show="!showUpload" />
      </div>
    </div>
    <CommonDialog :visible.sync="showVideo"
      width="1000px"
      :show-btns="false"
      title="操作演示">
      <video width="945"
        height="500"
        controls>
        <source src="https://www.runoob.com/try/demo_source/movie.mp4"
          type="video/mp4">
        您的浏览器不支持 HTML5 video 标签。
      </video>
    </CommonDialog>
    <CommonDialog :visible.sync="showChangeTypeTip"
      width="500px"
      @submit="submitChangeType"
      title="注意事项">
      <div class="change-type-tip">
        <img class="tip-img"
          src="@/assets/imgs/zhuyi.png"
          alt="logo">
        <p class="tip-text">切换工艺后已上传的图纸及填写的信息将不会被保存，
          是否确认需要切换？</p>
      </div>
    </CommonDialog>
  </div>
</template>
<script>
import img3D from '@/assets/imgs/3D.png'
import imgQG from '@/assets/imgs/QG.png'
import imgFH from '@/assets/imgs/FH.png'
import imgZC from '@/assets/imgs/ZC.png'
import imgCNC from '@/assets/imgs/CNC.png'
import BigTitle from '@/components/BigTitle.vue'
import CommonDialog from '@/components/CommonDialog.vue'
import Uploader from './components/uploader.vue'
import FilesTable from './components/filesTable.vue'
export default {
  components: {
    BigTitle,
    Uploader,
    FilesTable,
    CommonDialog,
  },
  data() {
    return {
      types: [
        {
          logo: img3D,
          text: '3D打印',
        },
        {
          logo: imgCNC,
          text: 'CNC机加工',
        },
        {
          logo: imgQG,
          text: '切割加工',
        },
        {
          logo: imgZC,
          text: '铸造加工',
        },
        {
          logo: imgFH,
          text: '复合加工',
        },
      ],
      nowType: '3D打印',
      clickType: '',
      showUpload: true,
      showVideo: false,
      showChangeTypeTip: false,
    }
  },
  methods: {
    submitFiles(files) {
      this.showUpload = false
      console.log(files)
    },
    changeType(type) {
      if (this.nowType !== type.text) {
        this.showChangeTypeTip = true
        this.clickType = type.text
      }
    },
    submitChangeType() {
      this.nowType = this.clickType
    },
  },
}
</script>
<style scoped lang='scss'>
.prodution-services {
  padding-top: 90px;
  padding-bottom: 60px;
  .content {
    width: 72%;
    // height: 750px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 200px;
    background: #fff;
    border-radius: 10px;
    padding: 30px 45px;
    .title {
      line-height: 30px;
      font-size: 15px;
      color: #4d4d4d;
      img {
        vertical-align: middle;
        width: 30px;
        height: 30px;
        margin-right: 15px;
      }
    }
    .step-1 {
      .types {
        margin-top: 30px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        .type {
          width: 18%;
          height: 140px;
          border: 1px solid #f5eded;
          color: #1a1a1a;
          text-align: center;
          cursor: pointer;
          .type-img {
            width: 40px;
            height: 40px;
            margin: 40px 0 18px 0;
          }
          .type-text {
            font-size: 18px;
            font-weight: 500;
          }
          &:hover {
            background: #fbfafa;
          }
        }
        .selected {
          color: $--color-primary;
          background: #fbfafa;
          border: 2px solid $--color-primary;
        }
      }
    }
    .step-2 {
      margin-top: 65px;
      .title-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        .video {
          width: 120px;
          background: #fbfafa;
          border-radius: 4px;
          text-align: center;
          img {
            vertical-align: middle;
            width: 22px;
            height: 22px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .change-type-tip {
    padding: 10px 45px;
    text-align: center;
    .tip-img {
      width: 60px;
      height: 60px;
    }
    .tip-text {
      font-size: 15px;
      color: #4d4d4d;
      margin-top: 25px;
      line-height: 20px;
    }
  }
}
</style>