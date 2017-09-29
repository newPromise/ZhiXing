<template>
    <div class="addNew">
        <header-top  baccolor="white" color="black" title="选择乘客"></header-top>
        <div class="add" @click="popVisible = true">
            <span>新增乘客</span>
        </div>
        <mt-popup v-model = 'popVisible'  position="right" modal = "">
            <header-top title="新增乘客信息" baccolor="white" color="black">
                <div slot="left">
                    <span @click="popVisible = false">返回</span>
                </div>
            </header-top>
            <mt-cell :title="cardTy" is-link>
                <span>你好</span>
            </mt-cell>
            <div class="name">
                <label>乘客姓名</label><input placeholder="请输入姓名">
            </div>
            <div class="card-type">
                <label>证件类型</label><input placeholder="请输入姓名">
            </div>
            <div class="card-no">
                <label>证件号码</label><input placeholder="请输入姓名">
            </div>
            <div class="name">
                <label>乘客姓名</label><input placeholder="请输入姓名">
            </div>
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    // import {mapActions, mapState} from 'vuex';
    export default {
      name: 'addNew',
      components: {
        headerTop
      },
      data () {
        return {
          popVisible: false,
          cardTy: '购票类型' + ' 成人票'
        };
      },
      methods: {
      },
      mounted () {
      }
    };
</script>
<style type="text/css" lang="stylus" scoped>
    .addNew
        .add
            width: 100%;
            margin:  1rem 0;
            background: white;
            color: #5495E6;
            text-align: center;
            line-height: 4rem;
            height: 4rem;    
        .mint-popup-right
            width: 100%;
            height: 100%;
            input
                padding-left: 1rem;
                outline: none;
                border: 0;
            .name,.card-type, .card-no
                padding: 0 1rem;
                text-align: left;
                height: 4rem;
                line-height: 4rem;    
</style>
