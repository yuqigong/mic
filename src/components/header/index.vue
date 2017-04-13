<template>
    <header class="miui-header" :class="{ 'is-fixed': fixed }">
        <div class="miui-header-button is-left">
            <slot name="left"></slot>
        </div>
        <h1 class="miui-header-title" v-text="title"></h1>
        <div class="miui-header-button is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>
<script>
/**
 * mic-header
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <mic-header title="我是标题" fixed>
 *   <miui-button slot="left" icon="back" @click="handleBack">返回</miui-button>
 *   <miui-button slot="right" icon="more"></miui-button>
 * </mic-header>
 */
export default {
    name: 'mi-header',

    props: {
        fixed: Boolean,
        title: String
    }
};
</script>
<style lang="sass">
@import '../../stylesheet/all.scss';

.miui-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: $baseColor;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
}

.miui-header .miui-button {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit
}

.miui-header .miui-button::after {
    content: none;
}

.miui-header.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
}

.miui-header-button {
    -webkit-box-flex: .5;
    -ms-flex: .5;
    flex: .5;
}

.miui-header-button > a {
    color: inherit;
}

.miui-header-button.is-right {
    text-align: right;
}

.miui-header-button.is-left {
    text-align: left;
}

.miui-header-title {
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    line-height: 1.5;
}
</style>
