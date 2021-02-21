<template>
  <article class="mainContents">
    <div class="container">
      <h2 class="titlePrimary">px単位からem単位への変換</h2>
      <div class="contentFlex">
        <!-- calcboard -->
        <div class="calcContents" data-target="">
          <section>
            <h3>font-sizeに使う</h3>
            <div v-for="(data, catIndex) in calcData" :key="catIndex">
              <div v-for="(content, index) in data.contents" :key="index">
                <template v-if="content.dataType === 'arg'">
                  <dl :class="$options.name">
                    <dt
                      :class="`${$options.name}__introduction`"
                      v-text="content.introduction"
                    />
                    <dd>
                      <form>
                        <label>
                          <input
                            :class="[
                              `${$options.name}__entry`,
                              `${$options.name}__entryAction`,
                            ]"
                            type="text"
                            :placeholder="content.defaultNum"
                            v-model="content.inputNum"
                          />
                          <span v-text="content.endLabel" />
                        </label>
                      </form>
                    </dd>
                  </dl>
                </template>
                <template v-else-if="content.dataType === 'answer'">
                  <dl :class="$options.name">
                    <dt
                      :class="`${$options.name}__introduction`"
                      v-text="content.introduction"
                    />
                    <dd>
                      <span v-text="changeEmAnswer" /><span
                        v-if="content.unit !== ''"
                        v-text="content.unit"
                      />です！
                    </dd>
                  </dl>
                </template>
              </div>
            </div>
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
// import labelData from 'assets/json/data.json'

export default {
  data() {
    return {
      calcData: [
        {
          category: 'pxToEm',
          smallCategory: 'emFontSize',
          contents: [
            {
              dataType: 'arg',
              introduction: '現在のfont-sizeが',
              inputNum: 16,
              endLabel: 'pxで',
            },
            {
              dataType: 'arg',
              introduction: '必要な値が',
              inputNum: 24,
              input: 24,
              endLabel: 'pxなら',
            },
            {
              dataType: 'answer',
              introduction: '設定値は',
              output: Number,
              unit: 'em',
            },
          ],
        },
      ],
    }
  },

  computed: {
    changeEmAnswer() {
      const targetData = this.calcData.find((el) => {
        return el.smallCategory === 'emFontSize'
      })

      const firstNum = targetData.contents[0].inputNum
      const secondNum = targetData.contents[1].inputNum
      let anser = targetData.contents[2].output

      anser = secondNum / firstNum
      return Math.round(anser * 1000) / 1000
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
