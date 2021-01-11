<template>
  <section class="console">
    <ConsoleHeader />
    <ConsoleReqHistory />
    <ConsoleBody />
    <ConsoleFooter />
  </section>
</template>

<script>
  import ConsoleHeader from './Components/ConsoleHeader'
  import ConsoleReqHistory from './Components/ConsoleReqHistory/ConsoleReqHistory'
  import ConsoleBody from './Components/ConsoleBody/ConsoleBody'
  import ConsoleFooter from './Components/ConsoleFooter/ConsoleFooter'

  export default {
    components: {
      ConsoleHeader, 
      ConsoleReqHistory,
      ConsoleBody,
      ConsoleFooter
    },
    
  }
</script>