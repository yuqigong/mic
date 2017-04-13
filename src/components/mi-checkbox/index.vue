<template>
    <div class="miui-checkbox">
        <label>
            <input type="checkbox" @change="$emit('change',currentValue)" v-model="currentValue" :name="name" />
        </label>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'mic-checkbox',

    created() {},

    data() {
        return {

        };
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        name: String
    },
    computed: {
        currentValue: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    watch: {},
    methods: {}
};
</script>
<style lang="sass" scope>
@import "../../stylesheet/all.scss";

.miui-checkbox {
    >*{
        vertical-align:top;
    }
    line-height:r(20);
    input[type=checkbox] {
        -webkit-appearance: none;
        width: r(20);
        height: r(20);
        border-radius: 50%;
        box-sizing: border-box;
        border: 1px solid $hintTextColor;
        display: inline-block;
        background: $contentBaseColor;
        position: relative;
    }
    input[type=checkbox]:checked {
        background: $baseColor;
        border-color: $baseColor;
    }
    input[type=checkbox]:checked::before {
        content: '';
        display: block;
        width: r(6);
        height: r(10);
        border: 1px solid $contentBaseColor;
        border-width: 0px 1px 1px 0px;
        transform: rotate(45deg);
        position: absolute;
        left: r(6);
        top: r(2);
    }
}
</style>
