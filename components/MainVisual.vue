<template>
  <div :class="$options.name">
    <div
      :class="[
        `${$options.name}__column`,
        { [`${$options.name}__column--reverse`]: isReverse },
      ]"
    >
      <div :class="`${$options.name}__illust`">
        <img src="/images/illust_one.svg" alt="" />
      </div>
      <section :class="`${$options.name}__todaysSaying`">
        <h2 class="title">きょうのめいげん</h2>
        <p class="saying">
          小さいことを積み重ねるのが、とんでもないところへ行くただひとつの道だと思っています
        </p>
        <p class="name">イチロー</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainVisual',

  data() {
    return {
      isReverse: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.MainVisual {
  padding: em(72) 1em;
  background-image: linear-gradient(25deg, #0634fc, #4061d9, #4085b6, #02a791);

  &__column {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  &__illust {
    height: 80px;

    img {
      max-height: inherit;
      height: 100%;
    }
  }

  &__todaysSaying {
    color: $sub-text-color;
    width: 450px;
    margin-left: em(40);

    .title {
      font-size: fz(18);
      margin-bottom: em(10, 18);
    }

    .saying {
      line-height: 1.7;
    }

    .name {
      font-size: fz(14);
      text-align: right;
      margin-top: em(8, 14);
    }
  }
}
</style>
