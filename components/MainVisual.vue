<template>
  <div :class="$options.name">
    <div
      :class="[
        `${$options.name}__column`,
        { [`${$options.name}__column--reverse`]: isRightSideNumChara },
      ]"
    >
      <div :class="`${$options.name}__illust`">
        <img
          :src="require(`~/assets/images/shared/illust_${getNumChara}.svg`)"
          alt=""
        />
      </div>
      <section :class="`${$options.name}__todaysSaying`">
        <h2 class="title">きょうのめいげん</h2>
        <p class="saying" v-text="getTodaysQuotes.contents" />
        <p class="name" v-text="getTodaysQuotes.name" />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainVisual',

  computed: {
    /**
     * 日替わりめいげんの処理
     *
     * @return {Object}
     */
    getTodaysQuotes() {
      const quotesList = this.$store.getters.getQuotesList

      const today = this.getTodaysDate()
      return quotesList[today - 1]
    },

    /**
     * 今日の日付の一桁目を取得する
     *
     * @return {Number}
     */
    getNumChara() {
      // const today = 1
      const today = this.getTodaysDate()
      const lastNum = today.toString().split('').pop()
      return lastNum
    },

    /**
     * 数字キャラを右に寄せるかどうか
     *
     * @return {Boolean}
     */
    isRightSideNumChara() {
      const numChara = Number(this.getNumChara)
      const rightSideNumCharaList = [1, 2, 3, 4, 5, 7, 8, 0]

      if (rightSideNumCharaList.includes(numChara)) {
        return true
      }

      return false
    },
  },

  methods: {
    /**
     * 今日の日付を返す関数
     *
     * @return {Number} - dd
     */
    getTodaysDate() {
      const today = new Date()
      const day = today.getDate()

      return day
    },
  },
}
</script>

<style lang="scss" scoped>
.MainVisual {
  $parent: &;
  padding: em(72) 1em;
  background-image: linear-gradient(25deg, #0634fc, #4061d9, #4085b6, #02a791);

  &__column {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @include mq() {
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    &--reverse {
      flex-direction: row-reverse;
      @include mq() {
        flex-direction: column-reverse;
        align-items: flex-end;
      }

      #{$parent}__todaysSaying {
        margin: 0 em(40) 0 0;
        @include mq() {
          margin: auto auto em(24);
        }
      }
    }
  }

  &__illust {
    height: 80px;
    max-width: 75px;

    img {
      max-height: inherit;
      height: 100%;
    }
  }

  &__todaysSaying {
    color: $sub-text-color;
    width: 450px;
    margin: 0 0 0 em(40);
    @include mq() {
      max-width: 450px;
      width: 100%;
      margin: auto auto em(24);
    }

    .title {
      font-size: fz(18);
      margin-bottom: em(10, 18);
    }

    .saying {
      line-height: 1.7;
      white-space: pre-wrap;
    }

    .name {
      font-size: fz(14);
      text-align: right;
      margin-top: em(8, 14);
    }
  }
}
</style>
