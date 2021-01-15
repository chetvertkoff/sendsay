<template>
  <li class="console__req-item req-item">
    <div 
      :class="[
        'req-item__inner', 
        item.isErr ? 'req-item__inner_err' : 'req-item__inner_success',
        copyClass
      ]"
      @click="fillReqField"
    >
      {{item.action}}
    </div>
    <svg 
      class="icon req-item__drop-icon" 
      :id="itemId"
    >
      <use xlink:href="/assets/icon/sprite.svg#req-item-drop"></use>
    </svg>
    <ReqDropCard 
      v-if="showDrop" 
      @copy="copy"
      @fulfilReq="fulfilReq"
      @deleteReqItem="deleteReqItem"
    />
  </li>
</template>

<script>
  import ReqDropCard from './ReqDropCard'
  
  export default {
    components: {ReqDropCard},
    props: {
      itemId: Number,
      item: Object,
      showDrop: Boolean
    },
    data() {
      return {
        copyClass: ''
      }
    },
    methods: {
      copyText() {
        const copyReq = JSON.stringify({...this.item, isErr: undefined});
        const el = document.createElement("input");
        el.style.height = '0px';
        el.style.width = '1px';
        document.body.appendChild(el);
        el.value = copyReq;
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      },
      copy() {
        this.copyClass = 'req-item__inner_copied';
        this.copyText();

        setTimeout(() => {
          this.copyClass = '';
        }, 500);
      },
      fulfilReq() {
        const reqData = this.fillReqField();
        this.$store.dispatch('sendReqData', reqData);
      },
      fillReqField() {
        const formattedText = JSON.stringify({action: this.item.action}, null, 2);
        this.$store.dispatch('setReqData', formattedText);
        return formattedText;
      },
      deleteReqItem() {
        this.$store.dispatch('showModal', {
          showModal: true,
          title: `Удалить ${this.item.action} ?`,
          actionId: this.item.actionId
        });
      }
    }
  }
</script>