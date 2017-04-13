<template>
    <div>
        <group gutter="8">
            <cell title="double">
                <spinner type="double" slot="right"></spinner>
            </cell>
            <cell title="triple">
                <spinner type="triple" slot="right"></spinner>
            </cell>
            <cell title="circle">
                <spinner type="circle" slot="right"></spinner>
            </cell>
        </group>
    </div>
</template>

<script>
import {
    Spinner,
    Group,
    Cell
} from '../components/index.js';

export default {
    components: {
        Group,
        Cell,
        Spinner
    }
}
</script>
