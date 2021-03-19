<template>
  <article class="calcContents">
    <h1 class="titlePrimary" v-text="title" />
    <!-- 縦横比 -->
    <section class="calcSection">
      <h2 class="calcSection__title">padding-top を求める</h2>
      <CalcBoard
        :calc-data="paddingTop"
        @onInput="handleChangeVal($event, 'paddingTop')"
      />
      <div class="tips">
        <button
          type="button"
          :class="{ 'is-active': isShowTip }"
          class="tips__button"
          @click="isShowTip = !isShowTip"
        >
          TIPS
        </button>
        <transition
          name="slide"
          @before-enter="$beforeEnter($event)"
          @enter="$enter($event)"
          @before-leave="$beforeLeave($event)"
          @leave="$leave($event)"
        >
          <div v-show="isShowTip" class="tips__contents slide">
            <section>
              <h3>使い方</h3>
              <p>画像の横と縦の長さを使用します。</p>
              <figure>
                <img
                  src="~/assets/images/pages/img_usage_background_7.png"
                  alt="横300px、縦200pxの画像"
                />
              </figure>
            </section>
            <section>
              <h3>背景画像も画像比率を保持して可変させたい</h3>
              <p>
                背景画像を画像のように縦横比を維持して可変させたいと思ったことはありますか？
              </p>
              <figure>
                <img
                  src="~/assets/images/pages/img_usage_background_3.png"
                  alt="画像の可変"
                />
              </figure>

              <p>
                背景画像はbackground-imageで設定しますが、画像サイズを縦横比で可変させたい場合にはcontainやcoverだけではできません。
              </p>
              <div class="flex flex-2">
                <figure class="flex__item">
                  <img
                    src="~/assets/images/pages/img_usage_background_1.png"
                    alt="background-sizeがcontainのとき"
                  />
                </figure>
                <figure class="flex__item">
                  <img
                    src="~/assets/images/pages/img_usage_background_2.png"
                    alt="background-sizeがcoverのとき"
                  />
                </figure>
              </div>
              <p>
                背景画像はコンテンツではなく、あくまで背景や壁紙のような扱いなのでコンテンツの幅と高さの領域分しか表示されません。<br />
                それを活かして、padding-topを％値で設定することによって、幅によって高さが可変する領域を作り出すことができます。このコンテンツの背景に画像を設定することで縦横比が保たれたまま可変させることが可能となります。
              </p>
              <div class="flex flex-3">
                <figure class="flex__item">
                  <img
                    src="~/assets/images/pages/img_usage_background_4.png"
                    alt="元画像"
                  />
                </figure>
                <figure class="flex__item">
                  <img
                    src="~/assets/images/pages/img_usage_background_5.png"
                    alt="固定値に変換"
                  />
                </figure>
                <figure class="flex__item">
                  <img
                    src="~/assets/images/pages/img_usage_background_6.png"
                    alt="可変値に変換"
                  />
                </figure>
              </div>
            </section>
          </div>
        </transition>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      title: '縦横比を保持したまま可変',
      isShowTip: false,
      paddingTop: [
        {
          id: 0,
          type: 'arg',
          introduction: '要素/画像の幅が',
          val: 300,
          defaultNum: 300,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          introduction: '要素/画像の高さが',
          val: 200,
          defaultNum: 200,
          endLabel: '%なら',
        },
        {
          id: 2,
          type: 'answer',
          introduction: '設定値は',
          val: Number,
          unit: '%',
        },
      ],
    }
  },

  created() {
    const paddingTopAnswer = this.paddingTop[1].val / this.paddingTop[0].val
    this.paddingTop[2].val = Math.round(paddingTopAnswer * 10000) / 100

    // サイドバー更新
    this.$store.commit('updateActiveSidebarMenu', 'keep-rate')
  },

  methods: {
    /**
     * 計算
     */
    handleChangeVal(args, type) {
      if (type === 'paddingTop') {
        // 入力のあったデータを更新
        this.paddingTop[args.id].val = args.argNum

        // 再計算
        const width = this.paddingTop[0].val
        const height = this.paddingTop[1].val
        const answer = height / width

        // 小数点の調整
        this.paddingTop[2].val = Math.round(answer * 10000) / 100
        return this.paddingTop[2].val
      }
    },
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://coding-calc.com/keep-rate',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
