<template>
   <div class="hotel-res">
       <header-top title="酒店详情" hasRight>
           <div slot="right"><span>地图</span></div>
       </header-top>
       <div class="main">
           <div class="choice-types">
               <div class="main-select">
                   <span @click="filterPop(key)" v-for="item,key in filters">{{item}}</span>
               </div>
               <div class="tip-select">
                    <div class="selects">
                        <span @click="tipSlec(index)" :class="{'click': activeIndex === index}" v-for="item, index of hotelTys">{{item.title}}</span>
                    </div>
               </div>
           </div>
           <div class="content">
            
             <div class="hotel-lists" v-for="item of hotelDet"  @click="viewDetail(item)">
               <div class="hotel-img">
                 <img :src="item.img">
               </div>
               <div class="hotel-desc">
                 <p class="hotel-name">{{item.hotelName}}</p>
                 <p class="hotel-score">{{hotelDetScore[item.starRatedId]}}   {{item.commentTotal}}人评价 </p>
                 <p class="hotel-distance">{{item.nearBy}}</p>
                 <p class="hotel-price">234</p>
               </div>
             </div>
           </div>
       </div>
       <div class="filter-content">
           <mt-popup
              v-model="popupVisible"
              position="top">
              <div class="pop-content">
                  <div v-if="activeFilter === 'distance'">
                      <div class="distance-main">
                          <div class="main-l">
                              <span>距离</span>
                          </div>
                          <div class="main-r">
                              <mt-radio 
                                  align="right"
                                  
                                  v-model="filters.distance"
                                  :options="distanceChoices">
                            </mt-radio>
                          </div>
                      </div>
                      <div class="ensure">
                          <button class="ensureBtn">确定</button>
                      </div>
                  </div>
                  <div v-if="activeFilter === 'price' ">
                    <div class="hotel-starLev">
                        <div class="star-choice">
                            <div><span @click="choiceStar(item.v)" :class="{'active': stars.indexOf(item.v) !== -1}" v-for="item of starTys[0] ">{{item.t}}</span></div>
                            <div><span @click="choiceStar(item.v)" :class="{'active': stars.indexOf(item.v) !== -1}" v-for="item of starTys[1]">{{item.t}}</span></div>
                        </div>
                    </div>
                    
                  </div>
                  <div v-if="activeFilter === 'sort'">
                    <div class="some-sort">
                      <mt-radio
                        align="right"
                        v-model="sortTypes"
                        :options = "sortOptions"
                      ></mt-radio>
                    </div>
                  </div>
                  <div v-if="activeFilter === 'others'">
                    <div class="others-main">
                      <div class="others-l">
                        <span class="special" @click="otherTitindex = index" :class="{'active': otherTitindex === index }" v-for="item,index in otherTit">{{item}}</span>
                      </div>
                      <div class="others-r">
                        <div v-if="otherTitindex !== 'break'">
                          <mt-checklist
                          align="right"
                          v-model="othersValue"
                          :options="otherOPts[otherTitindex]"
                          >
                          </mt-checklist>
                        </div>
                        <div  class="break-first" v-else>
                          <div class="break-l">
                            <span @click="breakAbout = index" :class="{'active': breakAbout === index}" v-for="item, index of otherOPts[otherTitindex]">{{item}}</span>
                          </div>
                          <div class="break-r">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="others-ensure"></div>
                  </div>
              </div>
            </mt-popup>
       </div>
   </div> 
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapActions, mapState} from 'vuex';
    export default {
      name: 'hotelRes',
      components: {
        headerTop
      },
      data () {
        return {
          filters: {
            distance: '距离不限',
            price: '0-100',
            sort: '低价优先',
            others: '筛选'
          },
          sortOpts: {
            '1': '低价优先',
            '2': '高价优先',
            '3': '入住量',
            '4': '推荐度',
            '5': '距离优先'
          },
          distanceChoices: [
            {label: '不限', value: '不限'},
            {label: '500米以内', value: '500米以内'},
            {label: '1公里以内', value: '1公里以内'},
            {label: '2公里以内', value: '2公里以内'},
            {label: '3公里以内', value: '3公里以内'}
          ],
          activeIndex: '',
          popupVisible: false,
          activeFilter: '',
          distance: '',
          stars: [],
          sortTypes: '1',
          sortOptions: [
           {label: '低价优先', value: '1'},
           {label: '高价优先', value: '2'},
           {label: '入住量', value: '3'},
           {label: '推荐度', value: '4'},
           {label: '距离优先', value: '5'}
          ],
          otherFilters: '',
          otherOPts: {
            'spec': ['不限', '钟点房'],
            'instruc': ['不限', '免费wi-fi上网', '免费有线宽带', '停车场', '游泳池'],
            'break': ['床型', '早餐'],
            'score': ['不限', '4.5分及以上', '3.5分及以上', '4.0分及以上']
          },
          othersValue: '',
          otherTit: {
            'spec': '特色',
            'instruc': '设施',
            'break': '床型早餐',
            'score': '评分'
          },
          otherTitindex: '',
          breakAbout: '',
          starTys: [[{t: '不限', v: ''}, {t: '一星酒店', v: '1'}, {t: '二星酒店', v: '2'}], [{t: '三星/舒适', v: '3'}, {t: '四星/高档', v: '4'}, {t: '五星/豪华', v: '5'}]],
          hotelTys: [
            {title: '可订', code: ''},
            {title: '含早', code: ''},
            {title: '免费取消', code: ''},
            {title: '立即确认', code: ''},
            {title: '双床', code: ''}
          ],
          hotelDetScore: {
            1: '5星级',
            2: '4星级',
            3: '3星级',
            152: '2星级',
            63: '经济型',
            76: '豪华型',
            77: '高档型',
            78: '舒适型',
            1535: '其他'
          }
        };
      },
      watch: {
        'sortTypes': function (val) {
          this.filters.sort = this.sortOpts[this.sortTypes];
        }
      },
      computed: {
        ...mapState(['hotelDet'])
      },
      methods: {
        /**
         * [tipSlec 表示选择动作]
         * @params {['string']} [被选中的项]
         * @return {[type]} [description]
         */
        tipSlec  (index) {
          this.activeIndex = index;
          this.popupVisible = false;
        },
        /**
         * [choiceStar 用于选择酒店星级]
         * @param  {[type]} value [选中的值]
         * @return {[type]}       [description]
         */
        choiceStar (value) {
          if (value !== '') {
            if (this.stars.indexOf(value) === -1) {
              this.stars.push(value);
            } else {
              this.stars.splice(this.stars.indexOf(value), 1);
            };
            if (this.stars.indexOf('') !== -1) {
              this.stars.splice(this.stars.indexOf(''), 1);
            }
            this.filters.price = this.stars.reduce((pev, next) => {
              return pev + '星, ' + next;
            });
          } else {
            if (this.stars.indexOf('') !== -1) {
              this.stars = [];
            } else {
              this.stars = [];
              this.stars.push('');
              this.filters.price = '不限';
            }
          }
        },
        filterPop (key) {
          this.activeFilter = key;
          this.popupVisible = true;
        },
        /**
         * [viewDetail  '查看酒店详情']
         * @param  {[obj]} item [被点击到的酒店]
         * @return {[type]}      [description]
         */
        viewDetail (item) {
          // this.getHotelPriceSearch(item.hotelId);
          this.setHotelitem(item);
          this.$router.push('/hotelDetail');
        },
        ...mapActions(['setHotelitem', 'getHotelPriceSearch'])
      },
      mounted () {
        console.log('旅店详情梵蒂冈', this.hotelDet);
        this.hotelDet.map((item, index) => {
          console.log('lvdian', item);
        });
      }
    };
