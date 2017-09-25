<template>
    <div class='all-citys'>
        <div class='city-head'>
            <div class='head-act'>
                <div class='back' @click='goBack()' ><span>上一级</span></div>
                <div class='tip'>
                    <span >出发站</span>
                    <span >到达站</span>
                </div>
                <div class='ensure' @click='ensure()'>
                    <span>确定</span>
                </div>
            </div>
            <div class='city-input'>
                <input ref='sta' id='start' @blur='togInput($event)' v-model='startCity'  class='start-city' >
                <input ref='end' id='end' @blur='togInput($event)' v-model='endCity' class='end-city'>
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
    import { mapActions, mapState } from 'vuex';
    export default {
      name: 'allCitys',
      data () {
        return {
          citys: [],
          selCity: '',
          inputTy: '',
          startCity: '',
          endCity: '',
          // lastPath 用来进行保存上级路由的地址
          lastPath: ''
        };
      },
      computed: {
        ...mapState(['city'])
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
          } else {
            this.endCity = event.target.innerHTML;
            if (this.startCity === '') {
              this.$refs.sta.focus();
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
              break;
            case 'end':
              this.inputTy = 'e';
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
<style type="text/css" lang='stylus'>
.all-citys
    padding: 0;
    .city-head
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: skyblue;
        height: 6rem;
        .head-act
            height: 50%;
            display: flex;
            align-items: middle;
            div
                flex: 1;
                display: table-cell;
                  
            .tip
                flex: 3
        .city-input
            margin: 0.5rem;
            input
              width: 5rem;  
              height: 2.2rem;
              &:hover 
                width: 8rem;
    .city-list,.letterBar
        margin-top: 6rem;
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
