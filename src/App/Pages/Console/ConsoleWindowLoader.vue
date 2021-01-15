<template>
  <div 
    v-if="!removeLoader"
    :class="['console__window-loader', fadeOutClass]"
  >
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import http from '@/utils/http'
  import logout from '@/utils/logout'

  export default {
    data() {
      return {
        fadeOutClass: '',
        removeLoader: false
      }
    },
    methods: {
      async auth() {
        const res = await http({action: "pong"});

        if(res.id?.split('/')[1] === "auth"){
          await logout();
          await this.$router.push('/login');
          return;
        };

        this.fadeOutClass = 'console__window-loader_fade-out';

        setTimeout(() => {
          this.removeLoader = true;
        }, 1000);
      }
    },
    mounted() {
      this.auth();
    }
  }
</script>