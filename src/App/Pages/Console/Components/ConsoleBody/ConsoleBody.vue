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
  import ConsoleResize from './Components/ConsoleResize'
  import ResEditor from './Components/ResEditor.vue'
  import ReqEditor from './Components/ReqEditor.vue'
  
  export default {
    components: {
      ConsoleResize,
      ResEditor,
      ReqEditor
    }
  }
</script>
