<template>
  <div class="console__header console_block">
    <Logo :parentClass="'console__logo'"/>
    <h3 class="console__logo-title">API-консолька</h3>
    <div class="console__user-email">
      <span>{{userInfo.login}}</span>
      <span v-if="userInfo.login && userInfo.sublogin" class="console__delimiter">:</span>
      <span>{{userInfo.sublogin}}</span>
    </div>
    <button class="console__logout-button" @click="logOut">
      Выйти 
      <svg class="icon">
        <use xlink:href="/assets/icon/sprite.svg#log-out"></use>
      </svg>
    </button>
    <div class="console__fullscreen-button" @click="toggleFullscreen">
      <svg class="icon">
        <use 
          :xlink:href="`/assets/icon/sprite.svg#fullscreen-${isFullscreen ? 'on' : 'off' }`"
        ></use>
      </svg>
    </div>
  </div>
</template>

<script>
  import Logo from '@/UI/Logo'
  import logout from '@/utils/logout'
  import fscreen from 'fscreen'

  export default {
    components: {
      Logo
    },
    data() {
      return {
        userInfo: {login:'', sublogin: ''},
        isFullscreen: false
      }
    },
    methods: {
      logOut() {
        logout()
         .then(() => this.$router.push('/login'))
      },
      toggleFullscreen() {
        const el = this.$parent.$el;
        
        if(!fscreen.fullscreenElement){
          fscreen.requestFullscreen(el);
        }else{
          fscreen.exitFullscreen();
        }
      },
      fullScreenEvent() {
        this.isFullscreen = !!fscreen.fullscreenElement;
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user_info'));
      fscreen.addEventListener('fullscreenchange', this.fullScreenEvent);
    },
    destroyed() {
      fscreen.removeEventListener('fullscreenchange', this.fullScreenEvent);
    }
  }
</script>