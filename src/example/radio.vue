<template>
    <div>
        <div style="padding:5px;">
            <mi-radio class="page-part" title="单选框列表" v-model="value1" :options="options1"></mi-radio>
            选中为: {{value1}}
        </div>
    </div>
</template>
<script>
import {
    MiRadio
} from '../components/index.js';

export default {
    components: {
        MiRadio
    },
    created() {
        this.options1 = ['选项A', '选项B', '选项C'];
    },
    data() {
        return {
            value1: '选项B'
        }
    },
    methods: {
        fichange(val) {
            var that = this;
            console.log(val);
            var i = 0;
            var l = this.values.length;
            for (i = 0; i < l; i++) {
                that.values[i].checked = false;
                if (that.values[i].name === val.name) {
                    that.values[i].checked = true;
                }
            }
        }
    }
}
</script>
