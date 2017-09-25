<template>
  <div id="app">
    <router-view class='main-view'></router-view>
    <bottom-bar v-if=""></bottom-bar>
  </div>
</template>

<script>
import bottomBar from '@/components/common/bottomBar';
export default {
  name: 'app',
  components: {
    bottomBar
  },
  data () {
    return {
      botShow: true
    };
  },
  watch: {
    '$route.path': function (val) {
      let arr = ['searchMain'];
      this.botShow = arr.some((item) => {
        return ~val.indexOf(item);
      });
    }
  }
};
</script>

<style lang='stylus'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mint-cell-title 
            text-align: left;

</style>
