<template>
  <div>
    <Header />
    <main>
      <MainVisual />
      <div id="target" class="mainContents">
        <div class="container">
          <div class="contentFlex">
            <Sidebar class="sidebar" />
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
  width: 90%;
  margin: auto;
}

.contentFlex {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  @include mq(lg) {
    flex-direction: column;
  }
}

.sidebar {
  position: sticky;
  top: 2em;
  @include mq(lg) {
    position: static;
  }
}
</style>
