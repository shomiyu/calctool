<template>
  <div :class="$options.name">
    <div
      v-for="data in calcData"
      :key="data.id"
      :class="`${$options.name}__feild`"
    >
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
        <Output
          :introduction="data.introduction"
          :output="Number(data.val)"
          :unit="data.unit"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcBoard',

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
      const emitData = {
        argNum: arg,
        id,
      }
      this.$emit('onInput', emitData)
    },
  },
}
</script>

<style lang="scss" scoped>
.CalcBoard {
  display: flex;
  align-items: flex-start;

  &__feild {
    width: calc(100% / 3);
    max-width: 250px;
  }
}
</style>
