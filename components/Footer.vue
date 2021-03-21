<template>
  <footer :class="$options.name">
    <div :class="`${$options.name}__inner`" class="container">
      <ShareButtons class="shareButtons" />
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
    </div>
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
  @include mq() {
    padding: 0 1em;
  }

  &__inner {
    padding: em(40) 0 em(20);
    border-top: 1px solid $color-gray;
  }
}

.copyright {
  padding: em(20);
  text-align: center;

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
