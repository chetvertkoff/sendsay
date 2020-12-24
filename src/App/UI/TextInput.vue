<template>
  <label class="label form__label false">
    <span class="label__text label__text_left">{{label}}</span>
    <span v-if="optionText" class="label__text label__text_right label__text_option">{{optionText}}</span>
    <input :type="inputType" class="form__input-text" value="">
  </label>
</template>

<script>
  export default {
    props: {
      label: String,
      inputType: String,
      optionText: String,
      inValid: Boolean
    }
  }
</script>