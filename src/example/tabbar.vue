<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <div>
                <cell class="page-part" title="当前选中" :right="selected" />
            </div>
            <tab-container class="page-tabbar-container" v-model="selected">
                <tab-container-item id="保险">
                    <cell v-for="n in 10" :title="'保险 ' + n" :key="n" />
                </tab-container-item>
                <tab-container-item id="订单">
                    <cell v-for="n in 5" :title="'订单 ' + n" :key="n" />
                </tab-container-item>
                <tab-container-item id="发现">
                    <cell v-for="n in 7" :title="'发现 ' + n" :key="n" />
                </tab-container-item>
                <tab-container-item id="我的">
                    <div class="page-part">
                        <cell v-for="n in 12" :title="'我的 ' + n" :key="n" />
                    </div>
                </tab-container-item>
            </tab-container>
        </div>
        <tabbar v-model="selected" fixed>
            <tab-item id="保险">
                保险
            </tab-item>
            <tab-item id="订单">
                订单
            </tab-item>
            <tab-item id="发现">
                发现
            </tab-item>
            <tab-item id="我的">
                我的
            </tab-item>
        </tabbar>
    </div>
</template>
<script>
import {
    Cell,
    Tabbar,
    TabItem,
    TabContainer,
    TabContainerItem
} from '../components/index.js';

export default {
    components: {
        Cell,
        Tabbar,
        TabItem,
        TabContainer,
        TabContainerItem
    },
    data() {
        return {
            selected: '保险'
        };
    }
};
</script>
<style>
.page-tabbar {
    overflow: hidden;
    height: 100vh;
}

.page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
}
</style>
