<template>
  <div class="console__footer footer console_block">
    <SubmitButton />
    <a href="https://github.com/chetvertkoff/sendsay" class="link footer__link">@chetvertkoff</a>  
    <FormatButton />
  </div>
</template>

<script>
  import SubmitButton from './Components/SubmitButton'
  import FormatButton from './Components/FormatButton'

  export default {
    components: {SubmitButton, FormatButton}
  }
</script>
