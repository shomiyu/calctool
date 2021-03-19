<template>
  <header :class="$options.name">
    <p :class="`${$options.name}__title`">
      <nuxt-link to="/">
        <em>
          <img
            class="copy"
            src="~/assets/images/shared/logo_copy.svg"
            alt="計算が苦手な文系のための"
          />
        </em>
        <img
          class="title"
          src="~/assets/images/shared/logo_title.svg"
          alt="コーディング単位計算ツール"
        />
      </nuxt-link>
    </p>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.Header {
  width: 100%;
  background-color: $color-white;
  padding: em(19) em(48);
  line-height: 1;
  box-shadow: 0 0 2px rgba(221, 221, 221, 0.8);
  @include mq(lg) {
    padding: em(16) em(24);
  }

  &__title {
    font-size: fz(18);
    font-weight: bold;

    em {
      font-size: fz(12);
      font-style: normal;
      display: block;
      margin-bottom: em(8, 12);
    }
  }
}

.copy {
  max-width: 170px;
}

.title {
  max-width: 260px;
  @include mq(lg) {
    max-width: 200px;
  }
}
</style>
