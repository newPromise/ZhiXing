<template>
    <div class="about-person">
        <div class="header">
            <div class="header-top">
                <mt-cell title="我的智行(登录或注册)" label="账号管理" to="/countManage" is-link></mt-cell>
            </div>
            <div class="header-items">
                <mt-cell v-for="item in heaData" :title="item.title" :value="item.value" ::icon="item.icon" is-link></mt-cell>
            </div>
        </div>
        <div class="content">
            <mt-cell v-for="item in conData"  :title="item.title" icon="more" :to="item.to" :value="item.value" is-link></mt-cell>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
      name: 'aboutPerson',
      data () {
        return {
          heaData: [
            {title: '我的财富', label: '0个加速包', value: '领取加速包', to: '', icon: ''},
            {title: '我的优惠券', label: '', value: '', to: '', icon: ''}
          ],
          conData: [
            {title: '出行服务', value: '正晚点/时刻表', to: '/trainTimeSearch', icon: ''},
            {title: '邀请好友', value: '一起来抢票', to: '', icon: ''},
            {title: '消息中心', value: '在线客服', to: '', icon: ''},
            {title: '产品意见', value: '', to: '', icon: ''},
            {title: '更多', value: '', to: '', icon: ''}
          ]
        };
      },
      methods: {
      },
      mounted () {
      }
    };
</script>
<style type="text/css" lang='stylus'>
    .about-person
        .content
        .header
            margin-bottom: 1rem;
            .header-top
                background: #53B3FD;
                padding: 3rem 1rem;
                .mint-cell-wrapper
                    background: #53B3FD;
                    color: white;
                    font-size: 1.5rem;
                    .mint-cell-title
                        color: white;
                        font-size: 2rem;
                        .mint-cell-label
                            color: white;
        
        .mint-cell-title 
            text-align: left;                
                
    
</style>
