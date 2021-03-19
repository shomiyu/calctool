<template>
  <div>
    <Header class="header" />

    <!-- モバイル用メニュー -->
    <template v-if="isMobile">
      <button type="button" class="hamburger" @click="isShowMenu = !isShowMenu">
        <span class="hamburger__line">
          <span class="visuallyHidden">メニューを開く</span>
        </span>
        <span class="hamburger__text">menu</span>
      </button>
      <transition name="drawer">
        <Drawer
          v-show="isShowMenu"
          class="drawer"
          :menu-list="getMenuList"
          :current-menu="currentMenu"
          @closeMenu="isShowMenu = false"
        />
      </transition>
      <div v-if="isShowMenu" class="overlay" @click="isShowMenu = false" />
    </template>

    <main class="main">
      <MainVisual />
      <div id="target" class="mainContents">
        <div class="container">
          <div class="contentFlex">
            <Sidebar
              v-if="!isMobile"
              class="sidebar"
              :menu-list="getMenuList"
              :current-menu="currentMenu"
            />
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
      isShowMenu: false,
      windowWidth: 1440,
      currentMenu: 'Index',
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

    /**
     * メニュー一覧を生成
     */
    getMenuList() {
      return [
        {
          id: 'Index',
          path: '/#target',
          text: 'px → em',
        },
        {
          id: 'LineHeight',
          path: '/line-height#target',
          text: 'line-height',
        },
        {
          id: 'PxRate',
          path: '/px-rate#target',
          text: 'px → %/vw',
        },
        {
          id: 'RatePx',
          path: '/rate-px#target',
          text: '% → px',
        },
        {
          id: 'KeepRate',
          path: '/keep-rate#target',
          text: '縦横比を保持したまま可変',
        },
      ]
    },
  },

  created() {
    this.setListener()
  },

  mounted() {
    // レンダリング時のウィンドウ幅を初期値として取得する
    this.windowWidth = window.innerWidth

    // ブラウザリサイズの度にウィンドウ幅を取得する
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },

  methods: {
    setListener() {
      this.$nuxt.$on('updateMenu', this.updateSelectMenu)
    },

    updateSelectMenu(menuName) {
      this.currentMenu = menuName
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  @include mq(lg) {
    padding-top: em(70);
  }
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

.header {
  @include mq(lg) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
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

.drawer {
  position: fixed;
  z-index: 14;
  top: 0;
  right: 0;
}

.hamburger {
  display: inline-block;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 15px;
  right: em(24);
  z-index: 15;

  &__text {
    font-size: em(11);
    position: absolute;
    top: 56%;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    font-weight: bold;
  }

  &__line {
    display: inline-block;
    width: 28px;
    height: 2px;
    background-color: $color-black;
    border-radius: 2px;
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: $color-black;
      border-radius: 2px;
      position: absolute;
    }

    &::before {
      top: -5px;
    }

    &::after {
      top: 5px;
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 11;
}

/**
 * 右から左へスライドする
 * ドロワーアニメーションの設定
 */
.drawer-enter-active,
.drawer-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.drawer-enter,
.drawer-leave-to {
  transform: translateX(100vw) translateX(0px);
}
</style>
