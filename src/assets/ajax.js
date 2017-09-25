import axios from 'axios';
// import qs from 'qs'
import Vue from 'vue';

Vue.prototype.$get = (obj) => {
  let getConfig = {
    params: obj.params
    // headers: {'Authorization': 'APPCODE a3e1c5728d1b44ebb7cef8ef52b7ee51'}
  };
  axios.get(obj.url, getConfig).then(function (responce) {
    obj.success(responce.data);
  });
};

Vue.prototype.$post = (obj) => {
  let postConfig = {
    data: obj.params
  };
  axios.post(obj.url, postConfig).then(function (responce) {
    obj.success(responce);
  });
};
