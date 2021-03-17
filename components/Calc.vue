<template>
  <div :class="$options.name">
    <div v-for="data in calcData" :key="data.id">
      <template v-if="data.type === 'arg'">
        <Input
          :introduction="data.introduction"
          :input="data.defaultNum"
          :placeholder="data.defaultNum"
          :label="data.endLabel"
          @onInput="handleInput($event, data.id)"
        />
      </template>
      <template v-else-if="data.type === 'answer'">
        <Output :output="Number(data.val)" />
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

  methods: {
    handleInput(arg, id) {
      this.$emit('onInput', arg, id)
    },
  },
}
</script>

<style lang="scss" scoped>
.Calc {
}
</style>
