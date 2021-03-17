<template>
  <div>
    <Header />
    <main>
      <MainVisual />
      <div id="target" class="mainContents">
        <div class="container">
          <div class="contentFlex">
            <Sidebar />
            <Nuxt />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$adobeFonts(document)
  },
}
</script>

<style lang="scss" scoped>
html {
  visibility: hidden;
}
html.wf-active {
  visibility: visible;
}

.mainContents {
  padding: em(56) 0 em(72);
}

.container {
  max-width: 1200px;
  margin: auto;
}

.contentFlex {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
