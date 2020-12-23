<template>
  <div class="heid">
    <Hed></Hed>
    <Sou></Sou>
    <!-- <Fot></Fot> -->

    <div class="big_lun">
      <div class="gre">
        <span class="lef1">拍拍优品</span>
        <span class="lef2"><a href="">拍拍回收</a></span>
        <span class="lef2">|</span>
        <span class="lef2"><a href="">拍拍夺宝</a></span>
        <span class="lef2">|</span>
        <span class="lef2"><a href="">玩3C</a></span>
        <span class="lef2">|</span>
        <span class="lef2"><a href="">下载APP</a></span>
      </div>

      <div class="row">
        <Tab></Tab>
        <div class="clum">
          <div class="row">
            <swiper></swiper>
            <img src="../images/lb.png" alt="" />
            <div></div>
          </div>
          <div>
            <swipered></swipered>
          </div>
        </div>
      </div>
    </div>

    <div class="lef4">
      <h2><b>限时秒杀</b></h2>
    </div>
    <div class="lef3">
      <swipers></swipers>
    </div>

    <!-- 商品列表 -->
    <div class="lef5">
      <h2><b>酷玩3C</b></h2>

        <div class="fled">
          <div class="lefted">
            <h2>二手馆</h2>
          </div>
          <div class="righted">|高价回收，去赚钱</div>
        </div>
      <Goodslist :goods="goods"></Goodslist>
    </div>

    <Fot></Fot>
  </div>
</template>

<script>
import Hed from "../components/Hed";
import Sou from "../components/Sou";
import Fot from "../components/Fot";
import swiper from "../components/Swiper.vue";
import swipered from "../components/Swipered.vue";
import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css";
import Tab from "../components/Tab.vue";
import swipers from "../components/Swipers.vue";
import Goodslist from "../components/goods/Goodslist.vue";

