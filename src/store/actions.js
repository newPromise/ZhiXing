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
      date: params.date,
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
    Indicator.open('正在查询');
    obj.params = {
      trainno: params.trainno,
      appkey: '3cf7ad9107df44c9',
      appsecret: '7Iq25fL9BuX6xiNoMnTcQ85TAD8IrZEW'
    };
    obj.success = res => {
      commit('getLineRes', res.result);
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
  setSearchno: ({commit}, newVal) => {
    commit('setSearchno', newVal);
  }
};

export { actions };
