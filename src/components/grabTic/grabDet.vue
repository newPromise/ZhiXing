<template>
    <div class="grabDet">
        <div class="grab-header">
            <div class="topnav">
                <span></span>
                <span class="title">抢票任务</span>
                <span @click="addTask" class="add">添加任务</span>
            </div>
            <div class="service">
            </div>
        </div>
        <div class="main">
            <div class="watch-item" v-for="item of grabTicks">
                <div class="item-left">
                    <div class="item-det">
                        <p class="city"><span>{{item.city.startCity}}</span>到<span>{{item.city.endCity}}</span></p>
                        <p class="date">{{item.date}}出发</p>
                    </div>
                    <p class="find-msg">就打扫房间的；啊</p>
                </div>
                <div class="item-right">
                    <div class="item-act">
                        <span class="statu view"><span>查看</span></span>
                        <!--<span class="statu preorder">预定</span>-->
                    </div>
                    <p class="find-tick">{{comNum(item.tickNum)}}</p>
                </div>
            </div>
        </div>
        <mt-popup
        v-model="popupVisible"
        >
        <div class="grab-choice">
            <div class="watch-fir">
                <a @click="toWatchFir">余票监控, 抢到再付款</a>
            </div>
            <div class="pay-fir">
                <a @click="toPayFir">预付票款，全自动出票</a>
            </div>
        </div>   
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
    // import { MessageBox } from 'mint-ui';
    import {mapActions, mapState} from 'vuex';
    export default {
      name: 'grabDet',
      data () {
        return {
          popupVisible: false
        };
      },
      filters: {
      },
      components: {
        // MessageBox
      },
      computed: {
        comNum: function (val) {
          console.log(val);
        },
        ...mapState(['grabTicks'])
      },
      methods: {
        addTask () {
          this.popupVisible = true;
        },
        toWatchFir () {
          this.$router.push('/watchSet');
        },
        toPayFir () {
          this.$router.push();
        },
        ...mapActions(['setGrabTicks'])
      },
      mounted () {
        console.log(this.grabTicks);
      }
    };
</script>
<style type="text/css" lang="stylus">
    .grabDet
        .grab-header
            padding: 1rem;
            background: #3C7DCE;
            color: white;
            .topnav
                display: flex;
                align-items: center;
                span
                    flex: 1;
            .service
                margin-top: 1rem;
                border-radius: 2px;
                width: 100%;
                padding: 1rem;
                height: 4rem;
                background: white;
        .grab-choice
            border-radius: 5px;
            background: white;
            .watch-fir, .pay-fir
                padding: 3rem 3rem;
                border-bottom: 1px solid gray;
                text-align: center;
                a
                    border-radius: 5px;
                    width: 15rem;
                    color: white;
                    font-size: 1.2rem;
                    text-align: center;
                    padding: 1rem;
                    display: inline-block;
            .watch-fir
                a
                    background: #3C7DCE;
            .pay-fir
                a
                    background: #FC6E51;                       
        .main
            .watch-item
                background: white;
                width: 100%;
                padding: 1rem 1rem;
                margin-top:  1rem;
                display: flex;
                .item-left, .item-right
                    flex: 1;
                    .item-det, .item-act
                        margin-bottom: 1rem;
                .item-left
                    flex: 3;
                    text-align: left;
                    .item-det
                        p
                            height: 2rem;
                            width: 100%;
                    .find-msg
                        color: green;
                .item-right
                    .item-act
                        line-height: 2rem;
                        .preorder,.statu
                            display: inline-block;
                            width: 3rem;
                            height: 3rem;
                            border-radius: 100%;
                            background: #29CE73;
                            color: white;
                            text-align: center;
                            line-height: 3rem;
                        .view
                            line-height: 3.4rem;
                            background: white;
                            border: 1px solid red;
                            border-bottom: 0;    
                            span
                                line-height: 3rem;
                                display: inline-block;
                                background: red;
                                border-radius:  100%;
                                width: 2.5rem;
                                height: 2.5rem;
                                
                            

   .mint-msgbox-btns
    .hasTicket, .payFirst
        color: white;
        display: block;
        width: 100%;
        margin: 3rem 0;
        padding: 1rem;
    .hasTicket
        background: red;    
    .payFirst
        background: #5495E6;                
</style>
