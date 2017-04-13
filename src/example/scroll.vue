<template>
    <!-- :is-bar     是否显示滚动条 默认为true -->
    <!-- :pull-up :pull-down     回调触发事件 -->
    <div class="mi-scroll-parent">
        <mi-scroll  :pull-up="pullUp" :pull-down="pullDown">
            <!-- 默认内容  一定要大于当前父级高度才会触发事件-->
            <div v-for="i in 20" class="list" slot="content">众安保险 item-{{ i }}</div>
            <!-- 上拉下拉 -->
            <div v-for="item in arrList" class="list"  slot="pullUpStr">众安保险 item-{{item.num}}</div>
            <div v-for="item in arrList2" class="list"  slot="pullDownStr">众安保险 item-{{item.num}}</div>
        </mi-scroll>
    </div>
</template>
<style>
    .mi-scroll-parent{
        box-sizing: border-box;
        left: 0;
        top:0;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .scroll-box{
        border-top: 1px solid #e5e5e5;
    }
    .list {
        background: #ffffff;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e5e5;
    }
</style>
<script>
import {
    MiScroll
} from '../components/index';

export default {
    components: {
        MiScroll
    },
    data() {
        return {
            indexUp:0,
            indexDown:0,
            dNum:0,
            uNum:0,
            arrList:[],
            arrList2:[]
        };
    },
    mounted(){

    },
    methods: {
        pullUp(MiScroll){
            //console.log('UP-AJAX请求');
            //MiScroll实例的对象
            //AJAX请求是否成功记录状态 isUpdateUp 默认为空 '' // 请求中 ing 请求成功 success 请求失败 fail
            //isUpData  是否还有数据 默认为true

            MiScroll.isUpdateUp='ing';
            //ajax
            setTimeout(()=>{
                this.arrList=[];
                for(var i=0;i<5;i++){
                    this.arrList.push({'num':parseInt(Math.random()*80000)})
                }
                MiScroll.isUpdateUp='success'
                //暂无数据
                //MiScroll.isUpData=false
            },800)
        },
        pullDown(MiScroll){
            //console.log('DOWN-AJAX请求');
            //MiScroll实例的对象
            //AJAX请求是否成功记录状态 isUpdateDown 默认为空 '' // 请求中 ing 请求成功 success 请求失败 fail
            //isDownData  是否还有数据 默认为true

            MiScroll.isUpdateDown='ing'
            //ajax
            setTimeout(()=>{
                this.arrList2=[];
                // for(var i=0;i<5;i++){
                //     this.arrList2.push({'num':parseInt(Math.random()*80000)})
                // }
                MiScroll.isUpdateDown='success'
                //暂无数据
                MiScroll.isDownData=false
            },800)
        }
    }
}
</script>
