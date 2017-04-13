<template>
    <div :style="{display: show ? 'block' : 'none'}">
        <div class="miui-mask"></div>
        <div class="miui-action" :class="{'miui-action-toggle': show}">
            <div class="miui-action-group">
                <slot></slot>
            </div>
            <a class="miui-action-btn" @click="handleClick" :style="{color: color}">
            {{btn}}
        </a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        show: Boolean,
        color: String,
        btn: String
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event)
        }
    }
}
</script>
<style lang="sass">
@import '../../stylesheet/all.scss';

.miui-action {
    position: fixed;
    bottom: 0;
    left: r(16);
    right: r(16);
    z-index: 1999;
    transform: translate(0, 100%);
    transition: transform .3s;
    &.miui-action-toggle {
        bottom: r(10);
        transform: translate(0, 0);
    }
    .miui-action-style {
        height: r(52);
        background-color: #fff;
        border-radius: r(5);
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: r($normalSize);
    }
    .miui-action-group {
        border-radius: r(5);
        overflow: hidden;
        .miui-action-item {
            position: relative;
            display: block;
            height: r(52);
            line-height: r(52);
            background-color: #fff;
            text-align: center;
            color: $baseColor;
            font-size: r($normalSize);
            &:before {
                @extend .setTopLine;
            }
            &:first-child:before {
                display: none;
            }
        }
    }
    .miui-action-btn {
        display: block;
        text-align: center;
        margin-top: r(12);
        color: $alertColor;
        line-height: r(52);
        @extend .miui-action-style;
    }
}
</style>
