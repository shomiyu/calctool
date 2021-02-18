<template>
  <div :class="$options.name">
    <div v-for="(data, index) in calcData" :key="index">
      <template v-if="data.dataType === 'arg'">
        <Input
          :introduction="data.introduction"
          v-model="data.input"
          :placeholder="data.defaultNum"
          :label="data.endLabel"
        />
      </template>
      <template v-else-if="data.dataType === 'answer'">
        <Output :output="Number(0)" />
      </template>
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
