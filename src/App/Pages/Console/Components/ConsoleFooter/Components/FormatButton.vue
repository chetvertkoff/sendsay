<template>
  <button class="footer__format-button" @click="beautifyJson">
    <svg class="icon footer__format-icon">
      <use xlink:href="/assets/icon/sprite.svg#format"></use>
    </svg>
    Форматировать
  </button>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: mapState({
      reqData: state => state.consoleRequest.reqData
    }),
    methods: {
      beautifyJson() {
        try {
          const parseData = JSON.parse(this.reqData);
          const formattedText = JSON.stringify(parseData, null, 2);
          this.$store.dispatch('setReqData', formattedText);
        } catch (error) {}
      }
    }
  }
</script>