<template>
    <div class="common-header">
    <div class="header" :style="{background: baccolor, color: color}">
        <div class="left">
            <slot name="left">
                <span @click="$router.go(-1)"><i class="iconfont icon-jiantou-copy-copy1"></i></span>
            </slot>
        </div>
        <div class="title">
            <slot name="title"><span>{{title}}</span></slot>
        </div>
        <div class="right">
            <slot name= "right" v-if="hasRight">
                <span>右边</span>
            </slot>
        </div>
    </div>
    <div class="clear"></div>
</div>
</template>
<script type="text/javascript">
    export default {
      name: 'header',
      props: {
        backRoute: {
          type: String
        },
        title: {
          type: String,
          default: 'ds'
        },
        baccolor: {
          type: String,
          default: '#5495E6'
        },
        color: {
          type: String,
          default: 'white'
        },
        hasRight: {
          type: Boolean,
          default: false
        }
      },
      data () {
        return {
          title: ''
        };
      },
      methods: {
      },
      mounted () {
      }
    };
</script>
<style type="text/css" lang="stylus" scoped>
.common-header
    .header
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        display: flex;
        padding: 0 1rem;
        div
            flex: 1;
            span
                font-size: 1.2rem;
                display: inline-block;
                height: 4rem;
                line-height: 4rem;
                text-align: center;
        .left
                text-align: left;
        .right
          
                text-align: right;
        .title
          flex: 2;        
    .clear
        height: 4rem;                            
</style>