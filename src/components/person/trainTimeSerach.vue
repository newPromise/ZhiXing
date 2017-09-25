<template>
    <div class="trainTimeSearch">
        <header-top title="车次/正晚点查询"></header-top>
        <div class="content">
            <div class="trainno" @click="togPop">
                <mt-field readonly = 'true' label="车次号"   placeholder="如: G101" v-model="trainno"></mt-field>
            </div>
            <div class="date">
                 <mt-field label="出发日期"   v-model="date"></mt-field>
            </div>
        </div>
        <div class="search">
            <button class="searchBtn" @click="toSearch">查询</button>
        </div>
        <mt-popup
            v-model="popupVisible"
            modal = ''
            position="bottom">
            <div class="input-box">
                <div class="trainTy">
                    <div class="ty-fir">
                        <span class="ty" @click="inputNo(true)" v-for="ty of tyFir">{{ty}}</span>
                    </div>
                    <div class="ty-sec">
                        <span class="ty" @click="inputNo(true)" v-for="ty of tySec">{{ty}}</span>
                    </div>
                </div>
                <div class="nums">
                    <span class="num" @click="inputNo(false)" v-for="num of nums1">{{num}}</span><span class="num" @click="popupVisible = false">隐藏</span>
                    <span class="num" @click="inputNo(false)" v-for="num of nums2">{{num}}</span>
                    <span class="num" v-for="num of nums3">{{num}}</span><span @click="trainno = trainno.substring(trainno.length - 1, 0)" class="num">删除</span>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapActions, mapState} from 'vuex';
    export default {
      name: 'trainTimeSearch',
      components: {
        headerTop
      },
      data () {
        return {
          trainno: '',
          date: '9月28号',
          popupVisible: true,
          tyFir: ['G高铁', 'D动车', 'C城际', 'L临客'],
          tySec: ['Z直达', 'T特快', 'K快速', 'Y旅游'],
          nums1: ['1', '2', '3'],
          nums2: ['4', '5', '6', '0'],
          nums3: ['7', '8', '9']
        };
      },
      computed: {
        ...mapState(['lineRes'])
      },
      watch: {
        'lineRes': function (val) {
          if (val) {
            this.$router.push('/');
          } else {
          }
        }
      },
      methods: {
        togPop () {
          console.log('yess');
          this.popupVisible = !this.popupVisible;
        },
        inputNo (isNo) {
          if (isNo) {
            this.trainno = event.target.innerHTML.slice(0, 1);
          } else {
            this.trainno = this.trainno + event.target.innerHTML;
          }
        },
        toSearch () {
          this.popupVisible = false;
          this.getLineRes({trainno: this.trainno});
          console.log('车次信息', this.lineRes);
        },
        ...mapActions(['getLineRes'])
      },
      mounted () {
      }
    };
</script>
<style type="text/css" lang="stylus">
    .search
        padding: 0 1rem;
    .mint-popup
       width: 100%;     
       .input-box
           width: 100%;
           .ty-fir, .ty-sec
               display: flex;
               background: #F4F4F4;
               .ty
                   flex: 1;
                   height: 2rem;
                   margin: 0.2rem;
                   background: white;
                   line-height: 2rem;
            .nums
                width: 100%;
                .num
                    display: inline-block;
                    width: 25%;
                    height: 3rem;
                    line-height: 3rem;
                    border-bottom: 1px solid #E2E2E2;
                    border-right: 1px solid #E2E2E2;
                    font-size: 1.3rem;
                    color: black;
                           
               
</style>
