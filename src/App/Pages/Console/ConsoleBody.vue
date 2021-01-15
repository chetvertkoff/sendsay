<template>
  <div class="console__body body console_block">
    <table class="body__table">
      <tbody>
        <tr>
          <ReqEditor />
          <ConsoleResize />
          <ResEditor />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import ConsoleResize from './ConsoleResize'
  import ResEditor from './ResEditor.vue'
  import ReqEditor from './ReqEditor.vue'
  
  export default {
    components: {
      ConsoleResize,
      ResEditor,
      ReqEditor
    }
  }
</script>
