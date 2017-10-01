<template>
    <div class="watch-set">
        <header-top title="监控设置"></header-top>
        <div class="choice">
            <div class="city">
                <div class="s-c-c">
                    <span class="s-l label">出发城市</span>
                    <span class="s-c">{{startCity}}</span>
                </div>
                <div class="tog">
                   <span>转换</span>
                </div>
                <div class="e-c-c">
                    <span class="e-l label">到达城市</span>
                    <span class="e-c">{{endCity}}</span>
                </div>
            </div>
            <div class="otherChoice"  v-for="item, index of choices">
                <span class="label">{{item.lb}}</span>
                <span class="content">{{item.val}}</span>
                <span @click="toChoiceSite(index)" class="mulChioce"><a>多选</a></span>
            </div>
        </div>
        <div class="addUser">
            <p>添加乘车人</p>
        </div>
        <div class="msg">
            <span class="label">短信提醒</span>
            <span class="num content"><input onkeyup="this.value=this.value.replace(/[^\d]/g,'') " type="text" v-model="phoneNum" placeholder="请输入手机号"></span>
            <span class="icon phoneIcon">滴孩啊</span>
        </div>
        <div class="next">
            <a @click="toWatch">下一步</a>>
        </div>
    </div>
</template>
<script type="text/javascript">
    import {mapActions, mapState} from 'vuex';
    import headerTop from '../common/header';
    import {Toast, MessageBox, Indicator} from 'mint-ui';
    export default {
      name: 'watchSet',
      data () {
        return {
          choices: [
            {lb: '出发日期', val: ''},
            {lb: '指定车次', val: ''},
            {lb: '坐席类型', val: ''}
          ],
          startCity: '北京',
          endCity: '上海',
          phoneNum: '',
          date: null
        };
      },
      computed: {
        ...mapState(['siteTys', 'selDate', 'grabTicks', 'ticketRes'])
      },
      components: {
        headerTop
      },
      methods: {
        // 点击多选操作进行路由的改变
        // 选择监听的车次, 日期, 坐席类型
        toChoiceSite (index) {
          console.log(index);
          if (index === 2) {
            this.$router.push('/siteTys');
          } else if (index === 1) {
            Indicator.open({
              text: '正在查询车次',
              spinnerType: 'fading-circle'
            });
            this.getTicketRes({start: this.startCity, end: this.endCity, date: '2017-09-27'});
            setTimeout(() => {
              Indicator.close();
              this.$router.push('/choiceTrainNo');
            }, 3000);
          } else if (index === 0) {
            this.$router.push('/calender');
          }
        },
        getSiteTys () {
          if (!this.siteTys.length || this.siteTys.indexOf('全部类型') >= 0) {
            this.choices[2].val = '全部类型';
          } else {
            this.choices[2].val = this.siteTys.reduce((pev, next) => {
              return pev + ',' + next;
            });
          }
        },
        addWatch () {
          let watchItem = {
            city: {
              startCity: this.startCity,
              endCity: this.endCity
            },
            date: this.choices[0].val,
            siteTys: this.choices[2].val,
            tranNo: this.choices[1].val
          };
          return watchItem;
        },
        toWatch () {
          if (!this.phoneNum) {
            Toast({
              message: '请输入手机号',
              position: 'bottom',
              duration: 2000
            });
            return;
          };
          MessageBox({
            title: '提d示',
            message: '尚未添加联系人, 需要开启本地监控吗？',
            confirmButtonText: '返回填写',
            cancelButtonText: '本地监控'

          });
          MessageBox.confirm('', {
            title: '提示',
            message: '尚未添加联系人, 需要开启本地监控吗？',
            confirmButtonText: '返回填写',
            cancelButtonText: '本地监控'
          }).then(action => {
            if (action === 'confirm') {
            }
            console.log(action);
          }).catch(err => {
            if (err === 'cancel') {
              console.log('it is');
              Indicator.open('正在添加监控，请稍后');
              setTimeout(() => {
                Indicator.close();
                this.grabTicks.push(this.addWatch());
                this.$router.push('/grabDet');
              }, 3000);
            }
          });
        },
        ...mapActions(['setDate', 'setGrabTicks', 'getLineRes', 'getTicketRes'])
      },
      mounted () {
        this.getSiteTys();
        this.date = this.selDate;
        if (typeof this.date.month === 'undefined') {
          this.setDate({month: new Date().getMonth() + 1, day: new Date().getDate()});
        }
        this.choices[0].val = `${this.date.month}月${this.date.day}日`;
        console.log(this.selDate);
      }
    };
</script>
<style type="text/css" lang="stylus" scoped>
    .watch-set
        >div
            background-color: white;
            border-bottom: 1px solid gray;
        .choice
            .city
                padding: 2rem 1rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid lightgray;
                >div
                    flex: 1;
                    display: table-cell;
                    vertical-align: middle;
                .s-c-c, .e-c-c
                    flex: 2;
                    span
                        font-size: 1.3rem;
                        display: block;
                        width: 100%;
                    .label
                        font-size: 0.8rem;
                        height: 2rem;
                        color: gray;        
                .s-c-c
                    text-align: left;
                .e-c-c
                    text-align: right
        .otherChoice, .msg
                border-bottom: 1px solid lightgray;
                overflow: hidden;
                padding: 1rem;
                span
                    display: inline-block;
                    height: 2rem;
                    line-height: 2rem;
                .label
                    float: left;
                    font-size: 0.9rem;
                    color: gray;
                    margin-right: 1rem;
                .content
                    white-space: nowrap;
                    max-width: 14rem;
                    text-overflow: ellipsis;
                    text-align: left;
                    float: left;
                    font-size: 1.3rem;
                    overflow: hidden;
                .mulChioce
                    width: 4rem;
                    
                    border: 1px solid gray;
                    color: #5596E7;
                    border-radius: 5px;
                    float: right;                                     
        .addUser, .msg, .next 
            margin: 1rem 0;
            .phoneIcon
                float: right;
        .addUser
            p
                line-height: 4rem;
                width: 100%;
                text-align: center;
                color: skyblue;
        .next
            position: fixed;
            bottom: 0;
            height: 4rem;
            width: 100%;
            left: 0;
            z-index: 10000;
            margin: 0;
            background-color: #5596E7;
            a
                color: white;
                display: inline-block;
                line-height: 4rem;
                text-align: center;
                width: 100%;
        input
            border: none;                                                   
</style>
