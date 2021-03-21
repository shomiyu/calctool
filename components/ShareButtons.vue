<template>
  <div :class="$options.name">
    <div class="buttonWrapper">
      <button
        type="button"
        :class="`${$options.name}__button`"
        class="twitterButton"
        @click="share('twitter')"
      >
        <img src="~/assets/images/icons/twitter_wh.svg" alt="twitter" />
        <span class="buttonText">share</span>
      </button>
    </div>
    <div class="buttonWrapper">
      <button
        type="button"
        :class="`${$options.name}__button`"
        class="copyButton"
        @click="handleCopy"
      >
        URLをコピー
      </button>
      <transition name="slideFade">
        <span v-if="showCopyMessage" class="copyMessage">Thanks 🥰</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',

  data() {
    return {
      shareUrl: 'https://coding-calc.com/',
      shareText:
        '💻コーディングで必要な単位の計算が楽になる【計算が苦手な文系のための コーディング単位計算ツール】',
      showCopyMessage: false,
    }
  },

  methods: {
    /**
     * SNSでシェアする
     */
    share(sns) {
      let href = ''
      switch (sns) {
        case 'twitter':
          href = `https://twitter.com/intent/tweet?url=${this.shareUrl}&text=${this.shareText}&related=MykiiTech&via=MykiiTech`
          break
      }
      window.open(href, '_blank')
    },

    /**
     * クリップボードにコピーする
     */
    handleCopy() {
      this.$copyText(this.shareUrl).then(
        () => {
          this.showCopyMessage = true
          setTimeout(() => (this.showCopyMessage = false), 800)
        },
        (e) => {
          // eslint-disable-next-line
          console.log(e)
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.ShareButtons {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @include mq(sm) {
    flex-direction: column;
  }

  &__button {
    display: block;
    width: 180px;
    line-height: 56px;
    height: 56px;
    border: 2px solid;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    @include mq(sm) {
      width: 100%;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}

.buttonWrapper {
  position: relative;
  @include mq(sm) {
    width: 100%;
  }

  & + .buttonWrapper {
    margin: 0 0 0 em(40);
    @include mq() {
      margin: 0 0 0 em(24);
    }
    @include mq(sm) {
      margin: em(16) 0 0;
    }
  }
}

.buttonText {
  font-size: fz(18);
  text-transform: uppercase;
}

.twitterButton {
  border-color: $color-twitter;
  background-color: $color-twitter;

  img {
    width: 20px;
    margin-bottom: 4px;
    vertical-align: middle;
  }

  .buttonText {
    margin-left: 4px;
    color: $color-white;
  }
}

.copyButton {
  border-color: $color-gray;
}

.copyMessage {
  display: inline-block;
  width: 100%;
  text-align: center;
  position: absolute;
  top: -30px;
  left: 0%;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 1em;
    border-radius: 2px;
    background-color: $color-black;
  }

  &::before {
    margin-right: 1em;
    transform: rotate(-25deg);
  }
  &::after {
    margin-left: 1em;
    transform: rotate(25deg);
  }
}
</style>
