<template>
  <div>
    <Header />
    <main>
      <MainVisual />
      <Nuxt />
    </main>
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

body {
  background-image: url('/images/bg_pattern.svg');
  background-repeat: repeat;
}
</style>
