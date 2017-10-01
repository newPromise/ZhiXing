<template>
<div class='bottom-bar'>
    <ul class='bot-nav'>
        <li v-for='route in bars' :key='route'>
            <router-link tag='a' :to='route.path'><i class="iconfont" :class="route.icon"></i><br>{{route.name}}</router-link>
        </li>
    </ul>
</div>
</template>
<script >
    export default {
      name: 'bottomBat',
      data () {
        return {
          bars: [
                {icon: 'icon-home', name: '首页', path: '/searchMain/train'},
                {icon: 'icon-miaobiao', name: '抢票', path: '/grabDet'},
                {icon: 'icon-dingdan', name: '订单', path: '/orderIndex'},
                {icon: 'icon-person', name: '我的', path: '/aboutPerson'}
          ]
        };
      },
      methods: {

      },
      mounted: {
      }
};
</script>
<style   rel='styleSheet' lang='stylus' >
    .bottom-bar
        .bot-nav
          background: white;
          position: fixed;
          bottom: 0;
          width: 100%;
          li
            text-align: center;
            display: inline-block;
            width: 25%;
            height: 4rem;
            .iconfont
              font-size: 1.5rem;
            a
              line-height: 2rem;
            .link-active
              color: blue;  
</style>
