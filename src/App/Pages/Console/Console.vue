<template>
  <section class="console">
    <ConsoleHeader />
    <ConsoleReqHistory />
    <ConsoleBody />
  </section>
</template>

<script>
  import ConsoleHeader from './Components/ConsoleHeader'
  import ConsoleReqHistory from './Components/ConsoleReqHistory/ConsoleReqHistory'
  import ConsoleBody from './Components/ConsoleBody/ConsoleBody'

  export default {
    components: {
      ConsoleHeader, 
      ConsoleReqHistory,
      ConsoleBody
    },
    
  }
</script>