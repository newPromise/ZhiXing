<template>
    <div class="count-manage">
        <header-top  backRoute = '/' baccolor="white" color="black" title="账户设置" ></header-top>
        <p class="tit">我的账号</p>
        <mt-cell title="智行账号" :value="count"  :to="loginRoute"  is-link>
          <i slot= "icon" class=" iconfont icon-huoche"></i>
        </mt-cell>
        <p class="tit">12306账号</p>
        <mt-cell v-for="item of countData" :icon="item.icon" :title="item.title"  :value="item.value" :to="item.to" is-link>
          <i slot="icon" class="iconfont" :class="item.icon"></i>
        </mt-cell>
        <mt-popup
            v-model="popupVisible"
                position="middle">
</mt-popup>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapState} from 'vuex';
    export default {
      name: 'countManage',
      components: {
        headerTop
      },
      computed: {
        ...mapState(['loginMsg'])
      },
      data () {
        return {
          countData: [
            {title: '12306账号', value: '未登录', to: '', icon: 'icon-iconfont12306'},
            {title: '常用购票人', value: '', to: '', icon: 'icon-jiaruwomen'},
            {title: '个人资料', value: '', to: '', icon: 'icon-tubiaozhizuomoban'},
            {title: '注册账号', value: '', to: '', icon: 'icon-bianji'},
            {title: '修改密码', value: '', to: '', icon: 'icon-xiugaimima1'},
            {title: '身份核验须知', value: '', to: '', icon: 'icon-xinyongqia'}
          ],
          msg: '',
          count: '',
          popupVisible: false,
          loginRoute: '/login'
        };
      },
      watch: {
        $route: function (val) {
          console.log('ese ');
          console.log('val', val);
        }
      },
      methods: {
        togLogin () {
          console.log('gooood');
          if (!this.count) {
            this.popupVisible = true;
          } else {
            this.$router.push('/login');
          }
        }
      },
      mounted () {
        console.log(this.loginMsg);
        this.count = this.loginMsg.count;
      }
    };
</script>
<style type="text/css" lang="stylus">
    .count-manage
        .tit
            height: 3rem;
            line-height: 3rem;
            text-align: left;
            padding: 0 1rem;
        .iconfont
          font-size: 1.5rem;    
</style>
