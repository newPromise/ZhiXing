<template>
    <div class="lineDet">
        <div class="det-header">
            <header-top title='时间选择'></header-top>
            <div class="head-msg">
                <div class="start-msg">
                    <p class="time">{{choiceLine.starttime}}</p>
                    <p class="city">{{choiceLine.startcity}}</p>
                    <p class="station">{{choiceLine.startstation}}</p>
                </div>
                <div class="time-msg">
                    <p>两小时</p>
                    <p>&nbsp</p>
                    <p>&nbsp</p>
                </div>
                <div class="end-msg">
                    <p class="time">{{choiceLine.endtime || '预估时间'}}</p>
                    <p class="city">{{choiceLine.endcity}}</p>
                    <p class="station">{{choiceLine.endstation}}</p>
                </div>
            </div>
        </div>
        <div class="det-content">
            <div class="alert-msg" @click="getInstruc()">
                <mt-cell  title='备选车次 可退票' is-link></mt-cell>
                <mt-popup v-model="instrucPop" position="bottom" >
                    <div class="pop" @click="instrucPop = false"><p>这里是订票说明</p></div>
                </mt-popup>        
            </div>
            <div class="passenger">
                <div class="passenger-msg" v-for="item of busPassenger" v-if="item.isPassenger === true">
                    <div class="del-show">del</div>
                    <div class="pass-msg">
                        <div class="per-msg">
                            <p>{{item.name}}  <span>{{item.type}}</span></p>
                            <p>{{item.paperNo}}</p>
                        </div>
                        <div v-show="false"  class='per-del'>删除</div>
                    </div>
                </div>
                <div class="add-passenger">
                    <a @click="$router.push('/addNew')">添加乘客</a>
                </div>
            </div>
            <div class="ticket-get">
                <div class="get-person passenger-msg">
                    <div class="label" >取票人</div>
                    <div class="get-detail">
                        <p>张宁宁  <span>成人票</span></p>
                        <p>2370921199507092414</p>
                    </div>
                    <div class="expand">展开</div>
                </div>
                <div class="get-phone get-person">
                    <div class="label">手机号</div>
                    <div class="get-detal phoneNum"><p><input v-model="phone" placeholder="用于接收取票信息"></p></div>
                    <div></div>
                </div>
            </div>
            <div class="service-fate">
                <mt-cell title="服务费" value="5元/人"></mt-cell>
            </div>
            <div class="one-free">
                <mt-cell title="1元免票" label="中奖免票款,天天开奖" >
                    <div name="value"><mt-switch v-model="isOnefree"></mt-switch></div>
                </mt-cell>
            </div>
            <div class="assurance" @click="showSomeInsur = true">
                <mt-cell title="有机会免费获赠保险">
                    <div name="value">保险</div>
                </mt-cell>
                <mt-cell  :title="choiceInsur" is-link></mt-cell>
            </div>
            <div class="coupon">
                <mt-cell title="选择优惠券" value="无可用优惠券"  is-link></mt-cell>
            </div>
            <div class="friend-tip">
                <p>友情提示</p>
                <p>*自动取票请提前到出发车站取票</p>
                <p>*乘客信息需要为实际乘车人，否则影响保险保障的权益哦</p>
            </div>
        </div>
        <div class="det-footer">
            <div class="show-price">￥{{lastPrice}}</div>
            <div class="to-order" @click="orderNow">立即预订</div>
        </div>
        <mt-popup v-model="showSomeInsur" position = "right">
            <div class="insurance">
                <header-top baccolor="white" color="black" title="服务类型"  hasRight>
                    <div slot="left">
                        <span @click="showSomeInsur = false">返回</span>
                    </div>
                    <div slot="right">
                        <span @click="showSomeInsur = false">确定</span>
                    </div>
                </header-top>
                <div class="insurance-con">
                    <div class="insurance-choices" v-for="item,index of allInsur">
                        <mt-radio v-model="choiceInsur"  :options="[item.name]">
                            <div>我是一段文字</div>
                        </mt-radio>
                        <mt-cell title="推荐选择, 安全出行, 最高保险23万" v-if="index !== 2"></mt-cell>
                    </div>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapActions, mapState} from 'vuex';
    import { Toast } from 'mint-ui';
    export default {
      name: 'lineDet',
      data () {
        return {
          phone: '',
          instrucPop: false,
          showAddnew: false,
          isOnefree: false,
          showSomeInsur: false,
          choiceInsur: '不需要任何附加产品',
          insurancePrice: '',
          lastPrice: 0,
          allInsur: [
            {
              name: '汽车乘意险  5元/人',
              money: 5,
              insurMon: 10
            },
            {
              name: '汽车乘意险  10元/人',
              money: 10,
              insurMon: 25
            },
            {
              name: '不需要任何附加产品',
              money: 0
            }
          ]
        };
      },
      components: {
        headerTop
      },
      watch: {
        'isOnefree': function (val, old) {
          console.log('yesss', this.lastPrice);
          if (val !== 'undefined') {
            console.log('food', val);
            if (val) {
              console.log(this.lastPrice);
              this.lastPrice = this.lastPrice + 1;
            } else {
              this.lastPrice = this.lastPrice - 1;
            }
            console.log(this.lastPrice);
          }
        },
        'insurancePrice': function (val, old) {
          console.log('变化的保险只', val);
          this.lastPrice = Number(this.lastPrice) - old;
          this.lastPrice = Number(this.lastPrice) + val;
        },
        'choiceInsur': function (val, old) {
          this.allInsur.map((item, index) => {
            if (item.name === val) {
              this.insurancePrice = item.money;
            }
          });
        }
      },
      computed: {
        ...mapState(['choiceLine', 'busPassenger'])
      },
      methods: {
        /**
         * 用于存放订单信息，并且将订单的信息放到所有订单中
         * @return {[type]} [description]
         */
        orderNow () {
          if (this.phone === '') {
            Toast({
              message: '请输入手机号',
              position: 'bottom'
            });
          };
          let ver = this.vertify({name: 'phone', value: this.phone});
          console.log(ver);
          if (ver) {
            console.log('dsf');
            let datas = {
              phone: this.phone,
              price: '',
              servicePrice: 5,
              busPrice: this.choiceLine.price,
              insurancePrice: this.insurancePrice
            };
            datas.price = this.choiceLine.price + 5;
            this.$router.push('/orderDetail');
            this.setBusorder({...this.choiceLine, ...datas});
            this.setBusallorders({...this.choiceLine, ...datas});
            this.$router.push('/orderDetail');
          };
        },
        getInstruc () {
          this.instrucPop = true;
        },
        ...mapActions(['setBusPassenger', 'setBusallorders', 'setBusorder'])
      },
      mounted () {
        this.lastPrice = Number(this.choiceLine.price);
        console.log('最终的价格', this.lastPrice);
      }
    };
