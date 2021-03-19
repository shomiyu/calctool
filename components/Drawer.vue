<template>
  <nav :class="$options.name">
    <h2 class="visuallyHidden">グローバルナビゲーション</h2>
    <ul class="menu">
      <li
        :class="{ 'is-active': $store.state.activeSidebarMenu === 'index' }"
        class="menu__item"
      >
        <nuxt-link event="" to="/" @click.native.prevent="handleClick"
          >px → em</nuxt-link
        >
      </li>
      <li
        :class="{
          'is-active': $store.state.activeSidebarMenu === 'lineheight',
        }"
        class="menu__item"
      >
        <nuxt-link
          event=""
          to="/line-height"
          @click.native.prevent="handleClick"
          >line-height</nuxt-link
        >
      </li>
      <li
        :class="{ 'is-active': $store.state.activeSidebarMenu === 'px-rate' }"
        class="menu__item"
      >
        <nuxt-link event="" to="/px-rate" @click.native.prevent="handleClick"
          >px → %/vw</nuxt-link
        >
      </li>
      <li
        :class="{
          'is-active': $store.state.activeSidebarMenu === 'rate-px',
        }"
        class="menu__item"
      >
        <nuxt-link event="" to="/rate-px" @click.native.prevent="handleClick"
          >% → px</nuxt-link
        >
      </li>
      <li
        :class="{
          'is-active': $store.state.activeSidebarMenu === 'keep-rate',
        }"
        class="menu__item"
      >
        <nuxt-link event="" to="/keep-rate" @click.native.prevent="handleClick"
          >縦横比を保持したまま可変</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Drawer',

  methods: {
    handleClick() {
      this.$emit('closeMenu')
      this.$router.push({ path: event.target.pathname })
    },
  },
}
</script>

<style lang="scss" scoped>
.Drawer {
  width: 100%;
  max-width: 400px;
  height: 100vh;
  padding: em(120) em(40) 1em;
  background-color: $color-white;
  box-shadow: 0 0 2px rgba(221, 221, 221, 0.8);
}

.menu {
  list-style: none;

  &__item {
    a {
      font-size: fz(18);
      display: block;
      border: 1px solid $color-gray;
      border-radius: 5px;
      padding: em(16);
      text-align: center;
    }

    &.is-active {
      a {
        border-color: $color-black;
        font-weight: bold;
      }
    }
  }

  &__item + &__item {
    margin-top: 1em;
  }
}
</style>
