<template>
  <div class="heid">
    <Hed></Hed>
    <Sou></Sou>

    <div class="toped">
      <div class="rowed">
        <div class="lef1">
          <img v-bind:src="$route.query.bookimg" alt="" class="big1" />
        </div>
        <div class="lef2">
          <ul>
            <li class="clor">
              <b>
                <!-- 【99新】折扣机 美菱BCD-660WUP9BA十字对开门冰箱
                M鲜生风冷无霜变频 -->
                {{ $route.query.imgs }}
              </b>
            </li>
            <li class="clor1">
              物流送货入户；质保凭证齐全，厂家全国联保整机一年主部件三年质保+送延保一年，商品未使用仅轻微瑕疵，价保30天，降价补差！
            </li>
            <li>
              <font class="clor3">京东价</font>&nbsp;&nbsp;<font
                class="priced"
                >¥{{ $route.query.price }}</font
              >
              &nbsp;&nbsp;&nbsp;<font class="clor2">降价通知</font>
            </li>
            <li>
              <font class="clor3">配送至：</font>
              <select class="clo1">
                <option value="volvo">江苏 苏州</option>
              </select>
            </li>
            <li>
              <font class="clor3">增值税：</font>
              <select class="clo1">
                <option value="volvo">意外保1年 ¥189.00</option>
              </select>
              <select class="clo1">
                <option value="volvo">意外保1年 ¥189.00</option>
              </select>
            </li>
            <li>
              <span>月销量 <font class="cor">1618</font></span>
              <span>累计销量 <font class="cor">6016</font></span>
              <span>累计评价 <font class="cor">646</font></span>
            </li>
             <!-- <li>
               <button></button>
             </li> -->
            <li>
              <button class="gou" @click="addshop">
                <font class="clor4"><b>加入购物车</b></font>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- <ul>
      <li>{{$store.state.carlist}}</li>
    </ul> -->

    <div class="lef3">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/Daohang" @click="goTo('/Good/Daohang')"
          >处理中心</el-menu-item
        >

        <el-menu-item index="/Daohang1" @click="goTo('/Good/Daohang1')"
          >订单管理</el-menu-item
        >

        <el-menu-item index="/Daohang2" @click="goTo('/Good/Daohang2')"
          >订单管理</el-menu-item
        >

        <router-view></router-view>
      </el-menu>
    </div>

    <Fot></Fot>
  </div>
</template>

<script>
import Hed from "../components/Hed";
import Sou from "../components/Sou";
import Fot from "../components/Fot";

export default {
  name: "Good",
  components: {
    Hed,
    Sou,
    Fot,
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    },
    
    addshop() {
      const goods = {};
      goods.imgs = this.$route.query.imgs;
      goods.bookimg = this.$route.query.bookimg;
      goods.price = this.$route.query.price;
      goods.id = this.$route.query.id;
      // console.log(this.$route.query.imgs)

      this.$store.commit("addshop", goods);
     
     
      swal("添加成功", "商品已经被成功添加", "success");
 
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*公共类*/
* {
  margin: 0 auto;
}
.lef3 {
  margin-left: 177px;
}
.clo1 {
  font-size: 12px;
  color: #666666;
}
.cor {
  color: #e4393c;
}
span {
  margin-left: 60px;
}
.clor4 {
  color: white;
  font-size: 20px;
  
}
.clor3 {
  color: #999999;
}
.clor2 {
  color: #005aa0;
  font-size: 10px;
}
.clor1 {
  font-size: 10px;
  color: #e4393c;
}
.clor {
  font-size: 20px;

  height: 83px;
  width: 690px;
}
.priced {
  font-size: 25px;
  color: #e4393c;
}
.big1 {
  width: 350px;
  height: 350px;
}
li {
  padding-top: 15px;
  list-style: none;
}
.lef2 {
  padding-top: 20px;
  margin-left: -180px;
  height: 300px;
}
.lef1 {
  margin-left: 200px;
  border: 1px solid#EEEEEE;
}
.lef1 img {
  width: 350px;
  height: 350px;
}
.rowed {
  display: flex;
  flex-direction: row;
}
.heid {
  height: 1800px;
}
.toped {
  margin-top: 50px;
}
.gou {
  background-color: #01c30b;
  border: 0;
  line-height: 45px;
  text-align: center;
  width: 150px;
  outline:none;
}
</style>
