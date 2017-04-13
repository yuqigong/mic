<template>
    <div class="page">
        <mi-button text="点击弹出indicator" type="large" @click="showIndicator" style="margin-top:20px"></mi-button>
        <mi-button text="点击弹出有文字的indicator" type="large" @click="showText" style="margin-top:20px"></mi-button>
        <indicator :msg="context" :visible="visible"></indicator>
    </div>
</template>
<style>
</style>
<script>
    import {
      MiButton,
      Indicator
    } from '../components/index'

    export default {
        data() {
            return {
                context: '',
                visible:false
            }
        },
        components: {
            MiButton,
            Indicator
        },
        methods: {
            showIndicator() {
                this.visible = true;
                this.context = '';
                setTimeout(() => {
                    this.visible = false;
                },2000)
            },
            showText() {
                this.context = 'loading...';
                this.visible = true;
                setTimeout(() => {
                    this.visible = false;
                },2000)
            }
        }
    }
</script>
