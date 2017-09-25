<template>
  <div class="hello">
    <input type='text' placeholder='请输入手机号' v-model='phone' @blur='sendData'>
    <p>您的手机号码归属地是{{city}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      city: '',
      phone: '',
      allTrains: ''
    };
  },
  methods: {
    sendData () {
      let obj = {url: 'api/train/station2s'};
      obj.params = {
        appkey: '3cf7ad9107df44c9',
        start: '厦门',
        end: '上海'
      };
      // 这里类似于执行函数
      obj.success = res => {
        this.allTrains = res.result;
        console.log(res.result);
      };
      this.$get(obj);
    }
  },
  mounted () {
    this.sendData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
