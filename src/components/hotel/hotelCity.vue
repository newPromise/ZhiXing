<template>
    <div class="city-hotel">
        <div class="all-citys" @click="showCity = false">
            <header-top title="选择城市"></header-top>
                <div class="city-content">
                    <div class="city-item" v-for="item, key of indexCity">
                        <div class="provice">{{key}}</div>
                        <div class="all-citys">
                            <span @click="choiceCity(name)" v-for="name of item">{{name}}</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
 </template>
 <script type="text/javascript">
    import {mapActions, mapState} from 'vuex';
    import headerTop from '../common/header';
    export default {
      name: 'hotelCity',
      data () {
        return {
        };
      },
      components: {
        headerTop
      },
      computed: {
        getAllCitys () {
          return this.setIndexcity(this.hotelCity);
        },
        ...mapState(['hotelPro', 'hotelCity', 'indexCity'])
      },
      methods: {
        choiceCity (name) {
          this.setHotelSelc(name);
          this.$router.back(-1);
        },
        ...mapActions(['getHotelpro', 'getHotelcity', 'setIndexcity', 'setHotelSelc'])
      },
      mounted () {
        this.getAllCitys();
      }
    };
 </script>
 <style type="text/css" lang="stylus">
    .all-citys
                    width: 100%;
                    background-color: white;
                    .city-content
                        width: 100%;
                        min-height: 100rem;
                        .city-item
                            .provice
                                height: 4rem;
                                background-color: #F4F4F4;
                                text-align: left;
                                padding: 2rem;
                            .all-citys
                                width: 100%;
                                text-align: left;
                                padding: 0 1rem;
                                span
                                    font-size: 1.6rem;
                                    background: white;
                                    width: 30%;
                                    display: inline-block;
                                    height: 4rem;
                                    line-height: 4rem;
                                    text-align: center;
                                    border-bottom: 1px solid lightgray;     
 </style>
