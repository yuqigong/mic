<template>
    <div class="page-navbar">
        <navbar class="page-part" v-model="selected">
            <tab-item id="1">选项一</tab-item>
            <tab-item id="2">选项二</tab-item>
            <tab-item id="3">选项三</tab-item>
        </navbar>
        <div>
            <cell class="page-part" title="当前选中" :right="selected"></cell>
        </div>
        <tab-container v-model="selected">
            <tab-container-item id="1">
                <cell v-for="n in 10" :title="'内容 ' + n" :key="n" />
            </tab-container-item>
            <tab-container-item id="2">
                <cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
            </tab-container-item>
            <tab-container-item id="3">
                <cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
            </tab-container-item>
        </tab-container>
    </div>
</template>
<script>
import {
    Cell,
    Navbar,
    TabItem,
    TabContainer,
    TabContainerItem
} from '../components/index.js';

export default {
    components: {
        Cell,
        Navbar,
        TabItem,
        TabContainer,
        TabContainerItem
    },
    data() {
        return {
            selected: '1'
        }
    }
}
</script>
