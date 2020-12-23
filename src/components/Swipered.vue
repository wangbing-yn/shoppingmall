<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
          <div class="lef"><img src="../images/5.png" class="swiper-lazy" /></div>
          <div class="lef"><img src="../images/6.png" class="swiper-lazy" /></div>
          <div class="lef"><img src="../images/7.png" class="swiper-lazy" /></div>
          <div class="lef"><img src="../images/8.png" class="swiper-lazy" /></div>       
      </div>
    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>


<script>
import Swiper from "swiper"; //引用swiper
import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css"; //引用css

export default {
  data() {
    return {};
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要前进后退按钮
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style scoped>
.swiper-container {
  width: 876px;
  height: 160px;
}

img {
  width: 219px;
  height: 140px;
  
}
.swiper-wrapper {
  width: 930px;
}

.lef{
    float: left;
}
</style>