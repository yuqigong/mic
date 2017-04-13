<template>
    <div class="page-swipe">
        <p class="page-swipe-desc">基础用法</p>
        <mi-swipe :auto="4000">
            <swipe-item class="slide1">1</swipe-item>
            <swipe-item class="slide2">2</swipe-item>
            <swipe-item class="slide3">3</swipe-item>
        </mi-swipe>
        <p class="page-swipe-desc">隐藏 indicators</p>
        <mi-swipe :show-indicators="false">
            <swipe-item class="slide1">1</swipe-item>
            <swipe-item class="slide2">2</swipe-item>
            <swipe-item class="slide3">3</swipe-item>
        </mi-swipe>
        <p class="page-swipe-desc">取消自动播放</p>
        <mi-swipe :auto="0">
            <swipe-item class="slide1">1</swipe-item>
            <swipe-item class="slide2">2</swipe-item>
            <swipe-item class="slide3">3</swipe-item>
        </mi-swipe>
        <p class="page-swipe-desc">设置默认显示页</p>
        <mi-swipe :auto="0" :defaultIndex="1">
            <swipe-item class="slide1">1</swipe-item>
            <swipe-item class="slide2">2</swipe-item>
            <swipe-item class="slide3">3</swipe-item>
        </mi-swipe>
        <p class="page-swipe-desc">单个幻灯片</p>
        <mi-swipe :show-indicators="false">
            <swipe-item class="slide1">SINGLE SLIDE</swipe-item>
        </mi-swipe>
    </div>
</template>
<script>
import {
    MiSwipe,
    SwipeItem
} from '../components/index.js';

export default {
    components: {
        MiSwipe,
        SwipeItem
    },
    data() {
        return {};
    }
};
</script>
<style>
.page-swipe .miui-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}

.page-swipe .miui-swipe-item {
    line-height: 200px;
}

.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}

.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}

.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}

.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}
</style>
