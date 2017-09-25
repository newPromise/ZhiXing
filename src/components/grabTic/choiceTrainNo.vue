<template>
    <div class="choiceTrain">
        <header-top  backRoute = '/watchSet' baccolor="white" color="black" title="选择车次" hasRight = true>
            <span slot="right" @click="ChoiceEnsure">确定</span>
        </header-top>
        <div class="main">
            <div class="numbers">
                <div class="item-left">
                    <mt-checklist
                align="left"
                v-model="value"
                :options="tys">
                </mt-checklist>
                </div>
                <div class="item-rig">
                    <div class="det-left">
                      <p>中国</p>
                      <p>下面</p>
                      <p>行走</p>
                    </div>
                    <div class="det-mid">
                      <p>北京虹桥</p>
                      <p>上海南</p>
                      <p>商务座</p>
                    </div>
                    <div class="det-rig">
                      <p>G104</p>
                      <p>05小时38分</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapActions, mapState} from 'vuex';
    export default {
      name: 'choiceTrainNo',
      components: {
        headerTop
      },
      data () {
        return {
          value: [],
          tys: [
            '1'
          ]
        };
      },
      computed: {
        ...mapState(['lineRes'])
      },
      methods: {
        ChoiceEnsure () {
        },
        ...mapActions(['getLineRes'])
      },
      mounted () {

      }
    };
</script>
<style type="text/css" lang="stylus">
    .choiceTrain
        .main
            .numbers
                padding: 1rem;
                padding-left: 0;
                background: white;
                display: flex;
                border: 1px solid gray;
                .item-left,.item-rig
                  flex: 1;
                .item-rig
                    flex: 3;
                    display: flex;
                    >div
                      flex: 1;
                  .det-mid
                    p
                      text-align: center;
                  .det-rig
                    p
                      text-align: right;            
            .mint-checklist-title
                margin: 0;    
                >div
                    flex: 1;
                    
                      
</style>
