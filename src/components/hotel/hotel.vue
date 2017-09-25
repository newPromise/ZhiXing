<template>
    <div class="hotel">
        <div class="search-list">
            <div class="local">
                <span v-text="location"></span>
                <span></span>
            </div>
            <div class="time">
                <p class="timeLabel">
                    <span>入住</span>
                    <span>离店</span>
                </p>
                <p class="date">
                    <span class="s-d">9月15号</span>
                    <span class="nightNum">1玩</span>
                    <span class="e-d">9月16号</span>
                </p>
            </div>
            <div class="keyWord">
                <span  :class="{'active' : !keyWords }"  v-text="keyWords || '关键字/位置/品牌/酒店名' "></span>
            </div>
            <div class="star">
                <span  :class="{'active' : !star}" v-text="star || '价格/星级' "></span>
            </div>
            <div class="search">
            <button class="searchBtn">查询</button>
        </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
      data () {
        return {
          keyWords: '',
          star: '',
          location: '张宁宁'
        };
      },
      methods: {
      },
      mounted () {
      }
    };
</script>
<style type="text/css" lang="stylus">
    .hotel
        .search-list
            background: white;
            padding: 0 1rem;
            >div
                border-bottom: 1px solid #F2F2F2;
        .local,.keyWord,.star
            width: 100%;
            height: 4rem;
            display: flex;
            line-height: 4rem;
        .keyWord,.star
            text-align: left;
        .time
            >p
                height: 2rem;
            .timeLabel
                width: 100%;
                display: flex;
                justify-content: space-between;
                span
                    color: darkgray;
                    line-height: 2rem;
                    flex: 1;
                    text-align: left;
                span:last-child
                     text-align: right;            
            .date
                width: 100%;
                display: flex;
                span
                    font-size: 1.4rem;
                    flex: 2;
                .s-d
                    text-align: left;
                .e-d
                    text-align: right;
        .active
            font-size: 1.3rem;
            color: darkgray;              
</style>