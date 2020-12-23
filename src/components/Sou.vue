<template>
  <div class="fixed">
    <div><img src="../images/1.png" /></div>
    <div class="lef1">拍拍优品</div>
    <div class="lef2"  @mouseover="person_info()" @mouseout="cl_person_info()">
      <a href=""
        >全部分类 v</a
      >
    </div>
    <div
      class="hoverShow1"
      v-show="person_con"
      @mouseover="person_infoContinue()"
      @mouseout="cl_person_infoContinue()"
    >
      <table class="tabled">
        <tr v-for="item in message" :key="item">
          <td>{{ item }}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>

    <div class="container-fluid lef3">
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input
            type="text"
            class="form-control wid"
            placeholder="苹果笔记本"
          />
        </div>
        <button class="lef4">搜索</button>
      </form>
      <table class="stye">
        <tr >
          <td v-for="item in mess" :key="item">
            <a href="">{{item}}</a>
          </td>
        </tr>
      </table>
    </div>

      <button class="lef5" @click="carshop">我的购物车 <img class="imgc" src="../images/shopcar.png" alt=""></button>
  </div>
</template>

<script>
export default {
  name: "Sou",

  data() {
    return {
      person_con: false,
      isperson_infoContinue:false,
      message: [
        "家用电器",
        "手机、运营商、数码",
        "电脑、办公",
        "家居、家装、厨具",
        "男装、女装、童装、内衣、",
        "美妆、个护清理、宠物",
        "女鞋、箱包、钟表、珠宝",
        "男鞋、运动、户外",
        "房产、汽车、汽车用品",
        "母婴、玩具乐器",
        "食品、酒类、生鲜、特产",
        "艺术、礼品鲜花、农贸绿植",
        "医药保健、文娱教育",
      ],
      mess:['iPhone 11','低价洗衣机','爆款浪琴','iPhone Xs','LV经典款','热销iPad']
    };
  },
  methods: {
    person_info() {
      this.person_con = true;
    },

    cl_person_info() {
      if ((this.isperson_infoContinue === true)) {
        this.person_con = true;
      } else {
        this.person_con = false;
      }
    },
    //鼠标进入到新的div时让中间变量为true
    person_infoContinue() {
      this.person_con = true;
      this.isperson_infoContinue = true;
    },

    cl_person_infoContinue() {
      this.isperson_infoContinue = false;
      this.person_con = false;
    },
    carshop(){
      if(this.$store.state.carlist.length===0){
        this.$store.state.gouwu=true
      }
      else{
        this.$store.state.gouwu=false
      }
          this.$router.push({
         path:'/carshop'
       })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixed {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-left: 235px;
}
.lef1 {
  margin-left: 45px;
  margin-top: 18px;
  font-size: 20px;
  color: #898989;
}
.lef2 {
  margin-left: 15px;
  margin-top: 20px;
  border: 1px solid #cccccc;
  line-height: 23px;
  height: 25px;
  width: 70px;
  text-align: center;
  font-size: 12px;
}
a {
  text-decoration: none;
  color: #898989;
}
a:hover {
  color: #ff0000;
}
.hoverShow1 {
  position: absolute;
  top: 94px;
  left: 475px;
  z-index: 3;
  background-color: #fff;
}
td {
  padding-top: 10px;
  padding-top: 5px;
  padding-left: 10px;
  color: #898989;
}

.tabled {
  border-bottom: 1px solid#CCCCCC;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
}

.lef3 {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 55px;
  left: 580px;
  z-index: 1;
  background-color: #fff;
}
.wid {
  width: 460px;
  border: 2px solid#01B30C;
}
.lef4 {
  position: absolute;
  left: 488px;
  background-color: #01b30c;
  outline: none;
}
button {
  outline: 0;
  border: none;
  width: 63px;
  height: 34px;
  color: white;
}
.stye {
  font-size: 10px;
  margin-left: 10px;
}
.lef5{
  position: absolute;
  left: 1180px;
  top: 60px;
  color: black;
  width: 125px;
  z-index:10;
}
.imgc{
  width: 20px;
  height: 20px;
}
</style>
