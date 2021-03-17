<template>
  <footer :class="$options.name">
    <p class="copyright">
      <small
        >©2019
        <a href="https://twitter.com/MykiiTech" target="_blank">しょうみゆ</a>
      </small>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.Footer {
}

.copyright {
  padding: em(20);
  max-width: 1200px;
  margin: auto;
  text-align: center;
  border-top: 1px solid $color-gray;
}
</style>
