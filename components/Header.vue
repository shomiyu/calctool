<template>
  <header :class="$options.name">
    <h1 :class="`${$options.name}__title`">
      <em>計算が苦手な文系のための</em>コーディング単位計算ツール
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
.Header {
  background-color: $color-white;
  padding: em(19) em(48);
  line-height: 1;
  box-shadow: 0 0 2px rgba(221, 221, 221, 0.8);

  &__title {
    font-size: fz(18);

    em {
      font-size: fz(12);
      font-style: normal;
      display: block;
      margin-bottom: em(8, 12);
    }
  }
}
</style>
