<template>
<div class='search-main'>
    <div class='search-head'>
        <router-link v-for='link of links' :to='link.path' :key='link' @click="togContent(index)">
            {{link.name}}
        </router-link>
    </div>
      <router-view class='search-view'></router-view>
</div>
</template>
<script type="text/javascript">
    export default {
      name: 'searchMain',
      data () {
        return {
          links: [
            {name: '火车票', path: 'train'},
            {name: '飞机票', path: 'plane'},
            {name: '汽车票', path: 'bus'},
            {name: '酒店', path: 'hotel'}
          ],
          actIndex: '',
          showVisible: true
        };
      },
      watch: {
        '$route.path': function (val) {
          this.showVisible = !this.showVisible;
          console.log('val', val);
        }
      },
      methods: {
        togContent (index) {
          alert();
          console.log('是否正确', this.showVisible);
          this.actIndex = index;
        }
      },
      mounted: {
      }
    };
</script>
<style  rel='styleSheet' lang='stylus'>
    .search-main
        .search-head
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4rem;
            background-color: #1F74DF;
            padding: 0 0.5rem;;
            a

                color: #FFFFFF;
                text-align: none;
                display: inline-block;
                width: 25%;
                height: 4rem;
                line-height: 4rem;
        .search-view
            margin-top: 60px;              
</style>
