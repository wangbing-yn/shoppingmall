<template>
  <div class="heid">
    <Hed></Hed>
    <Sou></Sou>
    <!-- <table>
      <tr v-for="item in this.$store.state.carlist" :key="item">
        <td>
          {{item.imgs}}
        </td>
      </tr>
    </table> -->

    <div v-bind:class="{'goucar':this.$store.state.gouwu}">
      <table class="lef">
        <thead>
          <tr>
            <th>商品</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in this.$store.state.carlist" :key="item.id">
            <td>
              <div class="flxed">
                <div class="imged">
                  <img v-bind:src="item.bookimg" alt="" />
                </div>
                <div class="toped">
                  {{ item.imgs }}
                </div>
              </div>
            </td>
            <td class="ted">¥{{ item.price }}</td>
            <td class="ted">
              <button @click="add(index)">+</button>
              <span>{{ item.count }}</span>
              <button
                @click="decream(index)"
                v-bind:disabled="item.count === 0"
              >
                -
              </button>
            </td>
            <td class="ted">¥{{ smtotal(index) }}</td>
            <td class="ted">
              <a @click="dele(index)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="lef2">
        <span>
          总价：<font class="foned"><b>{{ "¥" + total.toFixed(2) }}</b></font>
        </span>

        <button class="clored" @click="dan"><b>结算</b></button>
      </div>
    </div>   

       <div class="as" v-bind:class="{'goucar':!this.$store.state.gouwu}">
            <img class="ee" src="../images/gouwu.png" alt="">   购物车空空如也
          <a @click="dd">去购物</a>
       </div>





    <Fot></Fot>
  </div>
</template>

<script>
import Hed from "../components/Hed";
import Sou from "../components/Sou";
import Fot from "../components/Fot";

export default {
  name: "carshop",
  components: {
    Hed,
    Sou,
    Fot,
  },
  data() {
    return {

    };
  },
  methods: {
    dd(){
       this.$router.push({
         path:'/home'
       })
    },
    add(index) {
      this.$store.state.carlist[index].count++;
    },
    decream(index) {
      this.$store.state.carlist[index].count--;
    },
    dele(index) {
      console.log(index);
      this.$store.state.carlist.splice(index, 1);
    },
    dan(){
       this.$router.push({
         path:'/dan'
       })
    },
   smtotal(index){
      let total=0;
       total +=this.$store.state.carlist[index].price *this.$store.state.carlist[index].count;
       return total;
    },
  },
  computed: {
    total() {
      let totaled = 0;
      for (let i = 0; i < this.$store.state.carlist.length; i++) {
        totaled +=this.$store.state.carlist[i].price *this.$store.state.carlist[i].count;
      }
      return totaled;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0 auto;
}
.ee{
  width: 70px;
  height: 70px;
}
.as{
  margin-top: 10%;
  margin-left: 45%;
  font-size: 15px;
}
.goucar{
  display: none;
}
.show{
  display:none;
}
.foned {
  font-size: 18px;
  color: #e64347;
}
.lef2 {
  margin-left: 1010px;
  margin-top: 30px;
}
.clored {
  width: 94px;
  height: 52px;
  background-color: #e64347;
  font-size: 20px;
  color: white;
  border: 0;
  z-index: 10;
  outline: none;
}
.imged img {
  width: 80px;
  height: 80px;
}
.imged {
  margin-left: 100px;
}
.toped {
  margin-top: 30px;
  font-size: 10px;
  width: 200px;
  margin-left: -140px;
}
.flxed {
  display: flex;
  flex-direction: row;
}
.lef {
  margin-top: 80px;
}
a {
  text-decoration: none;
}

table {
  width: 1000px;
}
thead {
  background-color: #f3f3f3;
}
tbody {
  background-color: #fff4e8;
}
.ted {
  text-align: center;
}
th {
  text-align: center;
}
</style>
