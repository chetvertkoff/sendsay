<template>
  <td class="console__resize" @mousedown="dragStart">
    <svg class="icon console__drop-icon">
      <use xlink:href="/assets/icon/sprite.svg#req-item-drop"></use>
    </svg>
  </td>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          mouseX: 0,
          startPos: 0,
          startWidthPrev: 0,
          startWidthNext: 0,
          optionsUI: JSON.parse(localStorage.getItem('optionsUI')) || {}
        }
      }
    },
    methods:{
      dragStart() {

      }
    },
    mounted() {
      const optionsUI = this.options.optionsUI;
      const parent = this.$el.parentNode;

      if(!optionsUI.resizeBody) return;
      const {prev, next} = optionsUI.resizeBody;
      
      parent.firstChild.style.width = prev + 'px';
      parent.lastChild.style.width = next + 'px';
    }
  }
</script>