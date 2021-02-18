<template>
  <div :class="$options.name">
    <div v-for="(data, index) in calcData" :key="index">
      <div v-if="data.dataType === 'arg'">
        <Input
          :introduction="data.introduction"
          :input="data.input"
          :label="data.endLabel"
        />
      </div>
      <div v-else-if="data.dataType === 'answer'">
        <Output :output="Number(0)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',

  props: {
    calcData: {
      type: Array,
      required: true,
    },
  },

  computed: {
    getCalcInput() {
      const data = this.calcData

      return data
    },
  },
}
</script>

<style lang="scss" scoped>
.Calc {
}
</style>
