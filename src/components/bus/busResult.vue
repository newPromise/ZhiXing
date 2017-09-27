<template>
    <div class="busRes">
        <div class="bus-header">
            <header-top :title="result[0].startcity+'-'+result[0].endcity" baccolor="white" color="black"></header-top>
            <div class="head-bar">
                <span class="filter">筛选</span>
                <span class="go">下班就走</span>
                <span class="direct">景区直达</span>
            </div>
        </div>
        <div class="filter-content">
            <div class="filter">
                <div class="content">
                    <div class="aside">
                        <p :class="{'active': activeTerm === index}" @click="togFilter(index)" v-for="term, index in terms">{{term}}</p>
                    </div>
                    <div class="main">
                        <div>
                            <mt-checklist :options="filters[activeTerm]" align="right" v-model="startstations">
                            </mt-checklist>
                        </div>
                    </div>
                </div>
                <div class="bottom-wrap">
                    <div class="bottom">
                        <span>清空</span>
                        <span class='to-filter'>筛选(共79班)</span>
                    </div>
                </div>
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
                    <p>出发:{{item.startstation}}</p>
                    <p>到达:{{item.endstation}}</p>
                    <p class="type">{{item.bustype}}</p>
                </div>
                <div class="bus-price">
                    <p class="price">￥{{item.price}}</p>
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
        ...mapState(['busLine', 'busSite'])
      },
      data () {
        return {
          result: {},
          startstations: [],
          activeTerm: '',
          terms: {
            'startSta': '出发站',
            'endSta': '到达站',
            'startTime': '出发时间',
            'tickFilter': '车次筛选'
          },
          filters: {
            'startSta': ['1'],
            'endSta': ['2'],
            'startTime': ['3'],
            'tickFilter': ['4']
          }
        };
      },
      watch: {
        busSite: function (val) {
          console.log('chengs', val);
          this.allStartSite(val);
        }
      },
      methods: {
        togFilter (pro) {
          this.activeTerm = pro;
        },
        allStartSite (val) {
          function pushItem (arr) {
            let farr = [];
            console.log('yes', arr);
            arr.map((item, index) => {
              console.log(item.name);
              if (farr.indexOf(item.name) === -1) {
                farr.push(item.name);
              };
            });
            return farr;
          };
          if (pushItem(val)[0].indexOf(this.result[0].startcity) !== -1) {
            this.filters.startSta = pushItem(val);
          } else {
            this.filters.endSta = pushItem(val);
          };
        },
        ...mapActions(['getBusLine', 'getBussite'])
      },
      mounted () {
        this.result = this.busLine;
        console.log(this.busLine);
        this.getBussite({city: this.result[0].startcity});
        this.getBussite({city: this.result[0].endcity});
        this.allStartSite();
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
            p
                height: 2rem;
                line-height: 2rem;    
            .bus-time
                p
                    font-size: 1.5rem;
                    text-align: center;
            .bus-type
                flex: 2;
                p
                    
                    font-size: 1.2rem;
                    text-align: left;
                .type
                    font-size: 1rem;
                    color: #BFBFBF;
            .bus-price
                p
                    text-align: right;
                .price
                    font-size: 1.6rem;
                    color: #5D9BE7;                    
        .filter-content
            position: fixed;
            top: 6rem;
            height: 300px;
            width: 100%;
            border-top: 1px solid lightgray;
            background-color: white;
            .filter
                position: relative;
                height: 100%;
                .content
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    .aside
                        background:lightgray;
                        width: 30%;
                        float: left;
                        height: 100%;
                        p
                            width: 100%;
                            height: 3rem;
                            line-height: 3rem;
                        .active
                            background-color: white;
                            color: red;        
                    .main
                        max-height: 250px;
                        width: 70%;
                        overflow: hidden;
                        overflow-y: scroll;
                        .mint-checklist-title
                            margin: 0;
                        .mint-cell
                            height: 3rem !important;       
                .bottom-wrap
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    z-index: 10;
                    .bottom
                        display: flex;
                        span
                            background-color: white;
                            flex: 1;
                            height: 4rem;
                            line-height: 4rem;
                            text-align: center;
                            display: inline-block;
                        .to-filter
                            background: #FF5858;
                            color: white;
                                
                         
                        
                    
                
                    
</style>
