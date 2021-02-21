// import data from 'assets/json/data.json'

export const state = () => ({
  calcBoardState: 'pxToEm',
  emFontSize: {
    fontSize: 16,
    needVal: 24,
    answer: 0,
  },
})

export const mutations = {
  updateCalcBoardState(state, arg) {
    state.calcBoardState = arg
  },

  /**
   * calc method emFontSize
   */
  calcemFontSize(state) {
    state.emFontSize.answer =
      state.emFontSize.needVal / state.emFontSize.fontSize
    return Math.round(state.emFontSize.answer * 1000) / 1000
  },

  calcEmFontSizeFirstArg(state, fontSize) {
    state.emFontSize.fontSize = fontSize

    state.emFontSize.answer =
      state.emFontSize.needVal / state.emFontSize.fontSize
    return Math.round(state.emFontSize.answer * 1000) / 1000
  },

  calcEmFontSizeSecondArg(state, needVal) {
    state.emFontSize.needVal = needVal

    state.emFontSize.answer =
      state.emFontSize.needVal / state.emFontSize.fontSize
    return Math.round(state.emFontSize.answer * 1000) / 1000
  },
}
