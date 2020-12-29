<template>
  <div class="message form__message">
    <div class="message__left-block">
      <svg class="icon icon_smile">
          <use xlink:href="/assets/icon/sprite.svg#smile"></use>
      </svg>
    </div>
    <div class="message__right-block">
      <h4 class="h5 message__h5">Вход не вышел</h4>
      <p class="message__text">{{errMessage}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      errMessage: String
    }
  }
</script>