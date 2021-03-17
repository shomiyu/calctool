/**
 * ----------------------------
 * スライドトグルの高さ取得用関数
 * ----------------------------
 */
const beforeEnter = (el) => {
  el.style.height = '0'
}

const enter = (el) => {
  el.style.height = el.scrollHeight + 'px'
}

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + 'px'
}

const leave = (el) => {
  el.style.height = '0'
}

export default ({ $app }, inject) => {
  inject('beforeEnter', beforeEnter)
  inject('enter', enter)
  inject('beforeLeave', beforeLeave)
  inject('leave', leave)
}
