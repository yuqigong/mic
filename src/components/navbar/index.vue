<template>
  <div class="miui-navbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * mic-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <mic-navbar :selected.sync="selected">
 *   <mic-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </mic-tab-item>
 * </mic-navbar>
 *
 * <mic-navbar :selected.sync="selected" fixed>
 *   <mic-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </mic-tab-item>
 * </mic-navbar>
 *
 */
export default {
  name: 'mic-navbar',

  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>

<style lang="sass">
@import '../../stylesheet/all.scss';
.miui-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
}
.miui-navbar .miui-tab-item {
    padding: 17px 0;
    font-size: 15px
}
.miui-navbar .miui-tab-item:last-child {
    border-right: 0;
}
.miui-navbar .miui-tab-item.is-selected {
    border-bottom: 3px solid #12C286;
    color: #12C286;
    margin-bottom: -3px;
}
.miui-navbar.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
}
</style>
