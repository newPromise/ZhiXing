<template>
    <div class="trainNoRes">
        <div class="res-header">
            <header-top baccolor="white" color="black" :title="searchno"></header-top>
            <div class="tip-bar">
                <div class="bar-name">
                    <span class="site-name">车站名称</span>
                    <span class="come-time">到时</span>
                    <span class="go-time">发时</span>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="res-content">
            <div class="site-lists">
                <div class="site-item" v-for="site of lineRes.list">
                    <span class="site-name">{{site.station}}</span>
                    <span class="come-time">{{site.arrivaltime}}</span>
                    <span class="go-time">{{site.departuretime}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapState} from 'vuex';
    export default {
      name: 'trainNoRes',
      components: {
        headerTop
      },
      computed: {
        ...mapState(['searchno', 'lineRes'])
      },
      data () {
        return {
        };
      },
      methods: {
      },
      mounted () {
        console.log('车次信息', this.lineRes);
      }
    };
</script>
<style type="text/css" lang="stylus">
    .trainNoRes
        background: white;
        .tip-bar,.site-lists
            padding: 0 2rem
        .res-header, .res-content
            .bar-name, .site-item
                display: flex;
                span
                    flex:1;
                .site-name
                    flex: 2;
                    text-align: left;    
        .res-header
            .tip-bar
                position: fixed;
                left: 0;
                right: 0;
                top: 4rem;
                overflow: hidden;
                background: #B7BFD5;
            .bar-name
                span
                    height: 3rem;
                    line-height: 3rem;
        .res-content
            height: 100%;
            margin-top: 3rem;
            background: white;
            .site-item
                border-bottom: 1px solid lightgray;
                span
                    height: 4rem;
                    line-height: 4rem;                   
</style>
