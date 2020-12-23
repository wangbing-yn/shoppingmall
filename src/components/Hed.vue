<template>
  <div class="bgc">
    <div class="dis lef1"><a @click="back">拍拍首页</a></div>
    <div class="dis lef2">
      <a href="#">你好,admire</a> |
      <a href="#">我的订单</a> |
      <a href="#" @mouseover="person_info()" @mouseout="cl_person_info()"
        >我的京东 v</a
      >
      |
      <div
        class="hoverShow1"
        v-show="person_con"
        @mouseover="person_infoContinue()"
        @mouseout="cl_person_infoContinue()"
      >
        <table>
          <tr>
            <td>待处理订单</td>
            <td>消息</td>
          </tr>
          <tr>
            <td>返修退换货</td>
            <td>我的回答</td>
          </tr>
          <tr>
            <td>降价商品</td>
            <td>我的关注</td>
          </tr>
        </table>
      </div>
      <a href="#">京东会员</a> | <a href="#">企业采购</a> |
      <a href="#" @mouseover="person_info2()" @mouseout="cl_person_info2()"
        >客户服务 v</a
      >
      |
      <div
        class="hoverShow2"
        v-show="person_con2"
        @mouseover="person_infoContinue2()"
        @mouseout="cl_person_infoContinue2()"
      >
        <table class="tab2">
          <tr>
            <td>帮助中心</td>
            <td>售后服务</td>
          </tr>
          <tr>
            <td>在线客服</td>
            <td>意见建议</td>
          </tr>
          <tr>
            <td>经融资讯</td>
            <td>全球客服</td>
          </tr>
        </table>
      </div>
      <a href="#" @mouseover="person_info3()" @mouseout="cl_person_info3()"
        >网站导航 v</a
      >
      |
      <div
        class="hoverShow3"
        v-show="person_con3"
        @mouseover="person_infoContinue3()"
        @mouseout="cl_person_infoContinue3()"
      >
        <table>
          <tr>
            <td>招商合作</td>
            <td>京东通信</td>
          </tr>
          <tr>
            <td>企业采购</td>
            <td>服务市场</td>
          </tr>
          <tr>
            <td>校园加盟</td>
            <td>京东社区</td>
          </tr>
          <tr>
            <td>游戏社区</td>
            <td>办公生活</td>
          </tr>
        </table>
      </div>
      <a href="#">手机京东</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hed",

  data() {
    return {
      person_con: false,
      person_con2: false,
      person_con3: false,
      isperson_infoContinue: false,
      isperson_infoContinue2: false,
      isperson_infoContinue3: false,
    };
  },
  methods: {
    back(){
      this.$router.push({
         path:'/home'
       })
    },
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
    person_info2() {
      this.person_con2 = true;
    },

    cl_person_info2() {
      if ((this.isperson_infoContinue2 === true)) {
        this.person_con2 = true;
      } else {
        this.person_con2 = false;
      }
    },
    //鼠标进入到新的div时让中间变量为true
    person_infoContinue2() {
      this.person_con2 = true;
      this.isperson_infoContinue2 = true;
    },

    cl_person_infoContinue2() {
      this.isperson_infoContinue2 === false;
      this.person_con2 = false;
    },
    person_info3() {
      this.person_con3 = true;
    },

    cl_person_info3() {
      if ((this.isperson_infoContinue3 === true)) {
        this.person_con3 = true;
      } else {
        this.person_con3 = false;
      }
    },
    //鼠标进入到新的div时让中间变量为true
    person_infoContinue3() {
      this.person_con3 = true;
      this.isperson_infoContinue3 = true;
    },

    cl_person_infoContinue3() {
      this.isperson_infoContinue3 = false;
      this.person_con3 = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgc {
  background-color: #e3e4e5;
  height: 30px;
  padding-top: 8px;
  color: #999999;
}
.dis {
  display: inline-block;
}
.lef1 {
  margin-left: 240px;
}
.lef2 {
  margin-left: 450px;
}
.red {
  color: red;
}
a {
  text-decoration: none;
  color: #999999;
  font-size: 12px;
}
a:hover {
  color: #ff0000;
}
.hoverShow1 {
  position: fixed;
  left: 930px;
  z-index: 3;
  background-color: #fff;
}

.hoverShow2 {
  position: absolute;
  left: 1117px;
  z-index: 3;
  background-color: #fff;
}

.hoverShow3 {
  position: absolute;
  left: 1185px;
  z-index: 3;
  background-color: #fff;
}
td {
  margin-left: 10px;
  padding-left: 12px;
  padding-top: 5px;
  padding-right: 12px;
}

table {
  border-bottom: 1px solid#CCCCCC;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
}
</style>
