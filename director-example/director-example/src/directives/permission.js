export default {
  mounted: function (el, binding, vnode) {
    // const permissionList = vnode.context.$store.state.user.permissionList // 假设权限列表保存在 Vuex 的状态管理中
    const value = binding.value // 假设指令的值为需要的权限
    // eslint-disable-next-line no-debugger
    // 判断用户是否有该权限，没有则移除元素
    // if (!permissionList.includes(value)) {
    //   el.parentNode.removeChild(el)
    // }
    if (!value) {
      el.parentNode.removeChild(el)
    }
  }
}
