<template>
  <nav :class="$options.name">
    <h2 class="visuallyHidden">グローバルナビゲーション</h2>
    <ul class="pageList">
      <li class="pageList__item">
        <nuxt-link to="/">px → em</nuxt-link>
      </li>
      <li class="pageList__item">
        <nuxt-link to="/lineheight">line-height</nuxt-link>
      </li>
      <li class="pageList__item">
        <nuxt-link to="/px-rate">px → %/vw</nuxt-link>
      </li>
      <li class="pageList__item">
        <nuxt-link to="/rate-px">% → px</nuxt-link>
      </li>
      <li class="pageList__item">
        <nuxt-link to="/keep-rate">縦横比を保持したまま可変</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style lang="scss" scoped>
.Sidebar {
  max-width: 312px;
  width: 100%;
}

.pageList {
  list-style: none;

  &__item {
    a {
      font-size: fz(18);
      text-align: center;
      display: block;
      padding: em(20, 18);
      border: 2px solid $color-gray;
      border-radius: 5px;
    }
  }

  &__item + &__item {
    margin-top: 1em;
  }
}
</style>
