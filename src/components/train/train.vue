<template>
<div class='train-search'>
    <div class='choice-city choice'>
        <span class='startCity' @click='choiceCity()'>{{city.startCity}}</span>
        <span class='togIcon' @click='togCity()'><i class="iconfont  icon-zhuanhuan1"></i></span>
        <span class='endCity' @click='choiceCity()'>{{city.endCity}}</span>
    </div>
    <div class='choice-date choice'>
        <span class='date' @click="$router.push('/calender')">{{selDate.month + 1}}月{{selDate.day}}</span>
    </div>
    <div class='choice-sty choice'>
        <span class='isHigh'>高铁动车<input type='checkbox' v-model='ishigh'></span>
        <span class="isStudent">学生票<input type="checkbox" v-model="isStudent"></span>
    </div>
    <div class='search'>
        <button class='searchBtn'  @click="$router.push('/trainRes')">查询</button>
    </div>
</div>
</template>
<script>
    import {mapState, mapActions} from 'vuex';
    export default {
      name: 'train',
      data () {
        return {
          ishigh: ''
        };
      },
      computed: {
        ...mapState(['city', 'selDate'])
      },
      methods: {
        choiceCity () {
          this.$router.push('/allCitys');
        },
        togCity () {
          // es6 解构赋值,用于交换变量
          [this.city.startCity, this.city.endCity] = [this.city.endCity, this.city.startCity];
        },
        ...mapActions(['setDate', 'setTrainRes'])
      },
      mounted () {
        if (this.selDate.month && this.selDate.day) {
        } else {
          this.setDate({month: new Date().getMonth(), day: new Date().getDate()});
        }
      }
    };
</script>
<style type='text/style' rel='styleSheet' lang='stylus' scoped>
    .train-search
        background: white;
        padding: 1rem;
        .choice-city,.choice-date
            width: 100%;
        .choice-city,.choice-date,.choice-sty
            display: flex;
            height: 4rem;
            span
                font-size: 20px;
                line-height: 4rem;
                flex: 1;
            .startCity, .endCity
                border-bottom: 1px solid lightgray;    
            .startCity
                text-align: left;
            .endCity
                text-align: right;
            .iconfont
                font-size: 2rem;    
        .choice-date
            border-bottom: 1px solid lightgray;
            span
                width: 100%;
                text-align: left;
        .choice-sty
            display: flex;
            justify-content: space-around;
            span
                font-size: 1.5rem;
                margin-right: 1rem;
                flex: 1;
                display: inline-block;
                width: 100%;
                text-align: right;
                &:first-child
                    text-align: left;
                input
                    margin-left: 1rem;    
            .isStudent
                text-align: right;        
       
                                      
</style>
