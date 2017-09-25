import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import SearchMain from '@/components/mainPage/searchMain';
import Train from '@/components/train/train';
import TrainRes from '@/components/train/traResult';
import Plane from '@/components/plane/plane';
import PlaRes from '@/components/plane/plaResult';
import Bus from '@/components/bus/bus';
import BusRes from '@/components/bus/busResult';
import Hotel from '@/components/hotel/hotel';
import HotRes from '@/components/hotel/hotResult';
import AllCitys from '@/components/common/allCitys';
import Calender from '@/components/common/calender';
import GrabDet from '@/components/grabTic/grabDet';
import OrderIndex from '@/components/order/orderIndex';
import WatchSet from '@/components/grabTic/watchSet';
import SiteTys from '@/components/grabTic/siteTys';
import ChoiceTrainNo from '@/components/grabTic/choiceTrainNo';
import Login from '@/components/login/login';

// 个人中心

import AboutPerson from '@/components/person/aboutPerson';
import CountManage from '@/components/person/countManage';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/hello', name: 'Hello', component: Hello},
    {
      path: '/searchMain',
      component: SearchMain,
      children: [
            {path: 'train', name: 'train', component: Train},
            {path: 'plane', name: 'plane', component: Plane},
            {path: 'bus', name: 'bus', component: Bus},
            {path: 'hotel', name: 'hotel', component: Hotel}
      ]},
    {path: '/orderIndex', name: 'orderIndex', component: OrderIndex},
    {path: '/allCitys', name: 'allCitys', component: AllCitys},
    {path: '/calender', name: 'calender', component: Calender},
    {path: '/trainRes', name: 'trainRes', component: TrainRes},
    {path: '/plane', name: 'plane', component: Plane},
    {path: '/plaRes', name: 'plaRes', component: PlaRes},
    {path: '/hotRes', name: 'hotRes', component: HotRes},
    {path: '/busRes', name: 'busRes', component: BusRes},
    {path: '/grabDet', name: 'grabDet', component: GrabDet},
    {path: '/watchSet', name: 'watchSet', component: WatchSet},
    {path: '/siteTys', name: 'siteTys', component: SiteTys},
    {path: '/choiceTrainNo', name: 'choiceTrainNo', component: ChoiceTrainNo},
    // 个人中心
    {path: '/aboutPerson', name: 'aboutPerson', component: AboutPerson},
    {path: '/countManage', name: 'countManage', component: CountManage},
    // 登录智行
    {path: '/login', name: 'login', component: Login}
  ]
});
