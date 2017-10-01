<template>
    <div class="orderDetail">
        <div class="order-header">
            <header-top title="订单详情" hasRight>
                <div slot="right">
                    <span @click="popVisible = true">退改说明</span>
                </div>
            </header-top>
            <mt-popup position="bottom" v-model="popVisible">
                <div class="instruction" @click="popVisible = false">
                    <p class="instruc-title">取票,退票，改签的说明</p>
                    <span>关于订票，取票，退票，改签的说明，暂不支持儿童票，免票，学生票</span>
                </div>
            </mt-popup>
           <div class="order-statu">
               <div class="cancel" v-if="isCancelOrder">
                   <p>已取消</p>
                   <p>期待您的下次光临, 么么哒</p>
               </div>
               <div class="notCancel">
                   <p>已提交</p>
                   <p>订单已提交,请在1小时内完成支付</p>
               </div>
           </div>
        </div>
        <div class="order-content">
            <div class="order-site">
                <div class="site-msg">
                    <div class="start-site">
                        <p class="time">{{busOrder.starttime}}</p>
                        <p class="city">{{busOrder.startcity}}</p>
                        <p class="station">{{busOrder.startstation}}</p>
                    </div>
                    <div class="middle"></div>
                    <div class="end-site">
                        <p class="time"></p>
                        <p class="city">{{busOrder.endcity}}</p>
                        <p class="station">{{busOrder.endstation}}</p>
                    </div>
                </div>
                <div class="passenger">
                   <div>
                       <span class="label">乘客人</span>
                       <span v-for = "item of busPassenger" >{{item.name}}</span>
                       <i @click="isShowDet = !isShowDet">图标</i>
                   </div>
                   <div class="showDetail" v-show="isShowDet" v-for="item of busPassenger">
                       <div><p>{{item.name}}  {{item.type}}</p><p>{{item.paperTy}}  {{item.paperNo}}</p></div>
                   </div>
                </div>
                <div class="take-person"></div>
            </div>
            <div class="order-msg">
                <div class="msg-tit"><span>订单信息</span></div>
                <div class="msg-main">
                    <p><span class="number">订单编号</span></p>
                    <p><span class="date">预定日期</span></p>
                </div>
            </div>
            <div class="cancel-order">
                <span>咨询</span>
                <span @click="cancelOrder">取消订单</span>
            </div>
        </div>
        <div class="order-pay">
            <span class="pay-price" @click="popPayDet = !popPayDet">￥{{this.busOrder.price}}  <span class="pay-detail">明细</span></span>
            <span class="pay-act" @click="isPay = true">支付</span>
            <mt-popup position="bottom" v-model="popPayDet">
                <mt-cell v-for="item of priceDetail" :title="item.title"  :value="busOrder[item.tag]"></mt-cell>
            </mt-popup>
        </div>
        <mt-popup v-model="isPay" position="bottom">
            <div class="payChoice">
               <p class="pay-title"><span>选择支付方式</span><span @click="isPay = false">关闭</span></p>
               <mt-radio align="right" v-model="payType" :options="payOptions">
               </mt-radio>
               <div class="search">
                   <button class="searchBtn" @click="isPay = false">去支付</button>
               </div>
            </div>
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapActions, mapState} from 'vuex';
    export default {
      name: 'orderDetail',
      data () {
        return {
          isCancelOrder: false,
          name: '张宁宁',
          isShowDet: false,
          popVisible: false,
          popPayDet: false,
          isPay: false,
          payType: 'weixin',
          priceDetail: [
            {title: '成人费', tag: 'busPrice'},
            {title: '服务费', tag: 'servicePrice'},
            {title: '保险费', tag: 'insurancePrice'}
          ],
          payOptions: [
            {
              label: '微信支付',
              value: 'weixin'
            },
            {
              label: '支付宝客户端',
              value: 'aliPay'
            },
            {
              label: 'QQ钱包',
              value: 'QQPay'
            },
            {
              label: '信用卡支付',
              value: 'CreditCard'
            },
            {
              label: '储蓄卡支付',
              value: 'backCard'
            }
          ]
        };
      },
      components: {
        headerTop
      },
      computed: {
        ...mapState(['busOrder', 'busPassenger', 'busAllorders'])
      },
      methods: {
        // 用于取消订单
        cancelOrder () {
          this.delBusallorders(this.busOrder);
        },
        ...mapActions(['delBusallorders'])
      },
      mounted () {
        console.log(this.busOrder);
      }
    };
</script>
<style type="text/css" lang="stylus" scoped>
    .orderDetail
        .order-header
            background: #5495E6;
            color: white;
            .order-statu
                padding: 1rem;
                text-align: left;
                >div
                    p:first-child
                        font-size: 1.5rem;
                        height: 2rem;
                        line-height: 2rem;
            .mint-popup-bottom
                width: 100%;
                height: 100%;
                background: transparent;
                color: white;
                .instruction
                    width: 100%;
                    height: 100%;
                    padding: 1rem;
                    text-align: left;
                    .instruc-title
                        text-align: center;
                        margin-bottom: 1rem;             
                        
        .order-content
            padding-top: 1rem;
            >div
                padding: 1rem;
                background: white;
            .order-site
                .site-msg
                    display: flex;
                    border-bottom: 1px solid lightgray;
                    >div
                        flex: 1;
                        p
                            height: 2rem;
                            line-height: 2rem;
                        .city
                            font-size: 1.8rem;    
                        .station
                            color: gray;    
                    .start-site
                        text-align: left;
                    .end-site
                        text-align: right;       
                .passenger,.take-person
                    >div
                        overflow: hidden;
                        border-bottom: 1px solid lightgray;
                        span
                            margin-right: 1rem;
                            display: inline-block;
                            float: left;
                            overflow: hidden;
                            height: 4rem;
                            line-height: 4rem;
                        i
                            line-height: 4rem;
                            float: right;
                            overflow: hiddne;
                        .label
                            font-size: 1.3rem;
                            margin-right: 2rem;        
                    .showDetail
                        text-align: left;
                        padding-left: 6rem;        
            .order-msg
                margin: 1rem 0;
                .msg-tit
                    text-align: left;
                    border-bottom: 1px solid lightgray;
                    span
                        display: inline-block;
                        height: 2rem;
                        line-height: 2rem;
                        font-size: 1.3rem;
                        
                .msg-main
                    text-align: left;
                    .number,.date
                        display: inline-block;
                        height: 2rem;
                        line-height: 2rem;
                        font-size: 1rem;
                        margin-right: 1rem;                
            .cancel-order
                display: flex;
                background: transparent;
                span
                    flex: 1;
                    height: 3rem;
                    line-height: 3rem;
                    border-radius: 0.5rem;
                    margin: 1rem;
                    background: white;
                    color: #5495E6;            
        .order-pay
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            span
                font-size: 1.5rem;
                flex: 1;
                height: 4rem;
                line-height: 4rem;
            .pay-price
                padding-left: 2rem;
                flex: 2;          
                text-align: left;
                background: white;
                color: #5495E6;
                .pay-detail
                    font-size: 1rem;
                    color: gray;
            .pay-act
                text-align: center;
                background:  #5495E6;
                color: white;
            .mint-popup-bottom
               width: 100%;
        .mint-popup-bottom
            width: 100%;
            .payChoice
                padding: 1rem;
                .pay-title
                    display: flex;
                    justify-content: space-between;
                       
                
                            
                
                            
</style>
