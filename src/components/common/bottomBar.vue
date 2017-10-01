<template>
<div class='bottom-bar'>
    <ul class='bot-nav'>
        <li v-for='route in bars' :key='route'>
            <router-link tag='a' :to='route.path'>{{route.name}}</router-link>
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
                {icon: '', name: '首页', path: '/searchMain/train'},
                {icon: '', name: '抢票', path: '/grabDet'},
                {icon: '', name: '订单', path: '/orderIndex'},
                {icon: '', name: '我的', path: '/aboutPerson'}
          ]
        };
      },
      methods: {

      },
      mounted: {
      }
};
</script>
<style   rel='styleSheet' lang='stylus' scoped>
    .bottom-bar
        .bot-nav
          background: white;
          position: fixed;
          bottom: 0;
          width: 100%;
          li
            text-align: center;
            line-height: 4rem;
            display: inline-block;
            width: 25%;
            height: 4rem;
</style>
