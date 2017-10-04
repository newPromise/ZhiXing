<template>
    <div class="hotelDetail">
        <div class="header">
            <i @click="$router.back(-1)" class="iconfont icon-jiantou-copy-copy1"></i>
        </div>
        <div class="main">
            <div class="top-img">
                <img :src="hotelItem.img">
                <div class="img-desc">
                    <p class="hotel-name">{{hotelItem.hotelName}}</p>
                    <p class="hotel-star">{{hotelItem.starRatedName}}</p>
                </div>
                <div class="img-bottom">
                    <mt-cell  is-link>
                        <div slot="title" class="blue">
                            <span class="comment-good" >{{hotelItem.commentGood}}</span>
                            <span >好评</span>
                        </div>
                        <div class="blue all-comment">
                            <span>{{hotelItem.commentTotal}}</span>
                            <span class="comment">评论</span>
                        </div>
                    </mt-cell>
                    <mt-cell  is-link>
                        <div slot="title">
                            <p class="left-title">{{hotelItem.address}}</p>
                            <p class="left-label">{{hotelItem.nearBy}}</p>
                        </div>
                        <div class="right-labels blue">
                            <span class="label">地图</span>
                        </div>
                    </mt-cell>
                    <mt-cell  is-link>
                       <div slot="title">
                           <p class="left-title">2017年开业</p>
                           <p class="left-label">有热水</p>
                       </div>
                       <div class="right-labels blue">
                           <span class="label">详情</span>
                       </div>
                    </mt-cell>
                </div>
            </div>
            <div class="content">
                <div class="choice-house">
                    <div class="choice-date">
                        <div class="cometime">
                            <p class="label">{{hotelPrice}}</p>
                            <p><span class="time">{{comeMon}}月{{comeDay}}号</span></p>
                        </div>
                        <div class="alltime">
                            <span class="timenum">{{leaveDay - comeDay}}晚</span>
                        </div>
                        <div class="leavetime">
                            <p class="label">离店</p>
                            <p><span class="time">{{leaveMon}}月{{leaveDay}}号</span></p>
                        </div>
                    </div>
                    <div class="choice-tys">
                        <span class="term" :class="{'active': filterArr.indexOf(item) !== -1}"  @click="toFilter(item, key)"  v-for="item, key in houseTys">{{item}}</span>
                    </div>
                    <div class="term-show" v-if="filterArr.length">
                        <p>您筛选的条件是(您可以点击进行取消):</p>
                        <span class="hasterm" @click="toFilter(item)" v-for="item of filterArr">{{item}}</span>
                    </div>
                    <div class="filter-res">
                        <div class="res-lists">
                            <img src="">
                            <div class="ty-desc">
                                <p class="house-ty">普通房</p>
                                <p class="house-detai"><span>双床</span><span>无早餐</span></p>
                                <p class="cancel"><span>免费取消</span></p>
                            </div>
                            <div class="order-btn">
                                
                                <div class="btn">
                                    <p class="to-order">预定</p>
                                    <p class="order-type">到店付</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapActions, mapState} from 'vuex';
    export default {
      name: 'hotelDetail',
      data () {
        return {
          houseTys: {
            'kd': '可订',
            'hz': '含早',
            'ljqr': '立即确认',
            'mfqx': '免费取消'
          },
          isFiltitem: '',
          filterArr: [],
          comeMon: '',
          leaveMon: '',
          comeDay: '',
          leaveDay: '',
          dayNum: ''
        };
      },
      components: {
        headerTop
      },
      computed: {
        hotelMore () {
          return {...this.hotelPrice, ...this.hotelItem};
        },
        ...mapState(['hotelPrice', 'hotelItem', 'hotelSelc'])
      },
      methods: {
        /**
         * [toFilter 点击条件动作]
         * @param  {[String]} item [被选中的条件]
         * @return {[type]}      [description]
         */
        toFilter (item) {
          let index = this.filterArr.indexOf(item);
          if (index !== -1) {
            this.filterArr.splice(index, 1);
          } else {
            this.filterArr.push(item);
          }
        },
        ...mapActions(['getHotelPriceSearch'])
      },
      mounted () {
        this.comeMon = this.hotelSelc.comeDate.slice(4, 6);
        this.comeDay = this.hotelSelc.comeDate.slice(6);
        this.leaveMon = this.hotelSelc.leaveDate.slice(4, 6);
        this.leaveDay = this.hotelSelc.leaveDate.slice(6);
        console.log('选中的日期', this.hotelSelc);
        console.log('床型', this.hotelPrice);
        // this.toast('goood');
      }
    };
