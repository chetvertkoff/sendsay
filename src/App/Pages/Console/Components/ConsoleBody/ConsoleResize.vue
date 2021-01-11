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
        },
        dragging: false
      }
    },
    watch: {
      dragging(val) {
        if(val){
          this.onStart();
          document.addEventListener('mousemove', this.onMouseMove);
          document.addEventListener('mouseup', this.endDrag);
        }else {
          document.removeEventListener('mousemove', this.onMouseMove);
          document.removeEventListener('mouseup', this.endDrag);
        }
      }
    },
    methods:{
      onStart(){
        this.options.optionsUI = JSON.parse(localStorage.getItem('optionsUI'));
        const optionsUI = this.options.optionsUI;
        const parent = this.$el.parentNode;

        if(!optionsUI.resizeBody) return;
        const {prev, next} = optionsUI.resizeBody;
        
        parent.firstChild.style.width = prev + 'px';
        parent.lastChild.style.width = next + 'px';
      },
      dragStart() {
        this.dragging = true;

        let {startPos, mouseX, startWidthPrev, startWidthNext} = this.options;
        const parent = this.$el.parentNode;

        this.options.startPos = mouseX;
        this.options.startWidthPrev = 0;
        this.options.startWidthNext = 0;

        let nextSibling = parent.lastChild;

        if (nextSibling) {
          this.options.startWidthNext = nextSibling.clientWidth;            
        } 
      },
      onMouseMove(e) {
        if(!this.dragging) return;
        let {startPos, mouseX, startWidthPrev, startWidthNext, optionsUI} = this.options;
        mouseX = e.screenX;
        const moveDiff = startPos - mouseX;
        let prev = startWidthPrev - moveDiff;
        let next = startWidthNext + moveDiff;
        const parent = this.$el.parentNode;
        const parentWidth = parent.offsetWidth;

        const limit = parentWidth / 4;
        next = parentWidth - prev;
        if(prev < limit || next < limit) return;

        parent.firstChild.style.width = prev + 'px';
        parent.lastChild.style.width = next + 'px';
        localStorage.setItem('optionsUI', JSON.stringify({...optionsUI, resizeBody:{next,prev}}));
        e.preventDefault();
      },
      endDrag(e) {
        this.dragging = false;
        e.preventDefault();
      }
    },
    mounted() {
      this.onStart();
    }
  }
</script>