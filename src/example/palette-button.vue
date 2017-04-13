<template>
    <div class="miui-wrapper">
        <palette-button class='pb' content='+' :startAngle='0' :radius='90' :offset='90' mainBtnCls='mainBtnCls' ref="target_1"
                        @expand="onMainClick('expand')" @expanded="onMainClick('expanded')" @unexpand="onMainClick('collapse')"
                        style="left:30px;"
        >
            <div class='palette-icon' @touchstart="onChildClick(1)">1</div>
            <div class='palette-icon' @touchstart="onChildClick(2)">2</div>
            <div class='palette-icon' @touchstart="onChildClick(3)">3</div>
            <div class='palette-icon' @touchstart="onChildClick(4)">4</div>
        </palette-button>

        <palette-button class='pb' content='+' :startAngle='270' :radius='90' :offset='180' mainBtnCls='mainBtnCls' ref="target_2"
                        @expand="onMainClick('expand')" @expanded="onMainClick('expanded')" @unexpand="onMainClick('collapse')"
                        style="left:calc(50% - 30px);"
        >
            <div class='palette-icon' @touchstart="onChildClick(1)">1</div>
            <div class='palette-icon' @touchstart="onChildClick(2)">2</div>
            <div class='palette-icon' @touchstart="onChildClick(3)">3</div>
            <div class='palette-icon' @touchstart="onChildClick(4)">4</div>
        </palette-button>

        <palette-button class='pb' content='+' :startAngle='270' :radius='90' :offset='90' mainBtnCls='mainBtnCls' ref="target_3"
                        @expand="onMainClick('expand')" @expanded="onMainClick('expanded')" @unexpand="onMainClick('collapse')"
                        style="right:30px;">
            <div class='palette-icon' @touchstart="onChildClick(1)">1</div>
            <div class='palette-icon' @touchstart="onChildClick(2)">2</div>
            <div class='palette-icon' @touchstart="onChildClick(3)">3</div>
            <div class='palette-icon' @touchstart="onChildClick(4)">4</div>
        </palette-button>
    </div>
</template>
<script lang="babel">
import {
    PaletteButton
} from '../components/index.js';

export default {
    components: {
        PaletteButton
    },
    data () {
        return {
        };
    },
    methods: {
        onMainClick(val) {
            console.log(val);
        },
        onChildClick(val) {
            console.log('当前子元素', val);
            this.$refs.target_1.unexpand();
            this.$refs.target_2.unexpand();
            this.$refs.target_3.unexpand();
        }
    }
};
</script>
<style lang="sass">
.pb {
    color: #fff;
    font-size: 22px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    position: absolute;
    bottom: 30px;
}
.palette-icon {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #26a2ff;
    color: #fff;
    line-height: 30px;
    text-align: center;
}
.mainBtnCls {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 100%;
    background-color: #26a2ff;
}
</style>
