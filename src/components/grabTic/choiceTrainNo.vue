<template>
    <div class="choiceTrain">
        <header-top  backRoute = '/watchSet' baccolor="white" color="black" title="选择车次" hasRight = true>
            <span slot="right" @click="ChoiceEnsure">确定</span>
        </header-top>
        <div class="main">
          <div class="allSites numbers">
            <div class="item-left">
              <mt-checklist
              align="left"
              v-model="isSelall"
              :options="[true]"
              >
              </mt-checklist>
            </div>
            <div class="item-rig">
              全部车次 ({{ticketRes.length}}列)
              已选车次 ({{value.length}})
              {{isSelall}}
            </div>
          </div>
            <div class="numbers" v-for="train of trainTickes">
                <div class="item-left">
                    <mt-checklist

                align="left"
                v-model="value"
                :options="[train.trainno]">
                </mt-checklist>
                </div>
                <div class="item-rig">
                    <div class="det-left">
                      <p class="starttime">{{train.starttime}}</p>
                      <p class="endtime">{{train.endtime}}</p>
                    </div>
                    <div class="det-mid">
                      <p>{{train.departstation}}</p>
                      <p>{{train.endstation}}</p>
                    </div>
                    <div class="det-rig">
                      <p class="trainno">{{train.trainno}}</p>
                      <p>{{train.costtime.split(':')[0]}}小时{{train.costtime.split(':')[1]}}</p>
                    </div>
                </div>
            </div>
        </div>
        <train-filter :allTrains.sync="ticketRes" class="filter"></train-filter>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapActions, mapState} from 'vuex';
    import trainFilter from '../common/trainFilter';
    export default {
      name: 'choiceTrainNo',
      components: {
        headerTop,
        trainFilter
      },
      data () {
        return {
          value: [],
          tys: [
            '1'
          ],
          trainTickes: '',
          trainNums: [],
          numberArr: [],
          isSelall: ''
        };
      },
      watch: {
        isSelall: function (val) {
          if (val) {
            this.value = this.numberArr;
          } else {
            this.value = [];
          }
        },
        ticketRes: function (val) {
          // this.trainTickes = val;
          val.map((item, index) => {
            if (this.numberArr.indexOf(item.trainno) === -1) {
              this.numberArr.push(item.trainno);
            }
          });
          console.log('响应了吗');
          console.log(val, this.numberArr);
        }
      },
      computed: {
        getTicks: (type) => {
          this.trainNums.push(type);
          return '2';
        },
        ...mapState(['lineRes', 'ticketRes', 'viewTrano'])
      },
      methods: {
        getAllnums () {
          this.trainTickes.map((item, index) => {
            if (this.numberArr.indexOf(item.trainno) === -1) {
              this.numberArr.push(item.trainno);
            }
          });
        },
        ChoiceEnsure () {
          this.$router.back(-1);
          this.setViewTrano(this.value);
        },
        ...mapActions(['getLineRes', 'setViewTrano'])
      },
      mounted () {
        this.trainTickes = this.ticketRes;
        this.getAllnums();
        this.value = this.viewTrano;
        console.log(this.ticketRes);
      }
    };
</script>
<style type="text/css" lang="stylus" >
    .choiceTrain
        .main
            .numbers
                padding: 1rem;
                padding-left: 0;
                background: white;
                display: flex;
                border: 1px solid gray;
                p
                  height: 2rem;
                  line-height: 2rem;
                .item-left,.item-rig
                  flex: 1;
                .item-rig
                    flex: 3;
                    display: flex;
                    >div
                      flex: 1;
                  .det-left, .det-mid
                    p
                      text-align: left;    
                  .det-mid
                    p
                      font-size: 1.2rem;
                  .det-rig
                    p
                      font-size: 1.3rem;
                      text-align: right;
                  .trainno,.starttime
                    font-weight: bold;
                    color: #5495E6;
                  .starttime
                    font-size: 1.5rem;
                     
            .mint-checklist-title
                margin: 0;    
                >div
                    flex: 1;
              .mint-checkbox-label
                display: none;    
            .mint-cell-wrapper, .mint-cell
              background-image: none;
                          
        
                      
</style>
