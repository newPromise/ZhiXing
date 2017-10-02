<template>
    <div class="hotel">
        <div class="search-list">
            <div class="local" @click="$router.push('/hotelCity')">
                <span v-text="location"></span>
                <span></span>
            </div>
            <div class="time">
                <p class="timeLabel">
                    <span>入住</span>
                    <span>离店</span>
                </p>
                <p class="date">
                    <span class="s-d">9月15号</span>
                    <span class="nightNum">1玩</span>
                    <span class="e-d">9月16号</span>
                </p>
            </div>
            <div class="keyWord">
                <span  :class="{'active' : !keyWords }"  v-text="keyWords || '关键字/位置/品牌/酒店名' "></span>
            </div>
            <div class="star">
                <span  @click="showStarty = true" :class="{'active' : !star}" v-text="star || '价格/星级' "></span>
            </div>
            <div class="search">
            <button class="searchBtn" @click="getHotel">查询</button>
        </div>
        </div>
        <mt-popup v-model="showStarty" position="bottom">
            <div class="type-choice">
                <div class="price">
                    <p><span>价格({{lowPrice}} - {{highPrice}})</span></p>
                    <mt-range
                          
                          v-model="lowPrice"
                          >
                    <div slot="start"><span>最低价格</span></div>      
                    </mt-range>
                    <mt-range
                        v-model="highPrice"
                    >
                    <div slot="start"><span>最高价格</span></div>
                </mt-range>
                </div>
                <div class="type">
                    <div><span v-for="item of starLev[0]">{{item}}</span></div>
                    <div><span v-for="item of starLev[1]">{{item}}</span></div>
                </div>
                <div class="search">
                    <button class="searchBtn">确定</button>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
    import {mapActions, mapState} from 'vuex';
    export default {
      data () {
        return {
          keyWords: '',
          star: '',
          location: '张宁宁',
          showCity: false,
          showStarty: false,
          lowPrice: '',
          highPrice: '',
          starLev: [['不限', '连锁酒店', '二星及以下'], ['三星/舒适', '四星/高档', '五星/豪华']]
        };
      },
      components: {
      },
      computed: {
        getAllCitys () {
          return this.setIndexcity(this.hotelCity);
        },
        ...mapState(['hotelPro', 'hotelCity', 'indexCity'])
      },
      methods: {
        getHotel () {
          let obj = {
            cityId: '45',
            comeDate: '20171005',
            leaveDate: '20171006'
          };
          this.getHoteldet(obj);
          this.$router.push('/hotRes');
          console.log('我是一个好好的人啊');
          console.log(this.hotelCity);
        },
        ...mapActions(['getHotelpro', 'getHotelcity', 'setIndexcity', 'getHoteldet'])
      },
      mounted () {
        // this.getHotelpro();
        // this.getAllCitys();
      }
    };
</script>
<style type="text/css" lang="stylus" scoped>
    .hotel
        .search-list
            background: white;
            padding: 0 1rem;
            >div
                border-bottom: 1px solid #F2F2F2;
            .local,.keyWord,.star
                width: 100%;
                height: 4rem;
                display: flex;
                line-height: 4rem;
            .keyWord,.star
                text-align: left;
            .time
                >p
                    height: 2rem;
                .timeLabel
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    span
                        color: darkgray;
                        line-height: 2rem;
                        flex: 1;
                        text-align: left;
                    span:last-child
                         text-align: right;            
                .date
                    width: 100%;
                    display: flex;
                    span
                        font-size: 1.4rem;
                        flex: 2;
                    .s-d
                        text-align: left;
                    .e-d
                        text-align: right;
            .active
                font-size: 1.3rem;
                color: darkgray;              
        .mint-popup-bottom
            width: 100%;
            .type-choice
                width: 100%;
                padding: 1rem;
                background-color: white;
                .price
                    .mint-range
                        margin: 0 1rem;
                .type
                    >div
                        display: flex;
                        span
                            flex:1;
                            height: 3rem;
                            line-height: 3rem;
                            text-align:center;
                            border: 1px solid lightgray;
                            margin: 1rem;                
                                                   
</style>