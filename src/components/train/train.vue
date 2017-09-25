<template>
<div class='train-search'>
    <div class='choice-city choice'>
        <span class='startCity' @click='choiceCity()'>{{city.startCity}}</span>
        <span class='togIcon' @click='togCity()'>ds</span>
        <span class='endCity' @click='choiceCity()'>{{city.endCity}}</span>
    </div>
    <div class='choice-date choice'>
        <span class='date' @click="$router.push({name: 'calender', params: {id: '123'}})">{{selDate.month + 1}}月{{selDate.day}}</span>
    </div>
    <div class='choice-sty choice'>
        <span class='isHigh'>高铁动车<input type='checkbox' v-model='ishigh'></span>
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
<style type='text/style' rel='styleSheet' lang='stylus'>
    .train-search
        span
            display: inline-block;
            line-height: 3rem;
            height: 3rem;
        .choice-city,.choice-date
            width: 100%;
            border-bottom: 1px solid  #EEACAC;
        .choice-city
            display: flex;
            span
                font-size: 20px;
                width: 32%;
                flex: 1;
            .startCity
                text-align: left;
            .endCity
                text-align: right;
        .choice-date
            span
                width: 100%;
                text-align: left;
        .choice-sty
            display: flex;
            justify-content: space-around;
            span
                flex: 1;
                display: inline-block;
                width: 100%;
                text-align: right;
                &:first-child
                    text-align: left;
       
                                      
</style>
