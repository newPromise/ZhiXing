<template>
<div class='search-main'>
    <div class='search-head'>
        <router-link v-for='link of links' :to='link.path' :key='link' @click="togContent(index)">
            <i class="iconfont" :class="link.icon"></i>
            {{link.name}}
        </router-link>
    </div>
    <transition name="slide">
      <router-view class='search-view'></router-view>
    </transition>
    <bottom-bar v-if=""></bottom-bar>
</div>
</template>
<script type="text/javascript">
    import bottomBar from '@/components/common/bottomBar';
    import {mapState} from 'vuex';
    export default {
      name: 'searchMain',
      data () {
        return {
          links: [
            {name: '火车票', path: 'train', icon: 'icon-huoche'},
            {name: '飞机票', path: 'plane', icon: 'icon-hangban'},
            {name: '汽车票', path: 'bus', icon: 'icon-lvxingshekechejichanggonggongqicheyiwai'},
            {name: '酒店', path: 'hotel', icon: 'icon-jiudian'}
          ],
          actIndex: '',
          showVisible: true,
          citys: '',
          date: ''
        };
      },
      computed: {
        ...mapState(['city', 'selDate'])
      },
      components: {
        bottomBar
      },
      watch: {
        '$route.path': function (val) {
          this.showVisible = !this.showVisible;
          console.log('val', val);
        }
      },
      methods: {
        togContent (index) {
          alert();
          console.log('是否正确', this.showVisible);
          this.actIndex = index;
        }
      },
      mounted () {
        this.citys = this.city;
        this.date = this.selDate;
      }
    };
</script>
<style  rel='styleSheet' lang='stylus'>
    .search-main
        .search-head
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 6rem;
            padding: 2rem;
            background-color: #1F74DF;
            padding: 0 0.5rem;
            margin-bottom: 4rem;
            a

                color: #FFFFFF;
                text-align: none;
                display: inline-block;
                width: 25%;
                height: 100%;
                line-height: 2rem;
                padding: 1rem 0;
                i
                  display: block;
                  font-size: 2rem;
        .search-view
            margin-top: 8rem;
        .slide-enter
          transform: translateX(100%);
        .slide-enter-active
          transition: all .3s ease;
        .slide-leave-to
          transform: translateX(-100%);
                                   
</style>
