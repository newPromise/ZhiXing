<template>
    <div class="siteTys">
        <header-top  backRoute = '/watchSet' baccolor="white" color="black" title="坐席类型" hasRight = true>
            <span slot="right" @click="sitEnsure">确定</span>
        </header-top>
        <mt-checklist
        align="left"
        v-model="value"
        :options="tys">
</mt-checklist>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    import {mapState, mapActions} from 'vuex';
    import {Toast} from 'mint-ui';
    export default {
      name: 'siteTys',
      components: {
        headerTop
      },
      data () {
        return {
          value: [],
          tys: [
            '全部类型',
            '硬座',
            '硬卧',
            '软卧',
            '二等座',
            '一等座',
            '商务座',
            '特等坐',
            '无座',
            '软座',
            '高级软卧',
            '动卧',
            '高级动卧',
            '其他'
          ]
        };
      },
      computed: {
        ...mapState(['siteTys'])
      },
      watch: {
        'value': function (val) {
          if (val) {
            if (val.indexOf('全部类型') >= 0) {
              this.value = this.tys;
              return;
            }
            if (val.indexOf('全部类型') === -1) {
              if (this.value.length === this.tys.length - 1) {
                this.value = [];
              }
            }
          };
        }
      },
      methods: {
        sitEnsure () {
          if (this.value.length) {
            this.setSiteTys(this.value);
            this.$router.push('/watchSet');
          } else {
            Toast({
              message: '请选择坐席类型',
              duration: 3000
            });
          }
        },
        ...mapActions(['setSiteTys'])
      },
      mounted () {
        this.value = this.siteTys;
      }
    };
</script>
<style type="text/css" lang="stylus">
    .mint-checklist
        text-align: left;
</style>
