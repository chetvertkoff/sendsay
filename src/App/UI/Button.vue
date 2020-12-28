<template>
  <button :class="classNames" @click="e => $emit('on-click', e)" >
    <Loader v-if="isLoad" />
    <span v-else class="button__text">{{title}}</span>
  </button>
</template>

<script>
  import Loader from './Loader'

  export default {
    components: {Loader},
    props: {
      disabled: Boolean,
      title: String,
      classes: Array,
      isLoad: Boolean
    },
    data(){
      return {
        classNames: ['button']
      }
    },
    watch: {
      disabled(disabled) {
        if(disabled) this.classNames = [...this.classNames, "button_disabled"];
        else this.classNames = this.classNames.filter(el => el !== "button_disabled");
      }
    },
    created() {
      if(this.classes?.length){
        this.classNames = [this.classNames, ...this.classes];
      }
    }
  }
</script>