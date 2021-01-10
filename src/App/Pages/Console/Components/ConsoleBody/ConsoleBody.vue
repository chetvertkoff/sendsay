<template>
  <div class="console__body body console_block">
    <table class="body__table">
      <tbody>
        <tr>
          <ConsoleEditor 
            :name="'REQ'"
          />
          <ConsoleResize />
          <ConsoleEditor 
            :name="'RES'"
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
