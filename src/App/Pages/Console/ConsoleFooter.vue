<template>
  <div class="console__footer footer console_block">
    <SubmitButton />
    <a href="https://github.com/chetvertkoff/sendsay" class="link footer__link">@chetvertkoff</a>  
    <FormatButton />
  </div>
</template>

<script>
  import SubmitButton from './SubmitButton'
  import FormatButton from './FormatButton'

  export default {
    components: {SubmitButton, FormatButton}
  }
</script>
