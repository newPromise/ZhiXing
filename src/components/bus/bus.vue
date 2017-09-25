<template>
    <div class="bus">
        <div class="search-list">
            <div class="city">
                <div class="c-l">
                    <div class="s-c">
                        <span class="cLabel">出发城市</span>
                        <span class="cVal">北京</span>
                    </div>
                    <div class="e-c">
                        <span class="cLabel">到达城市</span>
                        <span class="cVal">上海</span>
                    </div>
                </div>
                <div class="togC c-r"></div>
            </div>
            <div class="date-s">
                <div class='s-d'>
                    <span class="cLabel">出发日期</span>
                    <span class="cVal">上海</span>
                </div>
            </div>
            <div class="search">
                <button class="searchBtn">查询</button>
            </div>
        </div>
        <div class="some-tips">
            <div class="tip" v-for="item of tips">
                <span>{{item.title}}</span>
            </div>
        </div>
        
    </div>
</template>
<script type="text/javascript">
    export default {
      name: 'bus',
      data () {
        return {
          tips: [
            {icon: '', title: '火车票'},
            {icon: '', title: '机场巴士'},
            {icon: '', title: '景区直达'},
            {icon: '', title: '船票'}
          ]
        };
      },
      methods: {
      },
      mounted () {
      }
    };
</script>
<style type="text/css" lang="stylus">
    .bus
        padding: 0；
        .search-list, .some-tips
            margin: 1rem 0;
            padding: 0 1rem;
            background-color: white;
            .city
                display: flex;
                width: 100%;
                .c-l,.c-r
                    flex: 1;
                    width: 20%;
                .c-l
                    flex: 5;
                    width: 80%;
                    .s-c, .e-c
                        display: flex;
                    span
                        display: inline-block;
                        height: 4rem;
                        line-height: 4rem;
                    .cLabel
                        width: 20%;   
                    .cVal
                        padding: 0 0.5rem;
                        text-align: left;
                        font-size: 1.5rem;
                        width: 80%;
                        border-bottom: 1px solid #E8E8E8;
        .some-tips
            display: flex;
            .tip
                flex: 1;
                height: 4rem;
</style>