<template>
<div class="page">
    <mi-button text="下一步" type="large" :disabled="disabled" @click="showAction" margin-top="23" margin-bottom="10"></mi-button>
    <mi-button text="完成" type="middle" @click="showDialog" margin-top="23" margin-bottom="10"></mi-button>
    <mi-button text="确定" type="small" @click="showAlert" margin-top="23"></mi-button>
    <mi-button text="确定" bg-color="red" type="small" @click="showAlert" margin-top="23"></mi-button>
    <mi-button text="确定" bg-color="green" type="small" @click="showAlert" margin-top="23"></mi-button>
    <mi-button text="确定" bg-color="blue" type="small" @click="showAlert" margin-top="23"></mi-button>
    <mi-button text="确定" bg-color="orange" type="small" @click="showAlert" margin-top="23"></mi-button>
    <mi-dialog
        v-show="dialogShow"
        type="dialog"
        alert="确定"
        title="提示"
        content="Dialog"
        primary="取消"
        secondary="确定"
        alert-bg="#fff"
        alert-color="#636363"
        @primary="hideDialog"
        @secondary="hideDialog">
    </mi-dialog>
    <mi-dialog
        v-show="alertShow"
        type="alert"
        title="提示"
        alert="确定"
        content="Alert"
        alert-bg="#fff"
        alert-color="#636363"
        @alert="hideAlert">
    </mi-dialog>
    <action :show.sync="actionShow" btn="取消" @click="hideAction">
        <action-item item="item1" href="http://www.baidu.com" @click="itemClick(1)"></action-item>
        <action-item item="item2" @click="itemClick(2)"></action-item>
    </action>
</div>
</template>

<script>
import {
    MiButton,
    MiDialog,
    Action,
    ActionItem
} from '../components/index.js';

export default {
    components: {
        MiButton,
        MiDialog,
        Action,
        ActionItem
    },
    data () {
        return {
            value: '测试',
            actionShow: false,
            dialogShow: false,
            alertShow: false,
            disabled: true
        }
    },
    methods: {
        showAction () {
            this.actionShow = true
        },
        hideAction () {
            this.actionShow = false
        },
        showDialog () {
            this.dialogShow = true
        },
        hideDialog () {
            this.dialogShow = false
        },
        showAlert () {
            this.alertShow = true
        },
        hideAlert () {
            this.alertShow = false
        },
        itemClick (i) {
            console.log(111111)
        }
    }
}
</script>
