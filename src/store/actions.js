import Vue from 'vue';
var vue = new Vue(); // 为什么使用这种方法获得
import { Indicator, Toast } from 'mint-ui';
const actions = {
  setCity: ({commit}, newVal) => {
    commit('setCity', newVal);
  },
  setDate: ({commit}, newVal) => {
    commit('setDate', newVal);
  },
  setTrainRes: ({commit}, newVal) => {
    commit('setTrainRes', newVal);
  },
  setStationRes: ({commit}, newVal) => {
    commit('setStationRes', newVal);
  },
  setLineRes: ({commit}, newVal) => {
    commit('setLineRes', newVal);
  },
  setSiteTys: ({commit}, newVal) => {
    commit('setSiteTys', newVal);
  },
  setGrabTicks: ({commit}, newVal) => {
    commit('setGrabTicks', newVal);
  },
  setLoginMsg: ({commit}, newVal) => {
    commit('setLoginMsg', newVal);
  },
  // 火车票余票查询
  getTicketRes: ({commit}, params) => {
    let obj = {url: 'api/train/ticket'};
    obj.params = {
      start: params.start,
      end: params.end,
      date: params.date || '2017-10-5',
      appkey: '3cf7ad9107df44c9',
      appsecret: '7Iq25fL9BuX6xiNoMnTcQ85TAD8IrZEW'
    };
    obj.success = res => {
      console.log('获得到了', res.result);
      commit('getTicketRes', res.result);
    };
    vue.$get(obj);
  },
  // 火车票站站查询
  getStationRes: ({commit}, params) => {
    let obj = {url: 'api/train/station2s'};
    obj.params = {
      start: params.start,
      end: params.end,
      ishigh: params.ishigh,
      appkey: '3cf7ad9107df44c9',
      appsecret: '7Iq25fL9BuX6xiNoMnTcQ85TAD8IrZEW'
    };
    obj.success = res => {
      commit('getStationRes', res.result);
    };
    vue.$get(obj);
  },
  // 火车票车次查询数据
  getLineRes: ({commit}, params) => {
    let obj = {url: 'api/train/line'};
    // Indicator.open('正在查询');
    obj.params = {
      trainno: params.trainno,
      appkey: '3cf7ad9107df44c9',
      appsecret: '7Iq25fL9BuX6xiNoMnTcQ85TAD8IrZEW'
    };
    obj.success = res => {
      commit('getLineRes', res.result);
      console.log('查询车次成功信息', res.result);
      /**
      if (res.result === '') {
        Toast({
          message: '没有查询到车次信息',
          position: 'bottom',
          duration: 2000
        });
      }
      Indicator.close();
      **/
    };
    vue.$get(obj);
  },
  // 汽车站站线路查询
  getBusline: ({commit}, params) => {
    let obj = {url: 'api/bus/city2c'};
    Indicator.open('正在查询汽车线路');
    obj.params = {
      start: params.start,
      end: params.end,
      appkey: '3cf7ad9107df44c9',
      appsecret: '7Iq25fL9BuX6xiNoMnTcQ85TAD8IrZEW'
    };
    obj.success = res => {
      commit('getBusline', res.result);
      if (res.result === '') {
        Toast({
          message: '没有查询到车次信息',
          position: 'bottom',
          duration: 2000
        });
      }
      Indicator.close();
    };
    vue.$get(obj);
    commit('getBusline', '');
  },
  // 汽车城市站点查询
  getBussite: ({commit}, params) => {
    let obj = {url: 'api/bus/station'};
    obj.params = {
      city: params.city,
      appkey: '3cf7ad9107df44c9',
      appsecret: '7Iq25fL9BuX6xiNoMnTcQ85TAD8IrZEW'
    };
    obj.success = res => {
      commit('getBussite', res.result);
    };
    vue.$get(obj);
    commit('getBussite', '');
  },
  setSearchno: ({commit}, newVal) => {
    commit('setSearchno', newVal);
  },
  setChoiceline: ({commit}, newVal) => {
    commit('setChoiceline', newVal);
  },
  setPassenger: ({commit}, newVal) => {
    console.log('newVal', newVal);
    commit('setBuspassenger', newVal);
  },
  // 设置汽车订单
  setBusorder: ({commit}, newVal) => {
    commit('setBusorder', newVal);
  },
  setBusallorders: ({commit}, newVal) => {
    commit('setBusallorders', newVal);
  },
  delBusallorders: ({commit}, newVal) => {
    commit('delBusallorders', newVal);
  },
  // 获取到各个省份的酒店
  getProhotel: ({commit}) => {
    let obj = { url: '' };
    obj.params = {
      showapi_sign: '4e1311ce4fd04c7bb8c75c49fb75ed71',
      showapi_appid: 47232
    };
    obj.success = res => {
      commit('proHotel', res.result);
    };
    vue.$get(obj);
  },
  // 存放搜索酒店的信息
  setHoteldata: ({commit}, newVal) => {
    commit('setHoteldata', newVal);
  },
  // 查询相关的酒店省份id
  getHotelpro: ({commit}) => {
    vue.$http.get('http://route.showapi.com/405-1', {params: {showapi_sign: '4e1311ce4fd04c7bb8c75c49fb75ed71', showapi_appid: '47232'}}).then(response => {
      commit('setHotelpro', response.body.showapi_res_body.list);
      let pros = response.body.showapi_res_body.list;
      console.log('pros', pros[0].id);
      let i = 0;
      console.log(Vue.$state);
      let timer = setInterval(() => {
        if (pros[i]) {
          this.a.getHotelcity({commit}, pros[i].id);
        }
        console.log(i);
        i++;
        if (i > pros.length) {
          clearInterval(timer);
          // commit('setIndexcity', )
        }
      }, 1000);
      timer;
    }, response => {});
  },
  // 根据省份 id 得到省份市
  getHotelcity: ({commit}, proId) => {
    vue.$http.get('http://route.showapi.com/405-3', {params: {provinceId: proId, showapi_sign: '4e1311ce4fd04c7bb8c75c49fb75ed71', showapi_appid: '47232'}}).then(response => {
      let lists = response.body.showapi_res_body.list;
      commit('setHotelcity', lists);
    }, response => {});
  },
  setIndexcity: ({commit}, cityArr) => {
    commit('setIndexcity', cityArr);
  },
  setHotelSelc: ({commit}, newVal) => {
    commit('setHotelSelc', newVal);
  },
  // getHoteldet 用于获得酒店的详细信息
  getHoteldet: ({commit}, queryParams) => {
    // Indicator.open('正在查询所有酒店');
    vue.$http.get('http://route.showapi.com/405-5', {params: {...queryParams, showapi_sign: '4e1311ce4fd04c7bb8c75c49fb75ed71', showapi_appid: '47232'}}).then(response => {
      console.log('response', response.body.showapi_res_body.list);
      commit('setHoteldet', response.body.showapi_res_body.list);
      // Indicator.close();
    }, response => {
      this.Toast('bad');
    });
  },
  setHotelitem: ({commit}, newVal) => {
    commit('setHotelitem', newVal);
  },
  // 根据酒店id 查询酒店价格相关信息
  getHotelPriceSearch: ({commit}, hotelId) => {
    // Indicator.open('正在查询酒店信息');
    vue.$http.get('http://route.showapi.com/405-8', {params: {hotelId: hotelId, comeDate: '20171018', leaveDate: '20171020', showapi_sign: '4e1311ce4fd04c7bb8c75c49fb75ed71', showapi_appid: '47232'}}).then(response => {
      commit('setHotelPriceSearch', response.body.showapi_res_body.list);
      // Indicator.close();
    }, response => {
    });
  }
};

export { actions };
