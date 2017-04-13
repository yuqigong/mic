<template>
    <div>
        <mi-header v-show="isShowHeader" fixed :title="thisTitle">
            <router-link to="/" slot="left">
                <mi-button type="small" style="font-size: 14px;width:50px;margin:0;height:30px;line-height:30px;" @click="handleBack">back</mi-button>
            </router-link>
        </mi-header>
        <router-view class="miui-wrapper" v-bind:class="{ none: !isShowHeader}"></router-view>
    </div>
</template>
<script>
import {
    MiButton,
    MiHeader
} from '../components/index.js';

export default {
    components: {
        MiButton,
        MiHeader
    },
    watch: {
        '$route': 'getShow'
    },
    data() {
        return {
            isShowHeader: false,
            thisTitle: 'MicUI'
        }
    },
    methods: {
        handleBack() {
            history.go(-1);
        },
        getShow: function() {
            if (this.$route.path === '/' || this.$route.path === '/header') {
                this.isShowHeader = false;
            } else {
                this.isShowHeader = true;
                this.thisTitle = this.$route.path.slice(1);
            }
        }
    }
}
</script>
<style>
.miui-wrapper {
    padding-top: 40px;
}

.miui-wrapper.none {
    padding-top: 0;
}
</style>
