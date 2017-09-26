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
  },
  getLineRes (state, newVal) {
    state.lineRes = newVal;
  },
  setSearchno (state, newVal) {
    state.searchno = newVal;
  },
  getBusline (state, newVal) {
    state.busLine = newVal;
  }
};
export { mutations };
