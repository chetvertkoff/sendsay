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
    <div className="console__fullscreen-button" onClick={toggleFullscreen}>
      <svg className="icon">
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
      }
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user_info'));
    }
  }
</script>