<template>
    <div class="miui-radio" @change="$emit('change', currentValue)">
        <label class="miui-radio-title" v-text="title"></label>
        <div v-for="option in options">
            <label class="miui-radio-label" slot="title">
                <span :class="{'is-right': align === 'right'}" class="miui-radio">
          <input
            class="miui-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="miui-radio-core"></span>
                </span>
                <span class="miui-radio-label" v-text="option.label || option"></span>
            </label>
        </div>
    </div>
</template>

<script>
/**
 * mt-radio
 * @module components/radio
 * @desc 单选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <mt-radio v-model="value" :options="['a', 'b', 'c']"></mt-radio>
 */
export default {
  name: 'mi-field',

  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    }
  },

  components: {
  }
};
</script>

<style lang="sass" scope>
@import "../../stylesheet/all.scss";

.miui-radio {
    >* {
        vertical-align: top;
    }
    >div{
        margin:r(10);
    }
    line-height:r(20);
    input[type=radio] {
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
    input[type=radio]:checked {
        background: $baseColor;
        border-color: $baseColor;
    }
    input[type=radio]:checked::before {
        content: '';
        display: block;
        width: r(10);
        height: r(10);
        background:$contentBaseColor;
        border-radius:50%;
        position: absolute;
        left: 50%;
        margin-left:r(-5);
        top: 50%;
        margin-top:r(-5);
    }
}
</style>
