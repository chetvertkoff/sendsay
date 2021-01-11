<template>
  <li class="console__req-item req-item">
    <div 
      :class="['req-item__inner', item.isErr ? 'req-item__inner_err' : 'req-item__inner_success']"
    >
      {{item.action}}
    </div>
    <svg 
      class="icon req-item__drop-icon" 
      :id="itemId"
    >
      <use xlink:href="/assets/icon/sprite.svg#req-item-drop"></use>
    </svg>
    <ReqDropCard v-if="showDrop" />
  </li>
</template>

<script>
  import ReqDropCard from './Components/ReqDropCard'
  
  export default {
    props: {
      itemId: Number,
      item: Object,
      showDrop: Boolean
    }
  }
</script>