<template>
  <div>
    <Header />
    <main>
      <MainVisual />
      <div class="mainContents">
        <div class="container">
          <div class="contentFlex">
            <Nuxt />
            <div class="sidebar">
              <button type="button">px → em</button>
              <button type="button">line-height</button>
              <button type="button">px → %/vw</button>
            </div>
          </div>
        </div>
      </div>
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
  justify-content: space-between;
  align-items: flex-start;
}
</style>
