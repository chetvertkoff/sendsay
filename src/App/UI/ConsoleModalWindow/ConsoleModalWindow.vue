<template>
  <div 
    v-if="item.title"
    :class="['console__modal', 'modal-window', 'modal-window_open', windowClose]" 
  >
    <div class="modal-window__wrapper">
      <h3 class="modal-window__title">{{item.title}}</h3>
      <div class="modal-window__button-group button-group"> 
        <Button 
          :title="'Удалить'"
          :classes="['button-danger']"
          @on-click="remove"
        />
        <Button 
          :title="'Отменить'"
          :classes="['button-cancel']"
          @on-click="closeWindow"
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
  import {mapState} from 'vuex'
  import ResHistory from '@/utils/ResHistory'

  export default {
    components: {Button},
    data() {
      return {
        windowClose: ''
      }
    },
    computed: mapState({
      item: state => state.modal
    }),
    methods: {
      closeWindow() {
        this.windowClose = 'modal-window_close';
        setTimeout(() => {
          this.$store.dispatch('closeModal');
          this.windowClose = '';
        }, 450);
      },
      remove() {
        if(this.item.actionId) {
          this.$store.dispatch('setReqHistoryData', ResHistory.deleteReqItemById(this.item.actionId));
        }else {
          this.$store.dispatch('setReqHistoryData', ResHistory.deleteAllHistoryItems());
        }
        this.closeWindow();
      },
      handleCLickOutside(e) {
        if (!this.$el?.contains(e.target)) {
          this.closeWindow();
        }
      },
      handleEscapeOutside(e) {
        if (e.key === 'Escape') {
          this.closeWindow();
        }
      }
    },
    updated() {      
      setTimeout(() => {
        if(!this.item.title) {
          document.removeEventListener("click", this.handleCLickOutside);
          document.removeEventListener("keydown", this.handleEscapeOutside);
        }else {
          document.addEventListener("click", this.handleCLickOutside);
          document.addEventListener("keydown", this.handleEscapeOutside);
        }
      }, 0);
    }
  }
</script>