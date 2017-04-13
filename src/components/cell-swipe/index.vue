<template>
    <div>
        <cell
        :title="title"
        @touchstart.native="startDrag"
        @touchmove.native="onDrag"
        @touchend.native="endDrag">
        <div
        slot="right"
        class="miui-cell-swipe clearfix"
        :style="{right: right + 'px'}">
            <div class="miui-cell-swipe-item func">功能</div>
            <div class="miui-cell-swipe-item delete">删除</div>
        </div>
        </cell>
    </div>
</template>

<script>
import Cell from '../cell/index.vue';

export default {
    components: {
        Cell
    },
    props: {
        title: String
    },
    data () {
        return {
            position: {
                x: 0,
                y: 0
            },
            done: false,
            right: -160
        }
    },
    methods: {
        startDrag (event) {
            this.position.x = event.touches[0].pageX;
        },
        onDrag (event) {
            let offset = this.position.x - event.touches[0].pageX
            if (offset <= -60) {
                this.done = true;
                this.right = -160;
            }
            if (offset > 0 && offset < 120) {
                this.right = offset - 160;
            }
            if (offset >= 120) {
                this.done = true;
                this.right = 0;
            }
            event.preventDefault();
        },
        endDrag (event) {
            if (!this.done) {
                this.right = -160;
            }
            this.done = false
        }
    }
}
</script>

<style lang="sass">
@import '../../stylesheet/all.scss';

.miui-cell-swipe {
    position: absolute;
    top: 0;
    width: 160px;
    height: r(55);
    transition: 0.2s ease-in-out;

    .miui-cell-swipe-item {
        float: left;
        height: r(55);
        line-height: r(55);
        text-align: center;
        font-size: r($lessTitleSize);

        &.func {
            width: 70%;
            color: #fff;
            background-color: $borderColor;
        }
        &.delete {
            width: 30%;
            color: #fff;
            background-color: $alertColor;
        }
    }
    &.animation {
        right: 0;
        transition: 0.5s ease-in-out;
    }
    &.init {
        right: -160px;
        transition: 0.5s ease-in-out;
    }
}
</style>




