<template>
    <div class="page">
        <p style="text-align: center; padding: 30px;">{{count}}</p>
        <mi-button text="+" type="large" @click="increment" margin-top="23"></mi-button>
        <mi-button text="-" type="large" @click="decrement" margin-top="23"></mi-button>
        <mi-button text="n2" type="large" @click="square" margin-top="23"></mi-button>
        <mi-button text="n3" type="large" @click="cubic" margin-top="23"></mi-button>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
import {
    MiButton
} from '../components/index'
import { mapActions } from 'vuex'

export default {
    components: {
        MiButton
    },
    computed: {
        count () {
            return this.$store.state.calc.count
        }
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions([
            'increment',
            'decrement',
            'square',
            'cubic'
        ])
    }
}
</script>
