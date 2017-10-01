<template>
    <div class="addNew">
        <header-top  baccolor="white" color="black" title="选择乘客" hasRight>
            <div slot="right">
                    <span @click="toChoice">确定</span>
            </div>
        </header-top>
        <div class="add" @click="popVisible = true">
            <span>新增乘客 {{choicePeg}}</span>
        </div>
        <div class="allPassengers">
            <div class="peg-item" v-for="item of busPassenger">
                <div class="peg-check">
                    <mt-checklist v-model="item.isPassenger" :options="['']"></mt-checklist>
                </div>
                <div class="peg-msg">
                    <div class="msg-con">
                         <span>{{item.name}} {{item.isPassenger}} {{ item.type}}</span><br>
                         <span>{{item.paperNo}}</span>
                    </div>
                </div>
            </div>
        </div>
        <mt-popup v-model = 'popVisible'  position="right" modal = "">
            <header-top title="新增乘客信息" baccolor="white" color="black">
                <div slot="left">
                    <span @click="popVisible = false">返回</span>
                </div>
            </header-top>
            <div class="content">
                <div class="name" @click="papersShow = true">
                    <label>购票类型</label><input  readonly :value="type">
                </div>
                <div class="name">
                    <label>乘客姓名</label><input v-model="name" placeholder="请输入证件上的姓名">
                </div>
                <div class="card-type">
                    <label>证件类型</label><input value="身份证" v-model="paperTy" readonly placeholder="请输入姓名">
                </div>
                <div class="card-no">
                    <label>证件号码</label><input v-model="paperNo" placeholder="请输入正确的证件号码">
                </div>
                <div class="child-notice" v-if="type === '儿童票'">
                    <p>儿童票需要注意通知</p>
                </div>
                 <div class="search">
                    <button class="searchBtn" @click="savePassenger()">保存</button>
                </div>
                <mt-popup position="bottom" v-model="papersShow">
                    <mt-radio
                      title="请选择购票类型"
                      v-model="type"
                      :options="['成人票', '儿童票']">
                    </mt-radio>
                </mt-popup>
            </div>
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {Toast} from 'mint-ui';
    import {mapActions, mapState} from 'vuex';
    export default {
      name: 'addNew',
      components: {
        headerTop
      },
      data () {
        return {
          papersShow: false,
          popVisible: false,
          cardTy: '购票类型' + ' 成人票',
          name: '',
          type: '成人票',
          paperTy: '身份证',
          paperNo: '',
          choicePeg: ''
        };
      },
      watch: {
        'busPassenger': function (val) {
          console.log('变化的值', val);
        }
      },
      computed: {
        ...mapState(['busPassenger'])
      },
      methods: {
        /**
         * @desctiption: 用于点击确定选中乘车人
         */
        toChoice () {
          this.$router.push('/lineDet');
        },
        /**
         * @return {noee}
         * @description 点击保存进行保存信息
         * 判断保存是否完整
         * 将乘客人的信息保存
         */
        savePassenger () {
          console.log('name', this.name);
          if (this.name === '') {
            Toast({
              message: '为您筛选16:00之后出发的车次',
              position: 'bottom',
              duration: 5000
            });
            console.log('我倒德奥了');
          }
          if (this.paperNo === '') {
            return;
          }
          this.setPassenger({name: this.name, type: this.type, paperTy: this.paperTy, paperNo: this.paperNo});
          this.popVisible = false;
        },
        ...mapActions(['setPassenger'])
      },
      mounted () {
      }
    };
</script>
<style type="text/css" lang="stylus" scoped>
    .addNew
        .add
            width: 100%;
            margin:  1rem 0;
            background: white;
            color: #5495E6;
            text-align: center;
            line-height: 4rem;
            height: 4rem;    
        .mint-popup-right
            width: 100%;
            height: 100%;
            .common-header
                border-bottom: 1px solid lightgray;
            input
                padding-left: 1rem;
                outline: none;
                border: 0;
            .content
                >div
                    padding: 0 1rem;    
                .name,.card-type, .card-no
                    border-bottom: 1px solid lightgray;
                    text-align: left;
                    height: 4rem;
                    line-height: 4rem;
                .child-notice
                    text-align: left;
                    color: gold;    
            .mint-popup-bottom
                width: 100%;
                padding: 0;
                text-align: left;            
        .allPassengers
            background: white;
            .peg-item
                display: flex;
                .mint-checklist-title
                    margin: 0;
                >div
                    flex: 1;
                    height: 4rem;
                .peg-msg
                    text-align: left;    
                    flex: 3;
                    border-bottom: 1px solid lightgray;
                    .msg-con
                        color: gray;
                        height: 4rem;
                        display: table-cell;
                        vertical-align: middle;
                        line-height: 1.6rem;
                     
</style>
