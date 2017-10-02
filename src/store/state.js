let state = {
  // 保存火车相关信息
  city: {
    startCity: '',
    endCity: ''
  },
  // 火车日期
  selDate: '',
  // 余票查询
  trainRes: [],
  ticketRes: [],
  // 车次查询
  lineRes: [],
  // 站站查询
  stationRes: [],
  // 选择的座位类型
  siteTys: [],
  // 监控抢票相关信息
  // 数组对象形式
  // 一个对象是一种监听内容
  // 内容包括
  // city: {startCity: '', endCity: ''}
  // date: 日期, trainNo: 车次 siteTys: 坐席类型
  grabTicks: [
  ],
  // showDate 用来表示日历中显示的日期
  liveDate: '',
  // loginMessage 用来存放登录信息，包括登录账号，密码等
  loginMsg: {},
  searchno: '',
  // busline 用于存放汽车站站查询
  busLine: {},
  busSite: {},
  // choiceLine,用于存存放被点击到的车次详细信息
  choiceLine: {
    date: '',
    distance: '',
    startcity: '',
    endcity: '',
    startstation: '',
    endstation: '',
    starttime: '',
    price: ''
  },
  // 添加的所有乘客
  busPassenger: [],
  // 要进行乘车的乘客
  choicePassenger: [],
  // busOrder, 汽车订单
  busOrder: {},
  // 汽车所有订单
  busAllorders: [],
  // 酒店搜索详情// 位置, localtion  时间，date: { enterData,leaceDate}  关键词, keyWords: 价格，星级
  searchHoteldata: {},
  // 酒店省份列表
  hotelPro: [],
  // 酒店城市列表, 对象形式,属性值为省份拼音首字母
  hotelCity: [],
  // indexCity; 用于存放根据索引首字母获取到相关城市的
  // 对象数组形式, 属性是首字母, 值是城市列表
  indexCity: {},
  // hotelSelc 酒店选择的城市
  hotelSelc: '',
  // 查询到的酒店详细信息
  hotelDet: ''
};

export {state};
