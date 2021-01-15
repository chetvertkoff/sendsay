<template>
  <button class="console__clear-button" @click="deleteHistory">
    <svg class="icon">
      <use xlink:href="/assets/icon/sprite.svg#times"></use>
    </svg>
  </button> 
</template>

<script>
  export default {
    methods: {
      deleteHistory() {
        this.$store.dispatch('showModal', {
          showModal: true,
          title: `Удалить историю запросов ?`,
          actionId: null
        })
      }
    }
  }
</script>