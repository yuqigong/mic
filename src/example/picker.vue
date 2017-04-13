<template>
    <div>
        <group title="单列选择" type="hint"></group>
        <group>
            <cell
                @click="showSinglePicker"
                title="水果"
                type="input"
                placeholder="请输入内容"
                :input-value="currFruit.join('')">
            </cell>
        </group>
        <picker
            :show="singlePicker"
            :data="fruits"
            title="水果"
            v-model="currFruit"
            @confirm="singlePickerConfirm"
            @cancel="singlePickerCancel">
        </picker>
        <group title="多列选择" type="hint"></group>
        <group>
            <cell
                @click="showMultiPicker"
                title="出生日期"
                type="input"
                placeholder="请输入内容"
                :input-value="currYear.join('-')">
            </cell>
        </group>
        <picker
            :show="multiPicker"
            :data="years"
            title="出生日期"
            v-model="currYear"
            @confirm="multiPickerConfirm"
            @cancel="multiPickerCancel">
        </picker>
    </div>
</template>
<script lang="babel">
import {
    Group,
    Cell,
    Picker
} from '../components/index';

export default {
    data() {
        return {
            singlePicker: false,
            currFruit: [],
            fruits: [
                [{
                    name: '桔子',
                    value: '桔子'
                }, {
                    name: '苹果',
                    value: '苹果'
                }, {
                    name: '芒果',
                    value: '芒果'
                }, {
                    name: '龙眼',
                    value: '龙眼'
                }, {
                    name: '椰子',
                    value: '椰子'
                }]
            ],
            multiPicker: false,
            currYear: ['1988', '02', '05'],
            years: [
                [{
                    name: '1987年',
                    value: '1987'
                }, {
                    name: '1988年',
                    value: '1988'
                }, {
                    name: '1989年',
                    value: '1989'
                }, {
                    name: '1990年',
                    value: '1990'
                }],
                ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
            ]
        };
    },
    components: {
        Group,
        Cell,
        Picker
    },
    methods: {
        showSinglePicker() {
            this.singlePicker = true;
        },
        singlePickerConfirm(currVal) {
            console.log(currVal)
            this.singlePicker = false;
        },
        singlePickerCancel(currVal) {
            console.log(currVal)
            this.singlePicker = false;
        },
        showMultiPicker() {
            this.multiPicker = true;
        },
        multiPickerConfirm(currVal) {
            console.log(currVal)
            this.multiPicker = false;
        },
        multiPickerCancel(currVal) {
            console.log(currVal)
            this.multiPicker = false;
        }
    }
};
</script>
