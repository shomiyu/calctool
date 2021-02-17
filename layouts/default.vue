<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$adobeFonts(document)
  },
}
</script>

<style lang="scss">
html {
  visibility: hidden;
}
html.wf-active {
  visibility: visible;
}
</style>
