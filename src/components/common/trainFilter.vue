<template>
    <div class="trainFilter">
        <div class="filter-bar">
            <div @click="toFilter(index)" v-for="la, index of label">{{la}}</div>
        </div>
        <mt-popup v-model="popTrainFilter" position="bottom">
            <div class="pop-content">
                <header-top title="筛选">
                    <div slot="left"><span>取消</span></div>
                    <div slot="right"><span>确定</span></div>
                </header-top>
                <div class="content">
                    <div class="terms">
                        <div class="label">车次类型</div>
                        <div class="opts">
                            <mt-checklist  v-model="types" :options="typeOpt">
                            </mt-checklist>
                        </div>
                    </div>
                     <div class="terms">
                        <div class="label">出发站</div>
                        <div class="opts">
                            <mt-checklist  v-model="startStations" :options="startSta">
                            </mt-checklist>
                        </div>
                    </div>
                    <div class="terms">
                        <div class="label">到达站</div>
                        <div class="opts">
                            <mt-checklist  v-model="endStations" :options="endSta">
                            </mt-checklist>
                        </div>
                    </div>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
    import headerTop from './header';
    export default {
      name: 'trainFilter',
      components: {
        headerTop
      },
      props: ['allTrains'],
      watch: {
        allTrains: function (val) {
          console.log('得到的alTrains', val);
        }
      },
      data () {
        return {
          label: ['筛选', '出发时间', '旅行耗时'],
          popTrainFilter: false,
          allOpts: {
            types: [
              {label: '高铁', value: '高铁'},
              {label: '动车', value: '动车'},
              {label: '普通', value: ''},
              {label: '其他', value: '其他'}
            ]
          },
          typeOpt: [
            {label: '高铁', value: '高铁'},
            {label: '动车', value: '动车'},
            {label: '普通', value: ''},
            {label: '其他', value: '其他'}
          ],
          startSta: [],
          endSta: [],
          types: [],
          allStartarr: [],
          allEndarr: [],
          startStations: [],
          endStations: [],
          filterResult: [],
          rawResult: ''
        };
      },
      computed: {
      },
      methods: {
        allStartstation () {
          this.allTrains.map((item, index) => {
            if (this.allStartarr.indexOf(item.station) === -1) {
              this.allStartarr.push(item.endstation);
              this.startSta.push({label: item.station, value: item.station});
            }
          });
          console.log('所有开始的车站', this.startSta);
        },
        allEndstation () {
          this.allTrains.map((item, index) => {
            if (this.allEndarr.indexOf(item.endstation) === -1) {
              this.allEndarr.push(item.endstation);
              this.endSta.push({label: item.endstation, value: item.endstation});
            }
          });
        },
        filterType () {
          let typeObj = [];
          this.filterResult.map((item, index) => {
            if (this.types.indexOf(item.type) === -1) {
              typeObj.push(item);
            }
          });
          this.filterResult = typeObj;
          return typeObj;
        },
        /**
         * [filterStartstation 用于筛选符合开始车站的列车车次信息]
         * @return {[Array]} [筛选之后的数组对象]
         */
        filterStartstation () {
          let startObj = [];
          this.filterResult.map((item, index) => {
            if (this.startStations.indexOf(item.stations) !== -1) {
              startObj.push(item);
            }
          });
          this.filterResult = startObj;
          return startObj;
        },
        filterEndstation () {
          let endObj = [];
          this.filterResult.map((item, index) => {
            if (this.endStations.indexOf(item.endstation) !== -1) {
              endObj.push(item);
            }
          });
          this.filterResult = endObj;
          return endObj;
        },
        filterStarttime () {
        },
        filteCostime () {
        },
        toFilter (index) {
          if (index === 0) {
            this.popTrainFilter = true;
          };
          if (index === 1) {
            this.filterTime();
          };
          if (index === 2) {
            this.filteCostime();
          }
        }
      },
      mounted () {
        this.allEndstation();
        this.allStartstation();
        this.rawResult = this.allTrains;
      }
    };
</script>
<style type="text/css"  lang="stylus" >
    .trainFilter
        width: 100%;
        position:fixed;
        bottom: 0;
        z-index: 2000;
        .mint-popup-bottom
            width: 100%;
            background: white;
        .filter-bar
            color: white;
            background: #444854;
            padding: 1rem;
            display: flex;
            >div
                border-right: 1px solid white;
                flex: 1;
            div:last-child
                border: none;   
        .pop-content
            .content
                .terms
                    .opts
                        width: 100%;
                        .mint-checklist 
                            .mint-cell
                                width: 40%;
                                display: inline-block;
                                .mint-cell-title
                                    text-align: center;        
</style>
