<template>
  <div class="console__req-history console_block">
    <ul 
      class="console__req-list" 
      :class="{'console__req-list_dropped': currentId != null}"
    >
    <template v-for="(el, i) in reqHistory">
      <ConsoleReqHistoryItem :key="i"/>
    </template>
    </ul>
  </div>
</template>

<script>
  import ConsoleReqHistoryItem from './ConsoleReqHistoryItem'

  export default {
    components: {ConsoleReqHistoryItem},
    data(){
      return {
        currentId: null,
        reqHistory: null
      }
    }
  }
</script>