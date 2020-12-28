<template>
  <label class="label form__label" :class="{'label_invalid': inValid}">
    <span class="label__text label__text_left">{{label}}</span>
    <span 
      v-if="optionText" 
      class="label__text label__text_right label__text_option"
    >
      {{optionText}}
    </span>
    <input 
      :type="inputType" 
      class="form__input-text" 
      v-model="text"
    />
  </label>
</template>

<script>
  export default {
    props: {
      label: String,
      inputType: String,
      optionText: String,
      inValid: Boolean,
      value: String,
      getText: Function
    },
    data(){
      return {
        text: this.value
      }
    },
    watch: {
      text(val){
        this.$emit('get-text', val);
      }
    }
  }
</script>