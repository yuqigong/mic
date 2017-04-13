<template>
    <div>
        <div class="nav">
            <mi-button class="item" @click.native.prevent="active = 'tab-container1'">tab 1</mi-button>
            <mi-button class="item" @click.native.prevent="active = 'tab-container2'">tab 2</mi-button>
            <mi-button class="item" @click.native.prevent="active = 'tab-container3'">tab 3</mi-button>
        </div>
        <div class="page-tab-container">
            <tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                <tab-container-item id="tab-container1">
                    <cell v-for="n in 10" title="tab-container 1":key="n" /></cell>
                </tab-container-item>
                <tab-container-item id="tab-container2">
                    <cell v-for="n in 5" title="tab-container 2":key="n" /></cell>
                </tab-container-item>
                <tab-container-item id="tab-container3">
                    <cell v-for="n in 7" title="tab-container 3":key="n" /></cell>
                </tab-container-item>
            </tab-container>
        </div>
    </div>
</template>
<script>
import {
    Cell,
    MiButton,
    TabContainer,
    TabContainerItem
} from '../components/index.js';

export default {
    components: {
        Cell,
        MiButton,
        TabContainer,
        TabContainerItem
    },
    data() {
        return {
            active: 'tab-container1'
        };
    }
};
</script>
<style>
.item {
    display: inline-block;
    width: 20%
}

.nav {
    padding: 10px;
}

.link {
    color: inherit;
    padding: 20px;
    display: block;
}
</style>