</script>
<style type="text/css" lang="stylus" scoped>
    .lineDet
        .det-header
            padding-bottom: 1rem;
            background: #5495E6;
            color: white;
            .head-msg
                padding: 0 1rem;
                width: 100%;
                display: flex;
                >div
                    flex: 1;
                .start-msg
                    text-align: left;
                .end-msg
                    text-align: right;
                .city
                    font-size: 2rem;            
        .det-content
            width: 100%;
            >div
                background: white;
                margin-bottom: 1rem;
            .alert-msg
                .pop
                    height: 100%;
                    width: 100%;
                    background: rgba(39, 40, 34, 0.3 );
                    color: white;
                    font-size: 1.5rem;    
            .passenger, .ticket-get
                .passenger-msg
                    height: 4rem;
                    display: flex;
                    border-bottom: 1px solid lightgray;
                    .del-show
                        line-height: 4rem;
                        flex: 1;
                    .pass-msg
                        text-align: left;
                        flex: 8; 
                        p
                            height: 2rem;
                            line-height: 2rem;
                .add-passenger
                    padding: 1rem;
                    a
                        display: inline-block;
                        width: 100%;
                        height: 4rem;
                        line-height: 4rem;
                        text-align: center;
                        border: 1px solid red;
                        color:  #5495E6;
            .ticket-get
                .get-person
                    display: flex;
                    padding: 0 1rem;
                    >div
                        height: 4rem;
                        lien-height: 4rem;
                        flex: 1;
                    .label
                        text-align: left;
                        line-height: 4rem;
                    .get-detail
                        flex: 2;
                        p
                            text-align: left;
                            height: 2rem;
                            line-height: 2rem;
                    .expand
                        text-align: right;
                        line-height: 4rem;
                .get-phone
                    .phoneNum
                        flex: 2;
                        p
                            line-height: 4rem;
                            text-align: left;                    
            .friend-tip
                background: transparent;
                height: 8rem;
                p
                    text-align: left;   
                                
                
        .det-footer
            width: 100%;
            left: 0;
            position: fixed;
            bottom: 0;
            display: flex;
            >div
                flex: 1;
                height: 3rem;
                line-height: 3rem;
            .to-order
                text-align: cneter;
                background: #5495E6;
                color: white;
            .show-price
                font-size: 1.5rem;
                background: white;
                padding-left: 1rem;
                flex: 1.8;
                text-align: left;
                color: #5495E6;               
        .add-new
            width: 100%;
            height: 100%;
        .mint-popup-right
            background:#F4F4F4
            width: 100%;
            height: 100%;
            .insurance
                .insurance-con
                    padding: 1rem;
                    .insurance-choices
                        background: white;
                        >.mint-cell:last-child
                            padding: 0 1rem;                               
</style>