<template>
  <article class="mainContents">
    <div class="container">
      <h2 class="titlePrimary">px単位からem単位への変換</h2>
      <div class="contentFlex">
        <div class="calcContents">
          <section>
            <h3>font-sizeに使う</h3>
            <Calc :calc-data="getArgs" />
          </section>
        </div>
        <aside class="sidebar">
          <button type="button">px → em</button>
          <button type="button">line-height</button>
          <button type="button">px → %/vw</button>
        </aside>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      emFontSize: [
        {
          dataType: 'arg',
          introduction: '現在のfont-sizeが',
          defaultNum: 16,
          input: 16,
          endLabel: 'pxで',
        },
        {
          dataType: 'arg',
          introduction: '必要な値が',
          defaultNum: 24,
          input: 24,
          endLabel: 'pxなら',
        },
        {
          dataType: 'answer',
          output: Number,
          unit: 'em',
        },
      ],
      // emSpace: {
      //   arg1: 16,
      //   arg2: 24,
      //   answer: Number,
      // },
      // lineHeight: {
      //   arg1: 28,
      //   arg2: 16,
      //   answer: Number,
      // },
      // lineHeightSpace: {
      //   arg1: 48,
      //   arg2: 24,
      //   arg3: 16,
      //   arg4: 40,
      //   answer1: Number,
      //   answer2: Number,
      // },
      // rate: {
      //   arg1: 375,
      //   arg2: 320,
      //   answer: Number,
      // },
      // backCalc: {
      //   arg1: 1440,
      //   arg2: 90,
      //   answer: Number,
      // },
      // retention: {
      //   arg1: 200,
      //   arg2: 300,
      //   answer: Number,
      // },
    }
  },

  computed: {
    getArgs() {
      return this.emFontSize
    },
  },
}
</script>

<style lang="scss" scoped>
.mainContents {
  padding: em(40) 0 em(72);
}

.titlePrimary {
  font-size: fz(24);
  font-family: 'maru-maru-gothic-blr-stdn', sans-serif;
  color: $base-text-color;
  text-align: center;
  margin-bottom: em(32, 24);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 em(24);
}

.contentFlex {
  display: flex;
}
</style>
