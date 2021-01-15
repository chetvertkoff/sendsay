<template>
  <ConsoleEditor 
    :name="'REQ'"
    :title="'Запрос:'"
    :options="{
      showGutter: false,
      highlightActiveLine: false,
      printMargin: false
    }"
    :content="content"
    :err="reqErr"
    @change-content="changeContent"
  />
</template>

<script>
  import {mapState} from 'vuex'
  import ConsoleEditor from '@/UI/ConsoleEditor'
  
  export default {
    components: {ConsoleEditor},
    computed: mapState({
      content: state => {
        const {reqData} = state.consoleRequest;
        if(!Object.keys(reqData)?.length) return "";
        return reqData;
      },
      reqErr: state => state.consoleRequest.reqErr
    }),
    methods: {
      changeContent(val) {
        this.$store.dispatch('setReqData', val);
      }
    }
  }
</script>