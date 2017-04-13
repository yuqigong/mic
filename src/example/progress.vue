<template>
    <div class="page-progress">
        <cell title="默认">
            <mi-progress slot="value"></mi-progress>
        </cell>
        <cell title="设置 value">
            <mi-progress slot="value" :value="20"></mi-progress>
        </cell>
        <cell title="左右文字">
            <mi-progress slot="value" :value="40" style="width:60%">
                <div slot="start">0%</div>
                <div slot="end">100%</div>
            </mi-progress>
        </cell>
        <cell title="定义线宽">
            <mi-progress slot="value" :value="60" :bar-height="6"></mi-progress>
        </cell>
        <div class="page-progress-wrapper">
            <mi-button type="large" @click.native="uploadFile">上传文件</mi-button>
            <mi-progress :value="value" v-if="progressVisible" transition="progress-fade">
                <div slot="end">{{ value }}%</div>
            </mi-progress>
            <toast :msg="toastMsg" :time="1000" @on-hide="hideToast"></toast>
        </div>
    </div>
</template>
<script>
import {
    MiButton,
    Cell,
    Toast,
    MiProgress
} from '../components/index';

export default {
    components: {
        MiButton,
        Cell,
        Toast,
        MiProgress
    },
    data() {
        return {
            progressVisible: false,
            value: 0,
            uploading: false,
            timer: null,
            toastMsg: ''
        };
    },
    watch: {
        value(val) {
            if (val >= 100) {
                this.uploading = false;
                this.progressVisible = false;
                this.showToast();
                clearTimeout(this.timer);
            }
        }
    },
    methods: {
        uploadFile() {
            if (!this.uploading) {
                this.value = 0;
                this.progressVisible = true;
                this.uploading = true;
                this.timer = setInterval(() => this.value++, 0);
            }
        },
        showToast() {
            this.toastMsg = '上传成功';
        },
        hideToast() {
            this.toastMsg = '';
        }
    }
};
</script>
<style>
.page-progress-wrapper {
    padding: 0 10px;
    margin-top: 50px;
}

.page-progress-wrapper .miui-progress {
    position: relative;
}

.page-progress-wrapper .progress-fade-transition {
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}

.page-progress-wrapper .progress-fade-enter,
.page-progress-wrapper .progress-fade-leave {
    opacity: 0;
}
</style>
