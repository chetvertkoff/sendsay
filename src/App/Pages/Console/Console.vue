<template>
  <section class="console">
    <ConsoleHeader />
    <ConsoleReqHistory />
    <ConsoleBody />
    <ConsoleFooter />
    <ConsoleWindowLoader />
  </section>
</template>

<script>
  import ConsoleHeader from './Components/ConsoleHeader'
  import ConsoleReqHistory from './Components/ConsoleReqHistory/ConsoleReqHistory'
  import ConsoleBody from './Components/ConsoleBody/ConsoleBody'
  import ConsoleFooter from './Components/ConsoleFooter/ConsoleFooter'
  import ConsoleWindowLoader from './Components/ConsoleWindowLoader'

  export default {
    components: {
      ConsoleHeader, 
      ConsoleReqHistory,
      ConsoleBody,
      ConsoleFooter,
      ConsoleWindowLoader
    },
    
  }
</script>