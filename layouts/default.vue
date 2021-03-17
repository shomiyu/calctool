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
              <nuxt-link to="/">px → em</nuxt-link>
              <nuxt-link to="/lineheight">line-height</nuxt-link>
              <nuxt-link to="/px-rate">px → %/vw</nuxt-link>
              <nuxt-link to="/rate-px">% → px</nuxt-link>
              <nuxt-link to="/keep-rate">縦横比を保持したまま可変</nuxt-link>
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
