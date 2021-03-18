<template>
  <div>
    <Header />
    <main>
      <MainVisual />
      <div id="target" class="mainContents">
        <div class="container">
          <div class="contentFlex">
            <Sidebar v-if="!isMobile" class="sidebar" />
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
  data() {
    return {
      windowWidth: 1440,
    }
  },

  computed: {
    /**
     * 1023px以下をモバイルと判定
     *
     * @return {Boolean}
     */
    isMobile() {
      return this.windowWidth < 1024
    },
  },

  mounted() {
    this.$adobeFonts(document)

    // レンダリング時のウィンドウ幅を初期値として取得する
    this.windowWidth = window.innerWidth

    // ブラウザリサイズの度にウィンドウ幅を取得する
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
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
    display: none;
  }
}
</style>
