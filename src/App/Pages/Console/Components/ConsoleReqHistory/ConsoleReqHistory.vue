<template>
  <div class="console__req-history console_block">
    <ul 
      class="console__req-list" 
      :class="{'console__req-list_dropped': currentId != null}"
    >
    <template v-for="(el, i) in reqHistoryData">
      <ConsoleReqHistoryItem 
        :key="i" 
        :itemId="i"
        :item="el"
      />
    </template>
    </ul>
  </div>
</template>

<script>
  import ConsoleReqHistoryItem from './ConsoleReqHistoryItem/ConsoleReqHistoryItem'
  import { mapGetters, mapState } from 'vuex';

  export default {
    components: {ConsoleReqHistoryItem},
    data() {
      return {
        currentId: null,
        reqHistory: null
      }
    },
    computed: {
      ...mapGetters(['reqHistoryData'])
    }
  }
</script>