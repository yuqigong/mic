<template>
    <div class="">
        <div class="miui-switch">
            <label>
                <input type="checkbox" @change="$emit('change', currentValue)" v-model="currentValue" />
                <span class="miui-switch-control"></span>
            </label>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'miui-switch',
    data() {
        return {}
    },
    props: {
        value: Boolean
    },
    computed: {
        currentValue: {
            get() {
                return this.value;
            },
            set(val) {
                // 改变currentValue值的时候
                // 触发input事件,并传入改变的值
                this.$emit('input', val);
            }
        }
    }
}
</script>
<style lang="sass" rel="stylesheet/scss">
@import "../../stylesheet/all.scss";

.miui-switch {
    display: inline-block;
    line-height: r(30);
    vertical-align: top;
}

.miui-switch>label {
    position: relative;
    height:r(32);
}

.miui-switch > * {
    vertical-align: top;
}

.miui-switch-control {
    display: inline-block;
    border-radius: r(15);
    width: r(60);
    height: r(30);
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: $contentBaseColor;
    position: relative;
    transition:all 0.3s;
}

.miui-switch input[type=checkbox] {
    /*display: none;*/
    -webkit-appearance: none;
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    background: transparent;
    opacity: 0.0;
    z-index: 99;
}

.miui-switch input[type=checkbox] + .miui-switch-control::before {
    content: '';
    width: r(30);
    height: r(30);
    display: block;
    background: $contentBaseColor;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    transition:all 0.3s;
    transform:translateX(0%);
}

.miui-switch input[type=checkbox]:checked + .miui-switch-control {
    background: $baseColor;
}

.miui-switch input[type=checkbox]:checked + .miui-switch-control::before {
    transform:translateX(100%);
}
</style>
