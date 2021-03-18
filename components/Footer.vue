<template>
  <footer :class="$options.name">
    <p class="copyright">
      <small
        >©2019
        <a href="https://twitter.com/MykiiTech" target="_blank"
          ><img
            src="~/assets/images/icons/twitter.svg"
            alt="twitter"
          />しょうみゆ</a
        >
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
  padding: 0 em(48);
}

.copyright {
  padding: em(20);
  text-align: center;
  border-top: 1px solid $color-gray;

  a {
    margin-left: 0.5em;
  }

  img {
    width: 1.35em;
    vertical-align: middle;
    margin-right: 0.25em;
  }
}
</style>
