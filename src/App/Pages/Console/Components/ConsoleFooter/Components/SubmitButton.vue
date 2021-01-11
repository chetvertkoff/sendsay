<template>
  <Button 
    :title="'Отправить'" 
    :classes="['footer__button']"
  />
</template>

<script>
  import Button from '@/UI/Button'
  
  export default {
    components: {Button}
  }
</script>