</script>
<style type="text/css" lang="stylus">
    .hotelDetail
        
        .header
            color: white;
            padding: 0 2rem;
            position: fixed;
            z-index: 4;
            top: .3rem;
            font-size: 4rem;
        .main
            .top-img
                color: white;
                position: relative;
                width: 100%;
                height: 15rem;
                img
                    width: 100%;
                    height: 100%;
                .img-desc
                    padding: 0 1rem;
                    position: absolute;
                    overflow: hidden;
                    bottom: 0;
                    text-align: left;
                    >p
                        height: 2rem;
                        line-height: 2rem;
                    .hotel-name
                        font-weight: bold;
                        font-size: 1.4rem;
                .img-bottom
                  color: black;
                  .blue
                      color: #6CA4EA;  
                  .comment-good
                      font-weight: bold;
                      font-size: 1.5rem;  
                  .all-comment, .right-labels
                      border-left: 1px solid lightgray;
                      padding: 0 1rem;
                      span
                          display: block;
                          height: 1rem;
                          line-height: 1rem;
                          width: 3rem;
                      .comment
                        background: #E9F1FC;  
                        border-radius: 0.5rem;
                  .left-title
                      font-weight: bold;
                      font-size: 1rem;
                   .left-label
                       font-size: .5rem;
                       color: lightgray;                  
                    .left-label, .left-title
                        height: 1.4rem;
                        line-height: 1.4rem;    
        .content
            margin-top: 14rem;
            >div
                padding: 1rem;
                background: white;
            .choice-house
                >div
                    border-bottom: 1px solid lightgray;
                .choice-date
                    display: flex;
                    padding: 0 2rem;
                    >div
                        flex: 1;
                        >p
                            height: 2rem;
                            line-height: 2rem;
                    .cometime, .leavetime
                        flex: 2;
                        text-align: center;
                    .alltime
                        height: 4rem;
                        line-height: 4rem;
                        .timenum
                            display: inline-block;
                            height: 1.5rem;
                            padding: 0 0.5rem;
                            line-height: 1.5rem;
                            border-radius: 0.5rem;
                            border: 1px solid lightgray;    
            .choice-tys, .term-show
                text-align: left;
                .term, .hasterm
                    display: inline-block;
                    padding: 0.5rem;
                    border: 1px solid black;
                    margin: 0.5rem;
                    border-radius: 5px;
                .active
                    border: 1px solid  #75A9EB;
                    background: #E8F5FD;
                    color: #75A9EB;                      
            .filter-res
                .res-lists
                    display: flex;
                    padding: 1rem;
                    >div, img
                        flex: 1;
                    img
                        height: 5rem;
                        width: 5rem;    
                    .ty-desc
                        flex: 2;
                        text-align: left;
                        >p
                            height:2rem;
                            line-height: 2rem;
                        .house-ty
                            font-size: 1.5rem;
                            font-weight: bold;
                        .house-detai, .cancel
                            color: gray;           
                    .order-btn
                        text-align: right;
                        .btn
                            text-align: center;
                            border: 2px solid #5495E6;
                            display: inline-block;
                            border-radius: 5px;
                            width: 4rem;
                            .to-order
                                background: #5495E6;
                                color: white;
                                height: 1.5rem;
                                line-height: 1.5rem;
                            .order-type
                                color: #5495E6;                                 
</style>
