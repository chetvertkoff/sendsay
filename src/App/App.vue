<template>
  <div id="root">
    <router-view />
  </div>
</template>

<script>
  import Cookies from 'js-cookie';

  export default {
    created(){
      const hasSess = !!Cookies.get('sendsay_session');
      const isEqualPath = !!(this.$route.path == '/login');

      if(!hasSess && !isEqualPath) this.$router.push('/login');
    }
  }
</script>