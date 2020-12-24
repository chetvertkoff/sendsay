<template>
  <form class="form auth__form">
    <h3 class="form__title">API-консолька</h3>
    <TextInput 
      :label="'Логин'"
      :inputType="'text'"
      :inValid="false"
    />
    <TextInput 
      :label="'Сублогин'"
      :inputType="'text'"
      :inValid="false"
      :optionText="'Опционально'"
    />
    <TextInput 
      :label="'Логин'"
      :inputType="'text'"
      :inValid="false"
    />
    <label class="label form__label false">
      <span class="label__text label__text_left">Логин</span>
      <input type="text" class="form__input-text" value="">
    </label>
    <label class="label form__label false">
      <span class="label__text label__text_left">Сублогин</span>
      <span class="label__text label__text_right label__text_option">Опционально</span>
      <input type="text" class="form__input-text" value="">
    </label>
    <label class="label form__label false">
      <span class="label__text label__text_left">Пароль</span>
      <input type="password" class="form__input-text" value="">
    </label>

  </form>
</template>

<script>
  import TextInput from '@/UI/TextInput'
  import Button from '@/UI/Button'

  export default {
    components: {TextInput, Button}
  }
</script>