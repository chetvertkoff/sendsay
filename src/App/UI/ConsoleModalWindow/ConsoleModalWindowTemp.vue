<template>
  <div 
    :class="['console__modal', 'modal-window', 'modal-window_open', windowClose]" 
  >
    <div class="modal-window__wrapper">
      <h3 class="modal-window__title">{{item.title}}</h3>
      <div class="modal-window__button-group button-group"> 
        <Button 
          :title="Удалить"
          :classes="['button-danger']"
          @click="remove"
        />
        <Button 
          :title="Отменить"
          :classes="['button-cancel']"
          @click="closeWindow"
        />
      </div>
    </div>
    <button class="modal-window__close-button" @click="closeWindow">
      <svg class="icon modal-window__close-button-icon">
        <use xlink:href="/assets/icon/sprite.svg#times"></use>
      </svg>
    </button>
  </div>
</template>

<script>
  import Button from '@/UI/Button'

  export default {
    components: {Button},
    props: {
      item: Object
    },
    data() {
      return {
        windowClose: 'modal-window_close'
      }
    }
  }
</script>