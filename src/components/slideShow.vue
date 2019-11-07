<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in slides" :key="index">
        <a :href="slide.href">
          <img :src="slide.src"/>
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import  'swiper/css/swiper.css';
  export default {
    name: "slideShow",
    props:{
      slides:Array
    },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style scoped>

  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper {
    height: 400px;
  }

  .swiper-slide img {
    max-width: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
  }
</style>
