<template>
    <div class="page-field">
        <div class="example">
            <mi-field v-model="value1" :options="options1">
                <p>表单内容为: {{value1}}</p>
            </mi-field>
        </div>
        <div class="example">
            <mi-field v-model="value2" :options="options2">
                <p>表单内容为: {{value2}}</p>
            </mi-field>
        </div>
        <div class="example">
            <mi-button @click="changeType">查看密码</mi-button>
        </div>
        <div class="example">
            <mi-field v-model="value3" :options="options3">
                <p>表单内容为: {{value3}}</p>
            </mi-field>
        </div>
        <div class="example">
            <mi-field v-model="value4" :options="options4">
                <p>表单内容为: {{value4}}</p>
            </mi-field>
        </div>
        <div class="example">
            <mi-field v-model="value5" :options="options5">
                <span slot="right">{{value5}}</span>
                <p>表单内容为: {{value5}}</p>
            </mi-field>
        </div>
    </div>
</template>
<script>
import {
    MiField,
    MiButton
} from '../components/index.js';

export default {
    components: {
        MiField,
        MiButton
    },
    created() {},
    data() {
        return {
            value1: 'Linklater',
            options1: {
                label: '用户名',
                name: 'userName',
                type: 'text'
            },
            value2: 'HelloWorld',
            options2: {
                label: '密码',
                name: 'userPass',
                type: 'password'
            },
            value3: '',
            options3: {
                label: '生日',
                name: 'birthday',
                type: 'date'
            },
            value4: '"Everybody stand back, I know regular expressions!"',
            options4: {
                label: '描述',
                name: 'desc',
                type: 'textarea',
                rows: 4
            },
            value5: '@example.com',
            options5: {
                label: '邮箱',
                name: 'mail',
                type: 'text'
            }
        }
    },
    methods: {
        changeType(val) {
            this.options2.type = this.options2.type === 'text' ? 'password' : 'text';
        }
    }
}
</script>
<style lang="sass" scope>
.example {
    margin: 30px;
    p {
        margin: 20px 0;
        color: #999;
    }
}
</style>
