<template>
<div>
    <div class="miui-group-title" :class="type" v-if="title">
        {{title}}
    </div>
    <div class="miui-group-gutter"
        v-if="gutter"
        :style="{height: gutter + 'px', backgroundColor: gutterColor }">
    </div>
    <div class="miui-group">
        <slot></slot>
    </div>
</div>
</template>

<script>
/**
 * miui-group
 * @module components/group
 * @param {string | Number} [title] group标题
 * @param {string} [type] group标题样式，可选：default，hint
 * @param {string} [gutter] group上端空白区域，传入像素值，一般为10
 *
 * @example
 * <group title="标题"></group>
 * <group title="标题" type="hint"></group>
 * <group gutter="10">
 *     <div slot="value">描述文字啊哈</div>
 * </group>
 */
export default {
    props: {
        title: [String, Number],
        type: {
            type: String,
            default: 'default'
        },
        gutter: String,
        gutterColor: String
    }
}
</script>

<style lang="sass">
@import '../../stylesheet/all.scss';

//group-title 高度
$groupTitle: 43;

//group左右外边距
$groupMargin: 16;

.miui-group-title {
    position: relative;
    font-size: r($lessBtnSize);
    text-align: left;
    padding-left: r($groupMargin);
    overflow: hidden;
    text-overflow: ellipsis;

    &.default {
        height: r($groupTitle);
        line-height: r($groupTitle);
        background-color: $iconColor;
        color: #fff;
    }

    &.hint {
        height: r(35);
        line-height: r(35);
        background-color: $blankColor;
        color: $supportTextColor;
    }
}

.miui-group-gutter {
    background-color: $blankColor;
}

.miui-group {
    position: relative;
    background-color: $contentBaseColor;

    &:before {
        @extend .setTopLine;
    }

    &:after{
        @extend .setBottomLine;
    }
}
</style>
