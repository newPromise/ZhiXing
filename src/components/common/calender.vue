<template>
    <div class='calender'>
        <div class='top'>
            <header-top baccolor="white" color="black" title="选择日期"></header-top>
            <div class='cal-week'>
                <ul class='week-bar'>
                    <li v-for='week of weeks'>{{week}}</li>
                </ul>
            </div>
        </div>
        <div class='cal-body'>
            <div class='mon' v-for='mon of monArr'>
                <div class='mon-line'>
                    <span class='line'></span>
                    <span class='date-tip'>{{mon.year}}年{{mon.month + 1}}月</span>
                </div>
                <div class='mon-body'>
                    <span class='blank-day' v-for='day in mon.blankDate' >{{}}</span>
                    <span class='day' :class="[((new Date().getDate() > day && new Date().getMonth() === mon.month)) ? ('overDate') : ((activeDay === day && activeMon === mon.month) ? 'selected' : '' )]" @click='selectDay(day, mon.month)' v-for='day in mon.dayNums'>{{day}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import headerTop from './header';
    import {mapState, mapActions} from 'vuex';
    export default {
      name: 'calender',
      data () {
        return {
          weeks: ['日', '一', '二', '三', '四', '五', '六'],
          // blankDate用来判断前面有几个空格
          blankDate: '',
          dayNums: '',
          dateNow: '',
          month: '',
          year: '',
          blank: ' ',
          monArr: [],
          // 被点击到的日期
          activeDay: '',
          activeMon: '',
          fromPath: '',
          lastPath: '',
          // jugeFrom 用来判断日期的上级路由来自哪里
          jugeFrom: ''
        };
      },
      beforeRouteEnter (to, from, next) {
        next(vm => {
          vm.lastPath = from.fullPath;
        });
      },
      computed: {
        ...mapState(['selDate'])
      },
      components: {
        headerTop
      },
      methods: {
        goBack () {
          this.$router.push(this.lastPath);
        },
        /**
         * [selectDay description]
         * @param  {[String]} day   [被选中的日]
         * @param  {[String} month [被选中的月份]
         * @return {[type]}       [description]
         */
        selectDay (day, month) {
          this.activeDay = day;
          this.activeMon = month;
          let timer = setTimeout(() => {
            this.setDate({month: this.activeMon, day: this.activeDay});
            this.goBack();
            console.log('yes');
          }, 1000);
          timer;
        },
        /**
         * [pushMon description]
         * @param  {[number]} year      [年份]
         * @param  {[number]} month     [月份]
         * @param  {[number]} dayNums   [当前月份的所有天数]
         * @param  {[number]} blankDate [第一天前面的天数]
         * @return {[type]}           [description]
         */
        pushMon (year, month, dayNums, blankDate) {
          let obj = {};
          // 想使用 ...arguments 的语法进行求解，求解错误
          obj.year = year;
          obj.month = month;
          obj.dayNums = dayNums;
          obj.blankDate = blankDate;
          this.monArr.push(obj);
        },
        setCalender () {
          let date = new Date();
          this.month = date.getMonth();
          this.year = date.getFullYear();
          for (let i = 0; i < 3; i++) {
            let first = new Date(this.year, this.month, 1);
            console.log('first', first.getDay());
            this.dayNums = new Date(this.year, this.month + 1, 0).getDate();
            this.blankDate = first.getDay();
            this.pushMon(this.year, this.month, this.dayNums, this.blankDate);
            if (this.month === 11) {
              this.month = 0;
              this.year++;
            } else {
              this.month++;
            }
          }
        },
        ...mapActions(['setDate'])
      },
      mounted () {
        this.setCalender();
        this.activeMon = this.selDate.month;
        this.activeDay = this.selDate.day;
      }
    };
</script>
<style type="text/css" lang='stylus' scoped>
    .calender
        background-color: #EEE2E2;
        .top
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 10;
        .cal-top
            width: 100%;
            height: 4rem;
            background-color: white;
            display: flex;
            div
                line-height: 4rem;
                fex: 1;
            .title
                flex: 3;
                text-align: center;
        .cal-week
            .week-bar
                display: flex;
                width: 100%;
                li
                    height: 2rem;
                    line-height: 2rem;
                    flex: 1;
                    background-color: #D1CFCF;
        .cal-body
            margin-top: 6rem;
            background: white;
            text-align: left;
            padding:  0 1rem;
            .mon
                position: relative;
            .mon-line
                margin-top: 1rem;
                position: relative;
                height: 1rem;
                line-height: 1rem;
                width: 100%;
                .line
                    position: absolute;
                    margin: auto;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    display: inline-block;
                    z-index: 2;
                    width: 100%;
                    height: 1px;
                    border: 1px solid  lightgray;
                .date-tip
                    z-index: 3;
                    display: inline-block;
                    width: 6rem;
                    hieght: 100%;
                    background-color: white;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
            .mon-body
                width: 100%;
                span
                    display: inline-block;
                    width: 3rem;
                    height: 3rem;
                    line-height: @height;
                    border-radius: 100%;
                    font-size: 1rem;
                    text-align: center;
                .blank-day
                    color: transparent;    
                .selected
                    background-color: #5495E6;
                    color: white;    
                .overDate
                    color: #939090;                
                               
</style>
