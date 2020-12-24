<template>
<section class="auth">
  <div class="auth__container">
    <Logo />
    <Form />
    <a href="https://github.com/chetvertkoff/sendsay" class="link auth__link">@chetvertkoff</a>
  </div>
</section>
</template>

<script>
  import Logo from '@/UI/Logo'
  import Form from './Components/Form'
  export default {
    components: {Logo, Form}
  }
</script>