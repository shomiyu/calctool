<template>
  <nav :class="$options.name">
    <h2 class="visuallyHidden">グローバルナビゲーション</h2>
    <ul class="menu">
      <li
        v-for="menu in menuList"
        :key="menu.id"
        :class="{ 'is-active': currentMenu === menu.id }"
        class="menu__item"
      >
        <nuxt-link
          event=""
          :to="menu.path"
          @click.native.prevent="handleClick"
          v-text="menu.text"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Drawer',

  props: {
    // メニューデータ
    menuList: {
      type: Array,
      required: true,
    },

    // アクティブなメニュー
    currentMenu: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleClick(event) {
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
  height: 120%;
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
