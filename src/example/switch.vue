<template>
    <div>
        <div style="padding:5px;">
            <mi-switch v-model="value1" @change="handleChange">
                <label v-text="value1"></label>
            </mi-switch>
        </div>
        <div style="padding:5px;">
            <mi-switch v-model="value2" @change="handleChange">
                <label v-text="value2"></label>
            </mi-switch>
        </div>
        <div style="padding:5px;">
            <mi-switch v-model="value3" @change="handleChange">
                <label v-text="value3"></label>
            </mi-switch>
        </div>
    </div>
</template>
<script>
import {
    MiSwitch
} from '../components/index.js';

export default {
    components: {
        MiSwitch
    },
    data() {
        return {
            value1: false,
            value2: false,
            value3: true
        }
    },
    methods: {
        handleChange(checked) {
            console.log(checked);
        }
    }
}
</script>
