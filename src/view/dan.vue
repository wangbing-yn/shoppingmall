<template>
  <div class="heid">
    <Hed></Hed>
    <!-- <Sou></Sou> -->
    <div class="lef4">
      <div><font class="sized1">填写并核对订单信息</font></div>
      <div class="lef7">
        <span
          ><b><font class="sized2">收货人信息 :</font></b></span
        >
        <div>
          <span class="lef5 lef6" v-for="item in address" :key="item.id">
            <!-- dsadasd 江苏 苏州市 常熟市 碧溪街道 江苏省苏州市常熟市湖山路99 -->
            {{ item.ren }}&nbsp;&nbsp;{{ item.shen }}&nbsp;&nbsp;{{
              item.shi
            }}&nbsp;&nbsp;{{ item.qu }}&nbsp;&nbsp;{{ item.zhi }}&nbsp;&nbsp;{{
              item.dian
            }}
          </span>
          <a @click="bianji">编辑</a>
        </div>
      </div>

      <div class="mm" v-bind:class="{ showed: kk }">
        <table class="ff">
          <tr>
            <td class="lef8"><font class="ree">*</font>所在省</td>
            <td>
              <select name="江苏省" v-model="addressed.shen">
                　　　　　　　　　　　　　　　　
                <option value="江苏省" selected>江苏省</option>
                　　　　　　　　　　　　　　　　
                <option value="福建省">福建省</option>
                　　　　　　　　　　　　　　　　
                <option value="浙江省">浙江省</option>
                　　　　　　　　　　　　　　
              </select>
            </td>
          </tr>
          <tr>
            <td><font class="ree">*</font>所在市</td>
            <td><input type="text" v-model="addressed.shi" /></td>
          </tr>
          <tr>
            <td><font class="ree">*</font>所在区</td>
            <td><input type="text" v-model="addressed.qu" /></td>
          </tr>
          <tr>
            <td>收货人</td>
            <td><input type="text" v-model="addressed.ren" /></td>
          </tr>
          <tr>
            <td>详细地址</td>
            <td><input type="text" v-model="addressed.zhi" /></td>
          </tr>
          <tr>
            <td>手机号</td>
            <td><input type="text" v-model="addressed.dian" /></td>
          </tr>
        </table>
        <div class="tt">
          <button @click="cun">保存收货人</button>
        </div>
      </div>

      <div>
        <span
          ><b><font class="sized2">支付方式 :</font></b></span
        >
        <div>
          <span class="lef6">在线支付</span>
        </div>
      </div>
    </div>

    <div class="lef3">
      <table class="lef">
        <thead>
          <tr>
            <th>商品</th>
            <th>单价</th>
            <th>数量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.$store.state.carlist" :key="item.id">
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
              <span>{{ item.count }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="lef2">
        <span>
          总价：
          <font class="foned">
            <b>{{ "¥" + total.toFixed(2) }}</b>
          </font>
        </span>
      </div>
      <div class="rr" v-for="item in address" :key="item.id">
        <span class="rr1">收货人：{{ item.ren }}</span>
        <span class="rr1">寄送至：{{ item.zhi }}</span>
      </div>

      <button class="zhifu" @click="zhifu">支付订单</button>
    </div>

    <!-- <Fot></Fot> -->
  </div>
</template>

<script>
import Fot from "../components/Fot";
import Hed from "../components/Hed";
// import Sou from "../components/Sou";

export default {
  name: "Good",
  components: {
    Hed,
    // Sou,
    Fot,
  },
  data() {
    return {
      kk: true,
      address: [
        {
          id: 1,
          shen: "江苏省",
          shi: "常熟市",
          qu: "高新区",
          ren: "张三",
          zhi: "江苏省常熟市高新区湖山路99号",
          dian: "12345678",
        },
      ],
      addressed: {
        id: 1,
        shen: "",
        shi: "",
        qu: "",
        ren: "",
        zhi: "",
        dian: "",
      },
    };
  },
  methods: {
    bianji() {
      this.kk = !this.kk;
    },
    cun() {
      this.address.splice(0, 1);
      this.address.push(this.addressed);
      this.kk = !this.kk;
    },
    zhifu() {
      if (this.$store.state.carlist.length === 0) {
        swal("请添加商品");
      } 
      else {
        swal("成功", "支付成功", "success");
        this.$router.push({
          path: "/home",
        });
      }
    },
  },
  computed: {
    total() {
      let totaled = 0;
      for (let i = 0; i < this.$store.state.carlist.length; i++) {
        totaled +=
          this.$store.state.carlist[i].price *
          this.$store.state.carlist[i].count;
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

.rr {
  display: flex;
  flex-direction: column;
  margin-left: 290px;
  margin-top: 10px;
}
.rr1 {
  margin-left: 715px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.zhifu {
  margin-left: 1005px;
  color: white;
  background-color: #e64347;
  line-height: 30px;
  width: 100px;
}
.showed {
  display: none;
}
.tt {
  margin-left: 150px;
  margin-top: 20px;
}
.tt button {
  background-color: #e64347;
  color: white;
  font-size: 10px;
  line-height: 25px;
  width: 80px;
}
button {
  border: 0;
  outline: none;
}
.ree {
  color: #e64347;
}
.ff {
  margin-left: 30px;
  margin-top: 10px;
}
.mm {
  background-color: #f3f3f3;
  width: 400px;
  height: 280px;
  position: absolute;
  z-index: 10;
  margin-left: 200px;
}
.mm td {
  width: 15px;
  padding-left: 5px;
  padding-top: 10px;
}
.sized2 {
  font-size: 15px;
}
.sized1 {
  font-size: 18px;
  color: #666666;
}
.lef8 {
  padding-left: 10px;
}
.lef7 {
  margin-top: 10px;
}
.lef6 {
  margin-left: 80px;
}
.lef5 {
  margin-right: 100px;
}

.lef4 {
  margin-top: 60px;
  margin-left: 300px;
  width: 1000px;
}
a {
  text-decoration: none;
}
.lef3 {
  margin-top: -60px;
  margin-left: 60px;
}
.show {
  display: none;
}
.foned {
  font-size: 18px;
  color: #e64347;
}
.lef2 {
  margin-left: 1005px;
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