</script>
<style type="text/css" lang="stylus" >
    .hotel-res
        .main
            .choice-types
                z-index: 100000;
                width: 100%;
                .main-select
                    background: white;
                    width: 100%;
                    display: flex;
                    span
                        overflow: hidden;
                        text-align: center;
                        flex: 1;
                        height: 2rem;
                        line-height: 2rem;
                        margin: 1rem 0;
                        border-right: 1px solid lightgray;                    
                .tip-select
                    position: relative;
                    height: 4rem;
                    padding: 1rem 0;
                    overflow: hidden;
                    white-space: nowrap;
                    .selects
                        position: absolute;
                        text-align: left;
                        span
                            display: inline-block;
                            margin-left: 1rem;
                            border-radius: 5px;
                            background: white;
                            line-height: 2rem;
                            padding: 0.2rem 1rem;
                        .click
                            background: #E8F5FD;
                            color: #6EA6EA;
                            border: 1px solid #6EA6EA;    
            .content
              .hotel-lists
                margin: 1rem 0;
                padding: 1rem;
                background: white;
                text-align: left;
                >div
                  display: inline-block;
                .hotel-img
                  width: 30%;
                  img
                    width: 7rem;
                    height: 7rem;
                .hotel-desc
                  width: 60%;
                  >p
                    width: 100%;
                    height: 2rem;
                    line-height: 2rem;
                    text-align: left;
                  .hotel-name
                    font-size: 1.3rem;
                  .hotel-price
                    text-align: right;
                                             
        .filter-content
            .mint-popup-top
                margin-top: 8rem;
                width: 100%;
                .pop-content
                    .distance-main
                        width: 100%;
                        .main-l
                            width: 30%;
                            background: gray;
                            span
                                color: black;
                                height: 4rem;
                                text-align: center;
                                line-height: 4rem;
                                width: 100%
                                float: left;
                                overflow: hidden;
                        .main-r
                            overflow: hidden;    
                    .hotel-starLev
                      padding: 2rem;
                      .star-choice
                          >div
                              display: flex;
                              width: 100%;
                              span
                                  flex: 1;
                                  height: 3rem;
                                  text-align: center;
                                  line-height:3rem;
                                  border: 1px solid gray;
                                  margin: 1rem;
                              .active
                                border: 1px solid blue;
                                color: white;
                                background: #5495E6;      
                    .others-main
                      width: 100%;
                      height: 15rem;
                      overflow: hidden;
                      .others-l
                        height: 100%;
                        width: 30%;
                        background: lightgray;
                        float: left;
                        overflow-y: scroll;
                      
                        span
                          
                          height: 3rem;
                          line-height: 3rem;
                          text-align: center;
                          display: block;
                        .active
                          background: white;
                      .others-r
                        max-height: 15rem;
                        overflow: hidden;
                        overflow-y: scroll;
                        width: 70%;
                        .mint-checklist
                          width: 100%;
                        .break-first
                          .break-l
                            width: 50%;
                            span
                              display: block;
                              height: 4rem;
                              line-height: 4rem;
                            .active
                              color: blue;  
                          .break-r    
                            width: 50%;
            .v-modal
                top: 8rem;
            .ensure
                padding: 1rem;
                .ensureBtn
                    width: 100%;
                    height: 3rem;
                    line-height: 3rem;
                    background: #FC6E51;
                    color: white;
                    border: none;
                      
                              
                    
</style>
