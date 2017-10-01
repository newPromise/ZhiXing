<template>
    <div class='all-citys'>
        <div class='city-head'>
            <div class='head-act'>
               <header-top :title="title"  hasRight>
                 <div slot="right">
                   <span>确定</span>
                 </div>
               </header-top>
            </div>
            <div class='city-input'>
                <input ref='sta'  :class="{'active': inputTy === 's'}" id='start' @click='togInput($event)' v-model='startCity'  class='start-city' ><input ref='end'  :class="{'active': inputTy === 'e'}" id='end' @click='togInput($event)' v-model='endCity' class='end-city'>
            </div>
        </div>
        <div class='city-body'>
          <div class='city-list'>
          <span @click='selectCity($event)' class='city' v-for='ci of citys'>{{ci}}</span>
          </div>
          <div class="letterBar"></div>
        </div>
    </div>
</template>
<script>
    // 通过使用  vuex 语法将状态进行集中管理
    import headerTop from './header';
    import { mapActions, mapState } from 'vuex';
    export default {
      name: 'allCitys',
      data () {
        return {
          title: '出发站',
          citys: [],
          selCity: '',
          inputTy: 's',
          startCity: '',
          endCity: '',
          // lastPath 用来进行保存上级路由的地址
          lastPath: ''
        };
      },
      computed: {
        ...mapState(['city'])
      },
      components: {
        headerTop
      },
      methods: {
        ensure () {
          if (!this.startCity || !this.endCity) {
          } else {
            this.setCity({startCity: this.startCity, endCity: this.endCity});
            this.goBack();
          }
        },
        goBack () {
          // 使用this.$router 进行改变路由信息
          this.$router.push(this.lastPath);
        },
        // selectCity: 用来点击城市选择城市
        // 通过使用 inputSty 用来判断刚刚失去焦点的是出发城市还是结束城市
        // 在将选中的内容读取到输入框之后，进行焦点动作和接下来的动作
        selectCity (event) {
          if (this.inputTy === 's') {
            this.startCity = event.target.innerHTML;
            this.$refs.end.focus();
            this.inputTy = 'e';
          } else {
            this.endCity = event.target.innerHTML;
            if (this.startCity === '') {
              this.$refs.sta.focus();
              this.inputTy = 's';
            } else {
              this.setCity({startCity: this.startCity, endCity: this.endCity});
              this.goBack();
            }
          }
        },
        togInput (event) {
          event = event.target;
          switch (event.id) {
            case 'start':
              this.inputTy = 's';
              this.title = '出发站';
              break;
            case 'end':
              this.inputTy = 'e';
              this.title = '到达站';
              break;
          }
        },
        getPro () {
          let obj = {url: 'api/area/province'};
          obj.params = {
            appkey: '3cf7ad9107df44c9'
          };
          obj.success = res => {
            res.result.length = res.result.length - 1;
            let china = res.result;
            china.map((item) => {
              this.getCitys(item.id);
            });
          };
          this.$get(obj);
        },
        getCitys (id) {
          let obj = {url: 'api/area/city'};
          obj.params = {
            appkey: '3cf7ad9107df44c9',
            parentid: id
          };
          obj.success = res => {
            res.result.map((item) => {
              this.citys.push(item.name);
            });
          };
          this.$get(obj);
        },
        ...mapActions(['setCity'])
      },
      beforeRouteEnter (to, from, next) {
        next(vm => {
          vm.lastPath = from.fullPath;
        });
      },
      mounted () {
        this.getPro();
        this.$refs.sta.focus();
        this.startCity = this.city.startCity;
        this.endCity = this.city.endCity;
      }
    };
</script>
<style type="text/css" lang='stylus' scoped>
.all-citys
    padding: 0;
    .city-head
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: skyblue;
        height: 6rem;
        .city-input
            padding: 1rem;
            width: 100%;
            background: #5495E6;
            input
              height: 2.6rem;
              border-radius: 3px;
              padding: 1rem;
              width: 30%;
              margin-right: 1rem;
            .active
              width: 60%;  
    .city-list,.letterBar
        margin-top: 8rem;
        .city
           background-color: white;
           font-size: 1.5rem; 
           display: inline-block;
           height: 4rem;
           line-height: 4rem;
           width: 33%;
           text-align: center;
           border-bottom: 1px solid #EFE8E8;                    
                   
</style>
