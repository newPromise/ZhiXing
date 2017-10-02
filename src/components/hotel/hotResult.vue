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
                        <span @click="activeIndex = index" :class="{'click': activeIndex === index}" v-for="item, index of hotelTys">{{item.title}}</span>
                    </div>
               </div>
           </div>
           <div class="content"></div>
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
                            <div><span @click="choiceStar(item.v)" v-for="item of starTys[0] ">{{item.t}}</span></div>
                            <div><span @click="choiceStar(item.v)" v-for="item of starTys[1]">{{item.t}}</span></div>
                        </div>
                    </div>
                    <div class="ensure">
                          <button class="ensureBtn">确定</button>
                      </div>
                  </div>
              </div>
            </mt-popup>
       </div>
   </div> 
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
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
            sort: '欢迎度排行',
            others: '筛选'
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
          sortTys: '',
          otherFilters: '',
          starTys: [[{t: '不限', v: ''}, {t: '连锁酒店', v: '连锁酒店'}, {t: '二星记一下', v: '1,2'}], [{t: '三星/舒适', v: '3'}, {t: '四星/高档', v: '4'}, {t: '五星/豪华', v: '5'}]],
          hotelTys: [
            {title: '可订', code: ''},
            {title: '含早', code: ''},
            {title: '免费取消', code: ''},
            {title: '立即确认', code: ''},
            {title: '双床', code: ''}
          ]
        };
      },
      methods: {
        choiceStar (value) {
          if (value !== '') {
            if ( ) {
            }    
          }    
        },
        filterPop (key) {
          this.activeFilter = key;
          this.popupVisible = true;
        }
      },
      mounted () {
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
                    padding: 1rem 0;
                    .selects
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
