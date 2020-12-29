<template>
  <div :class="['logo', parentClass]" >
    <div class="logo__figure logo_ellipse"></div>
    <div class="logo__figure logo_rectangle1"></div>
    <div class="logo__figure logo_ellipse"></div>
    <div class="logo__figure logo_rectangle2"></div>
  </div>
</template>

<script>
  export default {
    props: {
      parentClass: String
    }
  }
</script>