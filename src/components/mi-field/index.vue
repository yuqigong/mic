<template>
    <div class="miui-field">
        <label :for="options.name">{{options.label}}</label>
        <div class="miui-field-right"><slot name="right"></slot></div>
        <div v-if="options.type!=='textarea'">
            <input :type="options.type" :id="options.name" :name="options.name" :value="currentValue" @input="input" @change="change" />
        </div>
        <div v-else>
            <textarea :id="options.name" :rows="options.rows||5" @input="input" @change="change">{{currentValue}}
            </textarea>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'mic-field',

    data() {
        return {};
    },
    created() {
        console.log(this);
    },
    directives: {},
    props: {
        value: String,
        options: Object
    },

    components: {},

    computed: {
        currentValue: {
            get() {
                return this.value;
            }
        }
    },
    methods: {
        input(event) {
            this.$emit('input', event.target.value);
        },
        change() {
            this.$emit('change', event.target.value);
        }
    },

    watch: {}
};
</script>
<style lang="sass" scope>
@import "../../stylesheet/all.scss";

.miui-field {
    display: block;
    >label {
        float: left;
        line-height: r(30);
        width: r(100);
    }
    >div {
        overflow: hidden;
        >input {
            box-sizing: border-box;
            width: 100%;
        }
        >textarea{
            box-sizing: border-box;
            width: 100%;
        }
    }
    input[type=text],
    input[type=password],
    input[type=date] {
        border: 1px solid $hintTextColor;
        height:r(30);
        padding: r(5);
    }
    textarea{
        border: 1px solid $hintTextColor;
        padding: r(5);
        line-height:150%;
    }
    .miui-field-right{
        float:right;
        line-height:r(30);
        margin-left:r(5);
    }
}
</style>
