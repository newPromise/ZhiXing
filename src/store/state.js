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
  }
};

export {state};
