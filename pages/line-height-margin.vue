<template>
  <article class="calcContents">
    <h1 class="titlePrimary" v-text="title" />
    <!-- 縦横比 -->
    <section class="calcSection">
      <h2 class="calcSection__title">要素間の余白を求める</h2>
      <!-- ひとつめの要素 -->
      <div class="groupContents groupContents--hasBorder">
        <div
          v-for="data in getFirstContentsGroup('firstContents')"
          :key="data.id"
          class="groupContents__field"
        >
          <Input
            :introduction="data.introduction"
            :input="data.defaultNum"
            :placeholder="data.defaultNum"
            :label="data.endLabel"
            @onInput="handleChangeVal($event, data.id)"
          />
        </div>
      </div>

      <!-- ふたつめの要素 -->
      <div class="groupContents groupContents--hasBorder">
        <div
          v-for="data in getFirstContentsGroup('secondContents')"
          :key="data.id"
          class="groupContents__field"
        >
          <Input
            :introduction="data.introduction"
            :input="data.defaultNum"
            :placeholder="data.defaultNum"
            :label="data.endLabel"
            @onInput="handleChangeVal($event, data.id)"
          />
        </div>
      </div>

      <!-- ほしい余白 -->
      <div class="groupContents">
        <Input
          v-for="data in getFirstContentsGroup('inputContents')"
          :key="data.id"
          :introduction="data.introduction"
          :input="data.defaultNum"
          :placeholder="data.defaultNum"
          :label="data.endLabel"
          @onInput="handleChangeVal($event, data.id)"
        />
      </div>

      <!-- 出力 -->
      <div class="groupContents">
        <div
          v-for="data in getFirstContentsGroup('answerContents')"
          :key="data.id"
          class="groupContents__field"
        >
          <Output
            :introduction="data.introduction"
            :output="Number(data.val)"
            :unit="data.unit"
          />
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'LineHeightMargin',

  data() {
    return {
      title: 'line-heightを含めた要素間の余白の計算',
      isShowTip: false,
      lineHeightMargin: [
        {
          id: 0,
          type: 'arg',
          group: 'firstContents',
          introduction: '要素の行間が',
          val: 40,
          defaultNum: 40,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          group: 'firstContents',
          introduction: '要素のfont-sizeが',
          val: 24,
          defaultNum: 24,
          endLabel: 'pxで',
        },
        {
          id: 2,
          type: 'arg',
          group: 'secondContents',
          introduction: '要素の行間が',
          val: 28,
          defaultNum: 28,
          endLabel: 'pxで',
        },
        {
          id: 3,
          type: 'arg',
          group: 'secondContents',
          introduction: '要素のfont-sizeが',
          val: 16,
          defaultNum: 16,
          endLabel: 'pxで',
        },
        {
          id: 4,
          type: 'arg',
          group: 'inputContents',
          introduction: '必要な値が',
          val: 40,
          defaultNum: 40,
          endLabel: 'pxなら',
        },
        {
          id: 5,
          type: 'answer',
          group: 'answerContents',
          introduction: 'ひとつめの要素からの設定値は',
          val: Number,
          unit: 'em',
        },
        {
          id: 6,
          type: 'answer',
          group: 'answerContents',
          introduction: 'ふたつめの要素からの設定値は',
          val: Number,
          unit: 'em',
        },
      ],
    }
  },

  computed: {
    /**
     * リストレンダリング用のデータを取得する
     */
    getFirstContentsGroup() {
      return function (group) {
        return this.lineHeightMargin.filter((el) => el.group === group)
      }
    },
  },

  created() {
    // 初期計算
    const firstLineHeightPx = this.lineHeightMargin[0].val
    const firstFontSizePx = this.lineHeightMargin[1].val
    const secondLineHeightPx = this.lineHeightMargin[2].val
    const secondFontSizePx = this.lineHeightMargin[3].val
    const inputMargin = this.lineHeightMargin[4].val

    const firstAnser =
      (inputMargin -
        (firstLineHeightPx - firstFontSizePx) / 2 -
        (secondLineHeightPx - secondFontSizePx) / 2) /
      firstFontSizePx

    const secondAnser =
      (inputMargin -
        (firstLineHeightPx - firstFontSizePx) / 2 -
        (secondLineHeightPx - secondFontSizePx) / 2) /
      secondFontSizePx

    this.lineHeightMargin[5].val = Math.round(firstAnser * 1000) / 1000
    this.lineHeightMargin[6].val = Math.round(secondAnser * 1000) / 1000
  },

  mounted() {
    this.$adobeFonts(document)
    this.$nuxt.$emit('updateMenu', this.$options.name)
  },

  methods: {
    /**
     * 計算
     */
    handleChangeVal(arg, dataId) {
      // 入力のあったデータを更新
      this.lineHeightMargin[dataId].val = arg

      const firstLineHeightPx = this.lineHeightMargin[0].val
      const firstFontSizePx = this.lineHeightMargin[1].val
      const secondLineHeightPx = this.lineHeightMargin[2].val
      const secondFontSizePx = this.lineHeightMargin[3].val
      const inputMargin = this.lineHeightMargin[4].val

      const firstAnser =
        (inputMargin -
          (firstLineHeightPx - firstFontSizePx) / 2 -
          (secondLineHeightPx - secondFontSizePx) / 2) /
        firstFontSizePx

      const secondAnser =
        (inputMargin -
          (firstLineHeightPx - firstFontSizePx) / 2 -
          (secondLineHeightPx - secondFontSizePx) / 2) /
        secondFontSizePx

      this.lineHeightMargin[5].val = Math.round(firstAnser * 1000) / 1000
      this.lineHeightMargin[6].val = Math.round(secondAnser * 1000) / 1000
    },
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://coding-calc.com/line-height-margin',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.groupContents {
  display: flex;
  align-items: flex-start;
  @include mq() {
    flex-direction: column;
  }

  &--hasBorder {
    border: 1px solid $color-gray;
    border-radius: 5px;
    padding: em(24) em(40);
  }

  &__field {
    width: calc(100% / 2);
    @include mq() {
      width: 100%;
    }
  }

  &__field + &__field {
    @include mq() {
      margin-top: 1.5em;
    }
  }

  & + & {
    margin-top: 2em;
  }
}
</style>
