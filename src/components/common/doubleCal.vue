<template>
    <div class="doubleCal">
        <mt-popup position="bottom" v-model="popup">
            <div class="main">
                <div class="header">
                    <header-top baccolor="gray" title="选择日期"></header-top>
                </div>
                <div class="content">
                    <div class="month">
                        <div class="year">2017年10月</div>
                        <div class="week">
                            <span v-for="day of weekDays">{{day}}</span>
                        </div>
                        <div class="days">
                            <span v-for="day of blankDays"></span>
                            <span  :class="{'select': selects.indexOf(day) !== -1, 'among': selects[0] < day && day <selects[1]}" @click="selectDay(2017, 9,day)" v-for="day of allDays">{{day}}<span class="tys">{{jugeTys(day)}}</span></span>
                        </div>
                    </div>
                </div>
                <div class="ensureBtn">
                    <button class="btn" @click="ensureTime" :class="{'not-active': selects.length !== 2}">完成</button>
                </div>
            </div>
        </mt-popup>
        <p>我是一算文字</p>
    </div>
</template>
<script type="text/javascript">
    import headerTop from './header';
    export default {
      name: 'doubleCal',
      props: ['popup', 'dayNum', 'mon'],
      data () {
        return {
          cometime: '',
          leavetime: '',
          // monthNums 表示从当前月向后几个月
          blankDays: '',
          selects: [],
          allDays: '',
          month: '',
          year: '',
          monthNums: '',
          voidDays: '',
          weekDays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        };
      },
      components: {
        headerTop
      },
      methods: {
        jugeTys (day) {
          if (this.selects[0] === day) return '入住';
          if (this.selects[1] === day) return '离开';
        },
        /**
         * [selectDay 用于选择日期存入数组中]
         * @param  {[type]} year [备选中的日期的年份]
         * @param  {[type]} mon  [被选中的日期的月份]
         * @param  {[type]} day  [被选中的日期的天数]
         * @return {[type]}      [description]
         */
        selectDay (year, mon, day) {
          let now = new Date().getTime();
          if (new Date(year, mon, day).getTime() < now) {
          } else {
            let len = this.selects.length;
            if (len === 2 || this.selects[0] > day) {
              this.selects = [];
            }
            this.selects.push(day);
          }
        },
        /**
         * [getDays 用于获得到日期相关]
         * @param  {[type]} num   [从当前日期向后算起几个月]
         * @param  {[type]} month [月份]
         * @return {[type]}       [description]
         */
        getDays (num, month) {
          let date = new Date();
          this.year = date.getFullYear();
          this.month = date.getMonth();
          this.allDays = new Date(this.year, this.month + 1, 0).getDate();
          this.blankDays = new Date(this.year, this.month, 1).getDay();
          // let month = month ||
        },
        ensureTime () {
          if (this.selects.length !== 2) return;
          this.cometime = this.selects[0];
          this.leavetime = this.selects[1];
          this.$emit('update:dayNum', this.leavetime - this.cometime);
          this.$emit('uodate:mon', this.month);
          this.$emit('update:cometime', this.month + 1 + '月' + this.cometime + '日');
          this.$emit('update:leavetime', this.month + 1 + '月' + this.leavetime + '日');
          this.$emit('update:popup', false);
        }
      },
      mounted () {
        this.getDays();
      }
    };
</script>
<style type="text/css" lang="stylus">
    .doubleCal
        .mint-popup-bottom
            width: 100%;
            .main
                .header
                .content
                    max-height: 30rem;
                    overflow: hidden;
                    .month
                        text-align: left;
                        background: white;
                        span
                            display: inline-block;
                            width: 14%;
                            height: 4rem;
                            line-height: @height;
                            text-align: center;
                        .tys
                            display: inline;   
                        .select
                            background: #5495E6;
                            color: white;
                            border-radius: 5px;
                        .among
                           background: #DDEAFA;
                           color: #5495E6;         
                        .week
                            
                            width: 100%;
                            span
                                font-size: 1rem;
                                font-weight: bold;
                    .year
                        width: 100%;
                        text-align: center;
                        height: 2rem;
                        line-height: 2rem;
                        span
                            font-size: 1rem;
                .ensureBtn
                    color: white;
                    padding: 1rem;
                    .btn
                        background: #5495E6;
                        text-align:center;
                        color: white;
                        line-height: 3rem;
                        height: 3rem;
                        border: none;
                        width: 100%;
                    .not-active
                        background: #CCCCCC;                       
</style>
