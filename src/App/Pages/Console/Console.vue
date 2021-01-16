<template>
  <section class="console">
    <ConsoleHeader />
    <ConsoleReqHistory />
    <ConsoleBody />
    <ConsoleFooter />
    <ConsoleWindowLoader />
    <ConsoleModalWindow />
  </section>
</template>

<script>
  import ConsoleHeader from './ConsoleHeader'
  import ConsoleReqHistory from './ConsoleReqHistory'
  import ConsoleBody from './ConsoleBody'
  import ConsoleFooter from './ConsoleFooter'
  import ConsoleWindowLoader from './ConsoleWindowLoader'
  import ConsoleModalWindow from '../../UI/ConsoleModalWindow'

  export default {
    components: {
      ConsoleHeader, 
      ConsoleReqHistory,
      ConsoleBody,
      ConsoleFooter,
      ConsoleWindowLoader,
      ConsoleModalWindow
    },
    
  }
</script>