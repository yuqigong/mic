<template>
    <div class="page-field">

        <div class="example">
            <mi-badge role="primary" size="big" value="big"></mi-badge>
            <mi-badge role="success" size="big" value="big"></mi-badge>
            <mi-badge role="info" size="big" value="big"></mi-badge>
            <mi-badge role="warning" size="big" value="big"></mi-badge>
            <mi-badge role="danger" size="big" value="big"></mi-badge>
        </div>

        <div class="example">
            <mi-badge role="primary" value="primary"></mi-badge>
            <mi-badge role="success" value="success"></mi-badge>
            <mi-badge role="info" value="info"></mi-badge>
            <mi-badge role="warning" value="warning"></mi-badge>
            <mi-badge role="danger" value="danger"></mi-badge>
        </div>

        <div class="example">
            <mi-badge role="primary" size="small" value="small"></mi-badge>
            <mi-badge role="success" size="small" value="small"></mi-badge>
            <mi-badge role="info" size="small" value="small"></mi-badge>
            <mi-badge role="warning" size="small" value="small"></mi-badge>
            <mi-badge role="danger" size="small" value="small"></mi-badge>
        </div>

        <div class="example">
            <mi-badge color="#ccc" value="custom | #ccc"></mi-badge>
            <mi-badge role="warning" value="i am a very long text and i will ellipsis"></mi-badge>
        </div>
    </div>
</template>

<script>
import {
    MiBadge
} from '../components/index.js';

export default {
    components: {
        MiBadge
    },
    created() {},
    data() {
        return {
        }
    },
    methods: {}
}

</script>
<style scope>
.example {
    margin: 20px;
}
</style>
