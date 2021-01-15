<template>
  <ConsoleEditor 
    :name="'RES'"
    :title="'Ответ:'"
    :options="{
      showGutter: false,
      highlightActiveLine: false,
      printMargin: false,
      readOnly: true,
      showPrintMargin: false
    }"
    :content="content"
    :err="resErr"
  />
</template>

<script>
  import {mapState} from 'vuex'
  import ConsoleEditor from '@/UI/ConsoleEditor'

  export default {
    components: {ConsoleEditor},
    computed: mapState({
      content: state => {
        const {resData} = state.consoleRequest;
        
        if(Object.keys(resData)?.length){
          return JSON.stringify(resData, null, 2);
        }
        return "";
      },
      resErr: state => state.consoleRequest.resErr
    })
  }
</script>