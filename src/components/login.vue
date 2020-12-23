<template>
  <div class="login">
      <div class="moved"><img src="../images/1.png" alt="" /></div>
      <div class="section">
        <input
          class="section-input"
          v-model="form.account"
          placeholder-class="input-holder"
          placeholder="请输入您的账号"
        />
      </div>
      <div class="section">
        <input
          class="section-input"
          type="password"
          v-model="form.password"
          placeholder-class="input-holder"
          placeholder="请输入您的密码"
        />
      </div>
      <button class="btn" @click="login">登录</button>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      isHidden: false,
      isPassword: true,
      logs: [],
      form: {
        account: "",
        password: "",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    onGotUserInfo() {},
    goRegister() {},
    ckeckLogin() {},
    login() {
      if (!this.form.account && !this.form.password) {
        alert("请填写账号密码");
        return false;
      }
      const that = this;
      setTimeout(() => {
        store.commit("login", {
          account: that.form.account,
          password: that.form.password,
        });
        that.$router.push("./");
      }, 500);
    },
  },
};
</script>

<style lang="less">
.login {
  text-align: center;
  background-image: url(../images/login.png);
  background-position: 0px 0px;
  background-size: 106% 232%;
  height: 576px;
  margin-top: 0px;
  padding-top: 100px;
  .moved{
      margin-bottom: 20px;
  }
  p {
    text-align: center;
  }
  .section {
    margin-top: 0px;
    input {
      width: 40%;
      height: auto;
      border: none;
      margin-bottom: 30px;
      outline: none;
      font-size: 16px;
      line-height: 1.6;
      border-bottom: 1px solid #666;
    }
    .input-holder {
      color: #777777;
      font-size: 16px;
    }
  }
  .btn {
    width: 10%;
    height: auto;
    color: #fff;
    background: #373737;
    margin: 10px 0 20px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }
  .btn-primary {
    color: #373737;
    background: #fff;
  }
  .login-text {
    position: fixed;
    left: 0;
    bottom: 60px;
    width: 100%;
    height: auto;
    font-size: 12px;
    color: #777777;
    text-align: center;
  }

}

</style>