<template>
  <section class="console">
    <ConsoleHeader />
    <ConsoleReqHistory />
  </section>
</template>

<script>
  import ConsoleHeader from './Components/ConsoleHeader'
  import ConsoleReqHistory from './Components/ConsoleReqHistory/ConsoleReqHistory'
  
  export default {
    components: {ConsoleHeader, ConsoleReqHistory},
    
  }
</script>