<template>
    <div class="orderIndex">
        <div class="header">
            <span>全部订单</span>
        </div>
        <div class="topnav">
            <div class="nav-list" v-for="item of navLabel">
                <span>{{item.title}}</span>
            </div>
        </div>
        <div class="order-cell">
            <mt-cell v-for="ord of orders" :title="ord.title" :to="ord.route" is-link></mt-cell>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
      name: 'orderIndex',
      data () {
        return {
          navLabel: [
          {icon: '', title: '火车票'},
          {icon: '', title: '机票'},
          {icon: '', title: '汽车票'},
          {icon: '', title: '酒店'}
          ],
          orders: [
          {title: '用户订单', route: ''},
          {title: '船票订单', route: ''},
          {title: '门票订单', route: ''}
          ]
        };
      }
    };
</script>
<style type="text/css" lang="stylus">
    .orderIndex
        .header
            height: 4rem;
            text-align: center;
            line-height: 4rem;
            background: #3C7DCE;
            color: white;
            font-size: 1.3rem;
        .topnav
            background: white;
            padding: 1rem;
            margin: 1rem 0;
            width: 100%;
            overflow: hidden;
            .nav-list
                width: 25%;
                height: 4rem;
                line-height: 4rem;
                float: left;
        .mint-cell-title
            text-align: left !important;        
</style>