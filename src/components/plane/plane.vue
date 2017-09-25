<template>
<div class='plane'>
    <div class="search-area">
      <div class="area">
      <div class="inner">
        <span>国内</span>
      </div>
      <div class="outer">
        <span>国际</span>
      </div>
    </div>
    <div class='city-c'>
      <div class="c-l">
        <span class='s-c'>
          北京
        </span>
      </div>
      <div class="togIcon c-m"></div>
      <div class="c-r">
        <span class="e-c">
          上海
        </span>
      </div>
    </div>
    <div class='date-c'>
      <div class="c-l">
        <span class="s-c">
          9月16日出发
        </span>
      </div>
      <div class="c-m"></div>
      <div class="c-r">
        <span class="e-c">
          返程日期
        </span>
      </div>
    </div>
    <div class="choice-c">
      <div class="c-l">
        <span>携带儿童</span>
        <mt-checklist
            class="checklist"
            v-model="value"
                >
         </mt-checklist>
      </div>
    </div>
    <div class="search">
      <button class="searchBtn">查询</button>
    </div>
    </div>
    <div class="some-tip">
      <div class="tip" v-for="lb of tipLabel">
        <span>{{lb.title}}</span>
      </div>
    </div>
    <div class="spec-sale">
      <p class="sale-tit">特价机票</p>
      <div class="s-b">
        <div class="s-i">
          <div class="i-l">
            <p>trew</p>
            <p>tre</p>
          </div>
          <div class="i-r">
            <span>234</span>
          </div>
        </div>
        <div class="s-i">
          <div class="i-l">
            <p>trew</p>
            <p>tre</p>
          </div>
          <div class="i-r">
            <span>234</span>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script type="text/javascript">
    export default {
      name: 'plane',
      data () {
        return {
          tipLabel: [
          {icon: '', title: '在线选座'},
          {icon: '', title: '航班动态'},
          {icon: '', title: '特价机票'},
          {icon: '', title: '乘机指南'}
          ],
          value: ''
        };
      },
      methods: {
      },
      mounted: {
      }
    };
</script>
<style type="text/css" lang="stylus">
  .plane
    >div:not(:first-child)
      margin: 1rem 0;
    .search-area, .some-tip, .spec-sale
      padding: 1rem;
      background-color: white;
    .area
      width: 100%;
      display: flex;
      background: white;
      border-bottom: 1px solid lightgray;
      .inner, .outer
        width: 50%;
        flex: 1;
        display: inline-block;
        text-align: center;
        span
          border-bottom: 2px solid skyblue;
          text-align: center;
          line-height: 3rem;
          display: inline-block;
          width: 5rem;
          height: 3rem;
    .city-c,.date-c,.choice-c
      display: flex;
      >div
        flex: 2;
        
        span
          display: inline-block;
          height: 3rem;
          line-height: 3rem;
      .c-l, .c-r
        border-bottom: 1px solid lightgray;
      .c-l
        text-align: left;
      .c-r
        text-align: right;        
      .c-m
        flex: 1;
    .some-tip
      display: flex;
      .tip
        flex: 1;
        text-align: center;
    .spec-sale
      .sale-tit
        text-align: left;
      .s-b
        .s-i
          border: 1px solid #EBEBEB;
          display: inline-block;
          width: 49%;
          overflow: hidden;
          .i-l, .i-r
            height: 100%;
            float: left;
          .i-l
            padding: 1rem;
            width: 80%;
            >p
              line-height: 2rem;
              height: 2rem;
              
          .i-r
            background-color: #F9F9F9;
            width: 20%;
            >span
              color: #FB9884;
              height: 6rem;
              line-height: 6rem;
  
  .mint-checklist
      display: inline-block;
      width: 49%;
  .mint-checkbox-core
      border-radius: 5px !important;
      border: 2px solid skyblue !important; 
                
              
                             
</style>