<template>
    <div class="busRes">
        <div class="bus-header">
            <header-top :title="result[0].startcity+'-'+result[0].endcity" baccolor="white" color="black"></header-top>
            <div class="head-bar">
                <span class="filter" @click="showFilter = !showFilter">筛选</span>
                <span  @click="outWork" class="go">下班就走</span>
                <span class="direct">景区直达</span>
            </div>
        </div>
        <div class="filter-content" v-if="showFilter">
            <div class="filter">
                <div class="content">
                    <div class="aside">
                        <p :class="{'active': activeTerm === index}" @click="togFilter(index)" v-for="term, index in terms">{{term}}</p>
                    </div>
                    <div class="main">
                        <div>
                            <mt-checklist :options="filters[activeTerm]" align="right" v-model="filtCondition[activeTerm]">
                            </mt-checklist>
                        </div>
                    </div>
                </div>
                <div class="bottom-wrap">
                    <div class="bottom">
                        <span @click="clearAll" >清空</span>
                        <span @click="toFilter" class='to-filter'>筛选(共{{result.length}}班)</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bus-content">
            <div class="res-items"  @click="lineDetail(item)"  v-for="item,index of result" :key="index">
                <div class="bus-time">
                    <p>&nbsp</p>
                    <p>{{item.starttime}}</p>
                    <p>&nbsp</p>
                </div>
                <div class="bus-type">
                    <p>{{item.startstation}}</p>
                    <p>{{item.endstation}}</p>
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
    import {Toast} from 'mint-ui';
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
          showFilter: false,
          result: {},
          startstations: [],
          activeTerm: 'startSta',
          terms: {
            'startSta': '出发站',
            'endSta': '到达站',
            'startTime': '出发时间',
            'tickFilter': '车次筛选'
          },
          filters: {
            'startSta': ['1'],
            'endSta': ['2'],
            'startTime': ['早上（00:00-06:00）', '上午(06:00 - 12:00)', '下午(12:00-18:00)', '晚上(18:00-24:00)'],
            'tickFilter': ['固定班']
          },
          filtCondition: {
            'startSta': [],
            'endSta': [],
            'startTime': [],
            'tickFilter': []
          },
          isOutWork: false
        };
      },
      watch: {
        busSite: function (val) {
          console.log('chengs', val);
          this.allStartSite(val);
        }
      },
      methods: {
        // 查看车次详细信息
        lineDetail (item) {
          this.setChoiceline(item);
          this.$router.push('/lineDet');
        },
        // 筛选条件清空
        clearAll () {
          for (let key in this.filtCondition) {
            this.filtCondition[key] = [];
          }
        },
        // 进行下班之后时间筛选
        outWork () {
          this.isOutWork = !this.isOutWork;
          if (this.isOutWork) {
            Toast({
              message: '为您筛选16:00之后出发的车次',
              position: 'bottom'
            });
            this.result = this.filterTime('16:00', '24:00');
          } else {
            this.result = this.busLine;
          }
        },
        // 筛选时间，位于 timeS 与 timeE 之间的时间
        filterTime (timeS, timeE) {
          timeS = timeS.split(':')[0];
          timeE = timeE.split(':')[0];
          let newArr = [];
          console.log('timeS', timeS);
          console.log('timeE', timeE);
          this.result.map((item, index) => {
            if (item.starttime.split(':')[0] >= timeS && item.starttime.split(':')[0] < timeE) {
              newArr.push(item);
            }
          });
          return newArr;
        },
        // 进行筛选条件函数
        filterFn (filterArr, condition) {
          let newArr = [];
          this.result.map((item, index) => {
            if (filterArr.indexOf(item['北京市' + condition]) > -1) {
              console.log('item', item);
              newArr.push(item);
            }
          });
          console.log('到达这种地步');
          return newArr;
        },
        // 筛选按钮, 点击进行筛选
        toFilter (startStation, endStation) {
          Toast({
            message: '两个后端端口返回的值不一致, 没有进行筛选',
            position: 'bottom'
          });
          this.showFilter = false;
          console.log(this.filtCondition.startSta);
          console.log('filterTime', this.filterTime('06:00', '18:00'));
          // this.result = this.filterFn(this.filtCondition.startSta, 'startstation');
          console.log('这是最好的解释');
          console.log('追踪到了这里', this.result);
        },
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
        ...mapActions(['getBusLine', 'getBussite', 'setChoiceline'])
      },
      mounted () {
        this.result = this.busLine;
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
                padding: 0.4rem 0;
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
                            margin: 0 !important;
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
