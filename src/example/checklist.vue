<template>
    <div>
        <div style="padding:15px;">
            <mi-checkbox v-model="value1">
                <label v-text="value1"></label>
            </mi-checkbox>
        </div>
        <div style="padding:15px;">
            <mi-checkbox v-model="value2">
                <label v-text="value2"></label>
            </mi-checkbox>
        </div>
        <div style="padding:15px;">
            <mi-checkbox v-model="value3">
                <label v-text="value3"></label>
            </mi-checkbox>
        </div>
    </div>
</template>
<script>
import {
    MiCheckbox
} from '../components/index.js';

export default {
    components: {
        MiCheckbox
    },
    data() {
        return {
            value1: true,
            value2: false,
            value3: true
        }
    },
    methods: {}
}
</script>
