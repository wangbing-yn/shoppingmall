<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../images/2.png" class="swiper-lazy" />
      </div>
      <div class="swiper-slide">
        <img src="../images/3.png" class="swiper-lazy" />
      </div>
      <div class="swiper-slide">
        <img src="../images/4.png" class="swiper-lazy" />
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
  width: 630px;
  height: 350px;
}

img {
  width: 630px;
  height: 350px;
}
.swiper-wrapper {
  width: 630px;
}

</style>