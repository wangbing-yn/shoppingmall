<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="lef">
          <div class="ss">
            <img src="../images/11.png" class="swiper-lazy" />
            【二手95新】Sony/索尼 FE

            <p class="sty">¥483.00</p>
          </div>
        </div>
        <div class="lef">
          <div class="ss">
            <img src="../images/12.png" class="swiper-lazy" />
            【二手9成新】联想电脑台式
            <p class="sty">¥483.00</p>
          </div>
        </div>
        <div class="lef">
          <div class="ss">
            <img src="../images/13.png" class="swiper-lazy" />
            【二手9成新】苹果7 plus
            <p class="sty">¥483.00</p>
          </div>
        </div>
        <div class="lef">
          <div class="ss">
            <img src="../images/14.png" class="swiper-lazy" />
            【二手9成新】联想Thinkpad
            <p class="sty">¥483.00</p>
          </div>
        </div>
        <div class="lef">
          <div class="ss">
            <img src="../images/15.png" class="swiper-lazy" />
            【二手9成新】Apple iPhone
            <p class="sty">¥483.00</p>
          </div>
        </div>
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
  width: 1105px;
  height: 190px;
}
.ss {
  width: 181px;
  height: 140px;
}
img {
  width: 181px;
  height: 140px;
}
.swiper-wrapper {
  width: 1500px;
}

.lef {
  float: left;
  margin-left: 35px;
}
.wid {
  width: 10px;
}
.swiper-slide {
  padding-left: 0px;
}
.sty{
   font-size: 20px;
   color: #FD7950;
}
</style>