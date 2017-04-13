<template>
    <div v-show="$parent.swiping || id === $parent.currentActive" class="miui-tab-container-item">
        <slot></slot>
    </div>
</template>
<script>
/**
 * mic-tab-container-item
 * @desc 搭配 tab-container 使用
 * @module components/tab-container-item
 *
 * @param {number|string} [id] - 该项的 id
 *
 * @example
 * <mic-tab-container v-model="selected">
 *   <mic-tab-container-item id="1"> 内容A </mic-tab-container-item>
 *   <mic-tab-container-item id="2"> 内容B </mic-tab-container-item>
 *   <mic-tab-container-item id="3"> 内容C </mic-tab-container-item>
 * </mic-tab-container>
 */
export default {
    name: 'mic-tab-container-item',

    props: ['id']
};
</script>

<style lang="sass">
@import '../../stylesheet/all.scss';
.miui-tab-container-item {
    -ms-flex-negative: 0;
        flex-shrink: 0;
    width: 100%
}
</style>
