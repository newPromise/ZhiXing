<template>
  <div id="app">
    <router-view class='main-view'></router-view>
    <bottom-bar v-show="botShow"></bottom-bar>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
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
  computed: {
    getAllCitys () {
      console.log('dsd', this.hotelCity);
      return this.setIndexcity(this.hotelCity);
    },
    ...mapState(['hotelPro', 'hotelCity', 'indexCity'])
  },
  watch: {
    '$route.path': function (val) {
      let arr = ['searchMain'];
      this.botShow = arr.some((item) => {
        return ~val.indexOf(item);
      });
    }
  },
  methods: {
    ...mapActions(['getHotelpro', 'getHotelcity', 'setIndexcity', 'getHoteldet'])
  },
  mounted () {
    this.getHotelpro();
    this.getAllCitys();
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
