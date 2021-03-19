<template>
  <nav :class="$options.name">
    <h2 class="visuallyHidden">グローバルナビゲーション</h2>
    <ul class="pageList">
      <li
        v-for="menu in menuList"
        :key="menu.id"
        :class="{ 'is-active': currentMenu === menu.id }"
        class="pageList__item"
      >
        <nuxt-link :to="menu.path" v-text="menu.text" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',

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
}
</script>

<style lang="scss" scoped>
.Sidebar {
  max-width: 312px;
  width: 26%;
  padding-left: 1em;
  @include mq(lg) {
    max-width: 100%;
    width: 100%;
  }
}

.pageList {
  list-style: none;
  @include mq(lg) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  &__item {
    @include mq(lg) {
      width: calc((100% - 24px - 24px) / 3);
    }
    @include mq(lg) {
      width: calc((100% - 24px) / 2);
    }

    a {
      text-align: center;
      display: block;
      padding: em(20);
      border: 2px solid $color-gray;
      border-radius: 5px;

      &:hover {
        opacity: 0.8;
        transition: 0.3s all ease-in-out;
      }
    }

    &.is-active {
      a {
        font-size: fz(18);
        font-weight: bold;
        padding: em(20, 18);
        border-color: $color-black;
        position: relative;

        &::before,
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
        }

        &::before {
          border-right: 15px solid $color-black;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          z-index: 1;
        }

        &::after {
          border-right: 12px solid $color-white;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          z-index: 2;
        }
      }
    }
  }

  &__item + &__item {
    margin-top: 1em;
    @include mq(lg) {
      margin: 0 0 1em;
    }
  }
}
</style>
