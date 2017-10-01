<template>
    <div class="bus">
        <div class="search-list">
            <div class="city">
                <div class="c-l">
                    <div class="s-c">
                        <span class="cLabel">出发城市</span>
                        <span class="cVal" @click="$router.push('/allCitys')">{{$parent.$data.citys.startCity}}</span>
                    </div>
                    <div class="e-c">
                        <span class="cLabel">到达城市</span>
                        <span class="cVal" @click="$router.push('/allCitys')">{{$parent.$data.citys.endCity}}</span>
                    </div>
                </div>
                <div @click="toTogCity()" class="togC c-r"><i class="iconfont icon-zhuanhuan1"></i></div>
            </div>
            <div class="date-s">
                <div class='s-d'>
                    <span class="cLabel">出发日期</span>
                    <span class="cVal" @click="$router.push('/Calender')">{{$parent.$data.date.month}}月{{$parent.$data.date.day}}日</span>
                </div>
            </div>
            <div class="search">
                <button class="searchBtn" @click="searchBus">查询</button>
            </div>
        </div>
        <div class="some-tips">
            <div class="tip" v-for="item of tips">
                <i class="iconfont" :class="item.icon"></i><br>
                <span>{{item.title}}</span>
            </div>
        </div>
        
    </div>
</template>
<script type="text/javascript">
    import {mapActions, mapState} from 'vuex';
    export default {
      name: 'bus',
      data () {
        return {
          startCity: '北京',
          endCity: '天津',
          tips: [
            {icon: 'icon-huoche', title: '火车票'},
            {icon: 'icon-jichangbashimianfei', title: '机场巴士'},
            {icon: 'icon-jingqu', title: '景区直达'},
            {icon: 'icon-chuanbo', title: '船票'}
          ]
        };
      },
      computed: {
        getCity () {
          this.startCity = this.$parent.$data.citys.startCity;
          this.endCity = this.$parent.$data.citys.endCity;
          return this.startCity;
        },
        ...mapState(['busLine'])
      },
      watch: {
        'busLine': function (val) {
          if (val) {
            this.$router.push('/busRes');
          }
        }
      },
      methods: {
        toTogCity () {
          [this.$parent.$data.citys.startCity, this.$parent.$data.citys.endCity] = [ this.$parent.$data.citys.endCity, this.$parent.$data.citys.startCity ];
        },
        searchBus () {
          console.log('us', this.busLine);
          this.getBusline({start: this.start, end: this.end});
        },
        ...mapActions(['getBusline'])
      },
      mounted () {
      }
    };
</script>
<style type="text/css" lang="stylus" scoped>
    .bus
        padding: 0；
        .search-list, .some-tips
            margin: 1rem 0;
            padding: 0 1rem;
            background-color: white;
            .city
                display: flex;
                width: 100%;
                .iconfont
                    transform: rotate(90deg);
                .c-l,.c-r
                    flex: 1;
                    width: 20%;
                .c-r
                    line-height: 8rem;    
                .c-l
                    flex: 5;
                    width: 80%;
                    .s-c, .e-c
                        display: flex;
                    span
                        display: inline-block;
                        height: 4rem;
                        line-height: 4rem;
                    .cLabel
                        text-align: left;
                        width: 20%;   
                    .cVal
                        padding: 0 0.5rem;
                        text-align: left;
                        font-size: 1.5rem;
                        width: 80%;
                        border-bottom: 1px solid #E8E8E8;
            .s-d
                display: flex;
                span
                    height: 4rem;
                    line-height: 4rem;
                    width: 20%;
                    text-align: left;
                .cVal
                    width: 80%;
                    text-align: left;                  
                           
        .some-tips
            display: flex;
            .tip
                flex: 1;
                height: 4rem;
</style>