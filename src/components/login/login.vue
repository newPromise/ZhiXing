<template>
    <div class="login">
      <header-top title="登录智行" baccolor="white" color="black">
      </header-top>
       <div class="login-body">
         <div class="login-input">
           <div class="login-phone">
             <span>手机号码</span>
             <input v-model="count" placeholder="请输入手机号">
           </div>
           <div class="credic-code">
             <input placeholder="请输入手机验证码">
             <span>获取验证码</span>
           </div>
         </div>
         <div class='search'>
        <button class='searchBtn' :class="{'notAgree': !value}"  @click="toLogin">登录</button>
    </div>
       </div>
       <mt-checklist
  v-model="value"
  :options="agreeData">
</mt-checklist>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapActions} from 'vuex';
    import {Indicator} from 'mint-ui';
    export default {
      name: 'login',
      components: {
        headerTop
      },
      data () {
        return {
          agreeData: [{
            label: '同意服务条款',
            value: true
          }],
          value: true,
          count: ''
        };
      },
      methods: {
        toLogin () {
          if (!this.value) return;
          Indicator.open('正在登录,请稍候');
          setTimeout(() => {
            Indicator.close();
            this.setLoginMsg({count: this.count});
            this.$router.go(-1);
          }, 2000);
          console.log('value', this.value);
        },
        ...mapActions(['setLoginMsg'])
      }
    };
</script>
<style type="text/css" lang="stylus" scoped>
  .login
    .login-body
      .notAgree
        background: #CCCCCC;
        color: white;
      padding: 0 1rem;
      .login-input
        margin: 3rem 0;
        background: white;
        border: 1px solid gray;
        .login-phone, .credic-code
          border-bottom: 1px solid lightgray;
          display: flex;
          font-size: 1.3rem;
          span
            padding: 1rem;
            flex: 1;
          input
            padding: 1rem;
            outline: none;
            border: 0;
            flex: 3;
        .credic-code
          span
            color: #5495E6;
            border-left: 1px solid lightgray;        
    .mint-cell
      background: transparent;
      border: 0;
      min-height: 0;
      .mint-checklist-label
        padding: 0;
        .mint-checkbox-core
          border-radius: 0;       
</style>