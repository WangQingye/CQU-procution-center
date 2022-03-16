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
          <div :class="['type', nowType ===  tech.text ? 'selected' : '']"
            v-for="(tech, index) in techs"
            @click="nowType = tech.text"
            :key="index">
            <img class="type-img"
              :src="tech.logo"
              alt="logo">
            <p class="type-text">{{tech.text}}</p>
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
          <p class="video">
            <img class="video-img"
              src="@/assets/imgs/video.png"
              alt="logo">
            <span>操作演示</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img3D from '@/assets/imgs/3D.png'
import imgQG from '@/assets/imgs/QG.png'
import imgFH from '@/assets/imgs/FH.png'
import imgZC from '@/assets/imgs/ZC.png'
import imgCNC from '@/assets/imgs/CNC.png'
import BigTitle from '@/components/BigTitle.vue'
export default {
  components: {
    BigTitle,
  },
  data() {
    return {
      techs: [
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
    }
  },
  methods: {},
}
</script>
<style scoped lang='scss'>
.prodution-services {
  padding-top: 90px;
  .content {
    margin-top: 40px;
    width: 72%;
    height: 750px;
    margin: 0 auto;
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
          .type-img {
            width: 40px;
            height: 40px;
            margin: 40px 0 18px 0;
          }
          .type-text {
            font-size: 18px;
            font-weight: 500;
          }
        }
        .selected {
          color: $--color-primary;
          background: #fbfafa;
          border: 2px solid #f6253b;
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
      }
      .video {
        width: 120px;
        height: 40px;
        background: #fbfafa;
        border: 1px solid #f5f0f0;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        img {
          width: 22px;
          height: 22px;
          margin: 0px 9px 0 14px;
        }
      }
    }
  }
}
</style>