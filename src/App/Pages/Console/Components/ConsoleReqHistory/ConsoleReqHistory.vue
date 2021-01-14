<template>
  <div class="console__req-history console_block">
    <ul 
      class="console__req-list" 
      :class="{'console__req-list_dropped': currentId != null}"
      @click="setDrop"
      @wheel="scroll"
    >
      <template v-for="(el, i) in reqHistoryData">
        <ConsoleReqHistoryItem 
          :key="i" 
          :itemId="i"
          :item="el"
          :showDrop="currentId == i"
        />
      </template>
    </ul>
    <ConsoleClearButton v-if="reqHistoryData.length" />
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import ConsoleReqHistoryItem from './Components/ConsoleReqHistoryItem'
  import ConsoleClearButton from './Components/ConsoleClearButton'

  export default {
    components: {ConsoleReqHistoryItem, ConsoleClearButton},
    data() {
      return {
        currentId: null,
        reqHistory: null
      }
    },
    computed: {
      ...mapGetters(['reqHistoryData'])
    },
    methods: {
      setDrop(e) {
        const id = e.target.id;

        if(!id || id == this.currentId) {
          this.currentId = null;
          return;
        }
        this.currentId = id;
      },
      handleClickOutside(e) {
        if(this.currentId == null) return;

        if (!this.$el.contains(e.target)) {
          this.currentId = null;
        }
      },
      scroll(e = {}) {
        if(this.currentId) return;
    
        let item = e.currentTarget || null;
        const optionsUI = JSON.parse(localStorage.getItem('optionsUI')) || {};
        if(!optionsUI.scrollPos) optionsUI.scrollPos = 0;

        if(!item){
          item = this.$el;
        }else{
          const {scrollWidth, scrollLeft, offsetWidth} = item;
          const pos = scrollWidth-scrollLeft-offsetWidth;

          if (e.deltaY > 0) optionsUI.scrollPos += 100;
          else optionsUI.scrollPos -= 100;
          if(pos < 1) optionsUI.scrollPos -= 100;
          if(optionsUI.scrollPos <= 0) optionsUI.scrollPos = 0;
        }
        item.scrollLeft = optionsUI.scrollPos;
        localStorage.setItem('optionsUI', JSON.stringify({...optionsUI, scrollPos: optionsUI.scrollPos}));
      }
    },
    mounted() {
      this.scroll();
      document.addEventListener("click", this.handleClickOutside);
    },
    destroyed() {
      document.removeEventListener("click", this.handleClickOutside);
    }
  }
</script>