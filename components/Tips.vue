<template>
  <div :class="$options.name">
    <button type="button">TIPS</button>
    <article>
      <h3>emについて</h3>
      <p>emはfont-sizeを基準に相対的に変化する単位です。</p>
      <p>
        ルートのfont-sizeを基準にするrem単位と違って、親要素のfont-sizeを基準に変化するのがemです。
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Tips',
}
</script>

<style lang="scss" scoped>
.Tips {
}
</style>
