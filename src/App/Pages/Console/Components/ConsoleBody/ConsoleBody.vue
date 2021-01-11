<template>
  <div class="console__body body console_block">
    <table class="body__table">
      <tbody>
        <tr>
          <ConsoleEditor 
            :name="'REQ'"
            :title="'Запрос:'"
            :options="{
              showGutter: false,
              highlightActiveLine: false,
              printMargin: false
            }"
          />
          <ConsoleResize />
          <ConsoleEditor 
            :name="'RES'"
            :title="'Ответ:'"
            :options="{
              showGutter: false,
              highlightActiveLine: false,
              printMargin: false,
              readOnly: true,
              showPrintMargin: false
            }"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import ConsoleEditor from '@/UI/ConsoleEditor'
  import ConsoleResize from './ConsoleResize'
  
  export default {
    components: {ConsoleEditor, ConsoleResize}
  }
</script>
