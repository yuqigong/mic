<template>
	<div>
        <group title="基本功能" type="hint">
            <cell v-for="item in cells1" :key="item.title">
                <div slot="title" class="range-title" >
                    <p>{{item.title}}</p>
                    <p class="small">{{item.value}}</p>
                </div>
                <mi-range slot="value" v-model="item.value">
                    <div slot="start" v-if="item.start">{{ item.start }}</div>
                    <div slot="end" v-if="item.end">{{ item.end }}</div>
                </mi-range>
            </cell>
        </group>
        <group title="自定义" type="hint">
            <cell v-for="item in cells2" :key="item.title">
                <div slot="title" class="range-title" >
                    <p>{{item.title}}</p>
                    <p class="small">{{item.value}}</p>
                </div>
                <mi-range slot="value" v-model="item.value" :min="item.min || 0" :max="item.max || 100" :step="item.step || 1" :disabled="item.disabled" :bar-height="item.barHeight || 3" :bar-color = "item.barColor || '#12C286'">
                    <div slot="start" v-if="item.start">{{ item.start }}</div>
                    <div slot="end" v-if="item.end">{{ item.end }}</div>
                </mi-range>
            </cell>
        </group>
	</div>
</template>
<script>
import {
	Cell,
    Group,
    MiRange
} from '../components/index.js';
export default {
    components: {
    	MiRange,
        Group,
    	Cell
    },
    data () {
        return {
            value1:0,
            value2:20,
            value3:0,
            value4:0,
            value5:10,
            value6:0,
            value7:50,
            cells1:null,
            cells2:null
        }
    },
    mounted(){
        this.cells1 = [{
            title: '默认',
            value: this.value1
        }, {
            title: '预设 value',
            value: this.value2
        }, {
            title: '左右文字',
            value: this.value3,
            start: '0',
            end: '100'
        }];
        this.cells2 = [{
            title: '定义步长',
            value: this.value4,
            step: 20,
            start: '0',
            end: '100'
        }, {
            title: '定义区间',
            value: this.value5,
            start: '10',
            end: '90',
            min: 10,
            max: 90
        }, {
            title: '定义线宽',
            value: this.value6,
            barHeight: 5
        }, {
            title: '置为无效',
            value: this.value7,
            barColor:'rgba(18,194,134,0.3)',
            disabled: true
        }]
    }
}
</script>
<style lang="sass">
.range-title{
    width:6rem;
    p{
        line-height:1.2;
    }
    .small{
        font-size:12px;
    }
}
.miui-cell .miui-cell-bd{
    overflow:visible;
}
</style>
