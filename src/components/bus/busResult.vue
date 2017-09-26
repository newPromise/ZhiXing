<template>
    <div class="busRes">
        <div class="bus-header">
            <header-top title="天津-北京" baccolor="white" color="black"></header-top>
            <div class="head-bar">
                <span class="filter">筛选</span>
                <span class="go">下班就走</span>
                <span class="direct">景区直达</span>
            </div>
        </div>
        <div class="bus-content">
            <div class="res-items" v-for="item of result">
                <div class="bus-time">
                    <p>&nbsp</p>
                    <p>{{item.starttime}}</p>
                    <p>&nbsp</p>
                </div>
                <div class="bus-type">
                    <p>出发:{{item.startcity}}</p>
                    <p>到达:{{item.endcity}}</p>
                    <p>{{item.bustype}}</p>
                </div>
                <div class="bus-price">
                    <p>{{item.price}}</p>
                    <p>余票</p>
                    <p>时间</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapActions, mapState} from 'vuex';
    export default {
      name: '',
      components: {
        headerTop
      },
      computed: {
        ...mapState(['busLine'])
      },
      data () {
        return {
          result: ''
        };
      },
      methods: {
        ...mapActions(['getBusLine'])
      },
      mounted () {
        this.result = this.busLine;
        console.log(this.busLine);
      }
    };
</script>
<style type="text/css" lang="stylus">
    .busRes
        .bus-header
            width: 100%;
            background: white;
            position: fixed;
            top: 0;
            .head-bar
                display: flex;
                width: 100%;
                span
                    height: 2rem;
                    line-height: 2rem;
                    flex: 1;
        .bus-content
            margin-top: 8rem;                
        .res-items
            display: flex;
            padding: 1rem;
            margin: 0.5rem;
            background: white;
            >div
                flex: 1;
            .bus-time
                p
                    text-align: center;
            .bus-type
                p
                    text-align: left;
            .bus-price
                p
                    text-align: right;                
                    
                
                    
</style>
