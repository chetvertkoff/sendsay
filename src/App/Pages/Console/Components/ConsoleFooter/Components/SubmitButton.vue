<template>
  <Button 
    :title="'Отправить'" 
    :classes="['footer__button']"
    :isLoad="isLoad"
    @on-click="submitReq"
  />
</template>

<script>
  import { mapState } from 'vuex'
  import Button from '@/UI/Button'
  import Validate from '@/utils/Validate'
  import logout from '@/utils/logout'
  
  export default {
    components: {Button},
    computed: mapState({
      reqData: state => state.consoleRequest.reqData,
      reqErr: state => state.consoleRequest.reqErr,
      isLoad: state => state.consoleRequest.loading
    }),
    methods: {
      submitReq() {
        const isValidRequest = Validate.isValidRequest(this.reqData);

        if(!isValidRequest){
          this.$store.dispatch('setReqErr', true);
          return;
        }
        if(this.reqErr) this.$store.dispatch('setReqErr', false);
        
        this.sendReqDataAsync();
      },
      async sendReqDataAsync() {
        const res = await this.$store.dispatch('sendReqData', this.reqData);
        if(res == "logout") logout();
      }
    }
  }
</script>