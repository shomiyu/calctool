<template>
  <div class="mainContents">
    <div class="container">
      <div class="contentFlex">
        <!-- calcboard -->
        <article class="calcContents" data-target="">
          <h2 class="titlePrimary">px単位からem単位への変換</h2>
          <!-- fontSize -->
          <section class="calcBoard">
            <h3 class="calcBoard__title">font-sizeに使う</h3>
            <div class="calcBoard__contents">
              <dl class="calcBoard__feild inputFeild">
                <dt class="inputFeild__introduction">現在のfont-sizeが</dt>
                <dd>
                  <form>
                    <label>
                      <input
                        class="inputFeild__entry inputFeild__entryAction"
                        type="text"
                        :placeholder="emFontSize"
                        v-model.number="emFontSize"
                      />
                      <span>pxで</span>
                    </label>
                  </form>
                </dd>
              </dl>
              <dl class="calcBoard__feild inputFeild">
                <dt class="inputFeild__introduction">必要な値が</dt>
                <dd>
                  <form>
                    <label>
                      <input
                        class="inputFeild__entry inputFeild__entryAction"
                        type="text"
                        :placeholder="emChangeSize"
                        v-model.number="emChangeSize"
                      />
                      <span>pxなら</span>
                    </label>
                  </form>
                </dd>
              </dl>
              <dl class="calcBoard__feild outputField">
                <dt class="outputField__introduction">設定値は</dt>
                <dd>
                  <strong
                    class="outputField__answer"
                    v-text="changeEmAnswer"
                  />emです！
                </dd>
              </dl>
            </div>
          </section>
          <!-- /fontSize -->
        </article>
        <div class="sidebar">
          <button type="button">px → em</button>
          <button type="button">line-height</button>
          <button type="button">px → %/vw</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import labelData from 'assets/json/data.json'

export default {
  data() {
    return {
      emFontSize: 16,
      emChangeSize: 24,
      emAnswer: 0,
    }
  },

  computed: {
    changeEmAnswer() {
      const emAnswer = this.emChangeSize / this.emFontSize
      return Math.round(emAnswer * 1000) / 1000
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
}

.contentFlex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.calcContents {
  max-width: 816px;
  width: 100%;
}

.calcBoard {
  background-color: $color-lightYellow;
  border: 2px solid $color-gray;
  border-radius: 5px;
  padding: em(32) em(32) em(40);

  &__title {
    font-size: fz(20);
    margin-bottom: 1em;
  }

  &__contents {
    display: flex;
    align-items: flex-start;
  }

  &__feild {
    width: calc(100% / 3);
    max-width: 250px;
  }
}

.sidebar {
  max-width: 312px;
  width: 100%;
}

.inputFeild {
  &__introduction {
    margin-bottom: em(8);
  }

  &__entry {
    font-size: fz(18);
    line-height: 2;
    width: 120px;
    height: 48px;
    background-color: $color-white;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    padding-left: em(16, 18);
    margin-right: em(16, 18);
  }

  &__entryAction {
    outline: 2px solid transparent;
    outline-offset: 100px;
    transition: all 0.2s ease;

    &:focus {
      outline: 2px solid $color-black;
      outline-offset: 0;
    }

    &:active {
      position: relative;
      top: 4px;
    }
  }
}

.outputField {
  &__introduction {
    margin-bottom: em(8);
  }

  &__answer {
    font-size: fz(32);
    margin-right: em(4, 32);
  }
}
</style>
