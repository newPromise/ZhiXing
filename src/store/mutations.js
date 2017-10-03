const mutations = {
  setCity (state, newCity) {
    state.city.startCity = newCity.startCity;
    state.city.endCity = newCity.endCity;
  },
  setDate (state, newDate) {
    state.selDate = newDate;
  },
  setTrainRes (state, newVal) {
    state.trainRes = newVal;
  },
  setStationRes (state, newVal) {
    state.stationRes = newVal;
  },
  setLineRes (state, newVal) {
    state.lineRes = newVal;
  },
  setSiteTys (state, newVal) {
    state.siteTys = newVal;
  },
  setGrabTicks (state, newVal) {
    state.grabTicks = newVal;
  },
  setLoginMsg (state, newVal) {
    state.loginMsg = newVal;
  },
  getTicketRes (state, newVal) {
    state.ticketRes = newVal;
  },
  getStationRes (state, newVal) {
    state.stationRes = newVal;
    console.log('我被存上了', newVal);
  },
  getLineRes (state, newVal) {
    state.lineRes = newVal;
  },
  setSearchno (state, newVal) {
    state.searchno = newVal;
  },
  getBusline (state, newVal) {
    state.busLine = newVal;
  },
  getBussite (state, newVal) {
    state.busSite = newVal;
  },
  setChoiceline (state, obj) {
    state.choiceLine = obj;
    console.log('被选中的车次', state.choiceLine);
  },
  setBuspassenger (state, { name, type, paperTy, paperNo }, isPassenger = false) {
    let obj = {name: name, type: type, paperTy: paperTy, paperNo: paperNo, isPassenger: isPassenger};
    state.busPassenger.push(obj);
  },
  // 设置汽车的订单
  setBusorder (state, obj) {
    state.busOrder = obj;
  },
  // 用于存放汽车的所有订单
  setBusallorders (state, obj) {
    state.busAllorders.push(obj);
  },
  // 用于清除订单
  delBusallorders (state, obj) {
    state.busAllorders.map((item, index) => {
      if (item === obj) {
        state.busAllorders.splice(index, 1);
      }
    });
  },
  // 用于存放搜索的酒店信息
  setHoteldata (state, obj) {
    state.searchHoteldata = obj;
  },
  // 设定酒店省份
  setHotelpro (state, obj) {
    state.hotelPro = obj;
  },
  // 用于存放所有的城市,将城市的对象 push 进入
  setHotelcity (state, obj) {
    if (obj) {
      state.hotelCity.push(...obj);
    }
  },
  // 用来存放对应索引的城市, 这个地方需要进行运算
  setIndexcity (state, value) {
    // let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let obj = {};
    value.map((item, index) => {
      if (item.prefixLetter) {
        let index = item.prefixLetter;
        if (obj[index]) {
          if (obj[index].indexOf(item.name) === -1) {
            obj[index].push(item.name);
          }
        } else {
          obj[index] = [];
          obj[index].push(item.name);
        }
      }
    });
    console.log('obj', obj);
    state.indexCity = obj;
  },
  setHotelSelc (state, value) {
    state.hotelSelc = value;
  },
  setHoteldet (state, value) {
    state.hotelDet = value;
  },
  setHotelitem (state, value) {
    state.hotelItem = value;
  },
  setHotelPriceSearch (state, value) {
    state.hotelPrice = value;
  }
};
export { mutations };