export default {
  name: "Home",
  components: {
    Hed,
    Sou,
    Fot,
    swiper,
    swipered,
    Tab,
    swipers,
    Goodslist,
  },
  data() {
    return {
      goods: [
        {
          id: 1,
          bookimg: require("../images/17.png"),
          imgs:
            "【二手9成新】苹果6sPlus手机 Apple iPhone6sPlus 苹果6SP 二手手机 玫瑰金 64G 全网通",
          price: "2669",
        },
        {
          id: 2,
          bookimg: require("../images/18.png"),
          imgs:
            "【二手99新】酷睿i7/i5游戏台式机组装电脑主机四核4G独显吃鸡电脑 送新24英寸超薄IPS显示器",
          price: "989",
        },
        {
          id: 3,
          bookimg: require("../images/19.png"),
          imgs:
            "【二手9成新】华为 HUAWEI P20 手机 AI智慧徕卡双摄全面屏游戏手机 全网通4G 双卡双待 亮黑色 6GB+64GB",
          price: "1059",
        },
        {
          id: 4,
          bookimg: require("../images/20.png"),
          imgs:
            "【二手9成新】小米（MI） 小米8 全面屏游戏智能手机 全网通4G 双卡双待 黑色 6GB+128GB",
          price: "1199",
        },
        {
          id: 5,
          bookimg: require("../images/22.png"),
          imgs:
            "【二手99新】酷睿i7/i5游戏台式机组装电脑主机四核4G独显吃鸡电脑 送新24英寸超薄IPS显示器 ",
          price: "2299.00",
        },
        {
          id: 6,
          bookimg: require("../images/23.png"),
          imgs:
            "【二手99新】24/27/32英寸曲面一体机电脑主机i5/i7 GTX1070游戏台式机组装电脑全套 套餐一 27英寸i5 2",
          price: "999.00",
        },
        {
          id: 7,
          bookimg: require("../images/24.png"),
          imgs:
            "【二手99新】酷睿I5四核台式机8G独显超GTX1060 6G电脑主机DIY组装机i7吃鸡、逆水寒 套餐三 I5 3470/1",
          price: "2299.00",
        },
        {
          id: 8,
          bookimg: require("../images/25.png"),
          imgs:
            "【二手99新】酷睿i7/i5游戏台式机组装电脑主机四核4G独显吃鸡电脑 送新24英寸超薄IPS显示器",
          price: "1699.00",
        },
                {
          id: 9,
          bookimg: require("../images/27.png"),
          imgs:
            "【二手95新】苹果 Apple iPad Pro 10.5英寸平板电脑 Pro 64G wifi 玫瑰金+原装充电套装",
          price: "5399.00",
        },
                {
          id: 10,
          bookimg: require("../images/28.png"),
          imgs:
            "【二手95新】苹果 Apple iPad Pro 10.5英寸平板电脑 Pro 64G wifi 深空灰+原装充电套装",
          price: "5999.00",
        },
                {
          id: 11,
          bookimg: require("../images/29.png"),
          imgs:
            "【二手95新】苹果 Apple iPad Pro 10.5英寸平板电脑 Pro 256G wifi 深空灰+原装充电套装",
          price: "6999",
        },
                {
          id: 12,
          bookimg: require("../images/30.png"),
          imgs:
            "【二手9新】Apple/苹果 iPad Pro 9.7英寸 二手平板电脑 pro9.7 32G WiFi版",
          price: "1699.00",
        },
                {
          id: 13,
          bookimg: require("../images/32.png"),
          imgs:
            "【二手95新】浪琴 自动机械 男士腕表 二手钟表 手表 浪琴L2.673.4.78.6 表径40",
          price: "14499.00",
        },
                {
          id: 14,
          bookimg: require("../images/33.png"),
          imgs:
            "【二手95新】浪琴 自动机械 男士腕表 二手钟表 手表 浪琴L2.673.4.78.3表径40",
          price: "14599.00",
        },

                {
          id: 15,
          bookimg: require("../images/34.png"),
          imgs:
            "【二手95新】浪琴 自动机械 男士腕表 二手钟表 手表 浪琴L2.673.4.78.3表径40",
          price: "10540.00",
        },
                {
          id: 16,
          bookimg: require("../images/35.png"),
          imgs:
            "【二手95新】浪琴 自动机械 男士腕表 二手钟表 手表 浪琴L2.673.4.78.3表径40",
          price: "5000.00",
        },
                {
          id: 17,
          bookimg: require("../images/37.png"),
          imgs:
            "【二手准新品】全新 LV/路易威登 女包 老花五合一麻将包 明星热款 斜挎包 多款可选 粉色肩带 M44840",
          price: "20449.00",
        },
                        {
          id: 18,
          bookimg: require("../images/38.png"),
          imgs:
            "【二手准新品】全新 LV/路易威登 女包 老花五合一麻将包 明星热款 斜挎包 多款可选 粉色肩带 M44840",
          price: "16618.00",
        },
                        {
          id: 19,
          bookimg: require("../images/39.png"),
          imgs:
            "【二手准新品】全新 LV/路易威登 女包 老花五合一麻将包 明星热款 斜挎包 多款可选 粉色肩带 M44840",
          price: "5400.00",
        },
                        {
          id: 20,
          bookimg: require("../images/40.png"),
          imgs:
            "【二手准新品】全新 LV/路易威登 女包 老花五合一麻将包 明星热款 斜挎包 多款可选 粉色肩带 M44840",
          price: "7299.00",
        },



      ],
    };
  },
  methods: {
    // cli(index) {
    //   this.act = index;
    // },
    // clied(index) {
    //   index = -1;
    //   this.act = index;
       
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*公共类*/
* {
  margin: 0 auto;
}
.sty {
  font-size: 15px;
  color: #fd7950;
}
.higed {
  height: 315px;
}
.ptop {
  margin-top: 10px;
  margin-bottom: 5px;
  overflow: hidden;
}
.paded {
  padding-top: 0px;
}
.shop table tr td {
  padding-left: 0px;
  font-size: 10px;
  width: 200px;
}
.shop table {
  background-color: white;
  padding-left: 0px;
  margin-bottom: 30px;
}
.lefted {
  float: left;
  margin-left: 60px;
}
.righted {
  float: right;
  margin-right: -10px;
  padding-top: 0px;
}
.fled {
  display: flex;
  flex-direction: row;
  width: 1085px;
}

.heid {
  height: 1800px;
  background-color: #f5f5f5;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  color: rgba(255, 255, 255, 0.596);
}
.big_lun {
  width: 1085px;
  margin-top: 30px;
}
span {
  color: white;
  font-size: 15px;
}
.gre {
  background-color: #24ca2d;
  line-height: 40px;
}
.lef1 {
  padding-left: 75px;
  padding-right: 75px;
  background-color: #26d32f;
  padding-top: 10px;
  padding-bottom: 10px;
}
.lef2 {
  margin-left: 20px;
}
.bgc {
  background-color: #585858;
  margin-left: 0px;
}
td {
  padding-left: 20px;
  padding-top: 10px;
  border: 1px dotted white;
  width: 210px;
}
#bord {
  border-left: 0;
  border-right: 0;
}
.sml {
  font-size: 13px;
}
.lig {
  line-height: 22px;
}

.row {
  display: flex;
  flex-direction: row;
}
.clum {
  display: flex;
  flex-direction: column;
  margin-left: 0px;
}
.lb img {
  width: 280px;
  height: 350px;
}
.lef3 {
  margin-top: 30px;
}

.lef4 {
  margin-top: 10px;
  margin-left: 50px;
  text-align: center;
}
.lef5 {
  margin-top: 50px;
  margin-left: 200px;
  text-align: center;
  background-color: #f5f5f5;
  height: 1200px;
  width: 1085px;
}
</style>



