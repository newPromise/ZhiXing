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
                          <div class="main-r"></div>
                      </div>
                      <div class="ensure"></div>
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
          activeIndex: '',
          popupVisible: false,
          activeFilter: '',
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
                            span
                                height: 4rem;
                                text-align: center;
                                line-height: 4rem;
                                width: 100%
                                float: left;
                                overflow: hidden;
                            
                      
            .v-modal
                top: 8rem;    
                              
                    
</style>
