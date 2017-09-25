<template>
    <div class="outer-service">
        <header-top title="旅行服务"></header-top>
        <div class="content">
            <div class="item-one">
            <mt-cell title="时刻表" value="正晚点查询" to="/trainTimeSearch" is-link></mt-cell>
        </div>
        <div class="item-two">
            <mt-cell  v-for="item of itemTwo"  :title="item.title"  :value="item.value" is-link></mt-cell>
        </div>
        <div class="item-there">
            <mt-cell  v-for="item of itemThere"  :title="item.title"  :value="item.value" is-link></mt-cell>
        </div>
        <div class="item-four">
            <mt-cell  v-for="item of itemFour"  :title="item.title"  :value="item.value" is-link></mt-cell>
        </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import headerTop from '../common/header';
    export default {
      name: 'outerService',
      components: {
        headerTop
      },
      data () {
        return {
          itemTwo: [
            {title: '高铁订餐', icon: '', value: '', to: ''},
            {title: '特价机票', icon: '', value: '智行特惠', to: ''},
            {title: '特价酒店', icon: '', value: '智行特惠', to: ''},
            {title: '理财推荐', icon: '', value: '', to: ''}
          ],
          itemThere: [
            {title: '拼车接站/机', icon: '', value: '5元接您到家', to: ''},
            {title: '船票预定', icon: '', value: '', to: ''},
            {title: '专车接送站', icon: '', value: '', to: ''},
            {title: '门票玩乐', icon: '', value: '', to: ''},
            {title: '自驾出租', icon: '', value: '', to: ''}
          ],
          itemFour: [
            {title: '快速办理信用卡', icon: '', value: '', to: ''},
            {title: '免费领取摩拜骑行月卡', icon: '', value: '', to: ''}
          ]
        };
      },
      methods: {
      },
      mounted () {
      }
    };
</script>
<style type="text/css" lang="stylus">
    .outer-service
        .content
            .item-one, .item-two, .item-there,.item-four
                margin-top: 1rem;
</style>
