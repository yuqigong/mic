<template>
    <div @click="popupClick" class="popup-parent">
        <transition-group :name="pos">
            <!-- <div key="0" class=""> -->
                <div key="1" v-show="isPopup" :class="{
                    'miui-popup':true,
                    'miui-popup-top':popupPosition=='top',
                    'miui-popup-bottom':popupPosition=='bottom',
                    'miui-popup-left':popupPosition=='left',
                    'miui-popup-right':popupPosition=='right',
                    'miui-popup-top-center':popupPosition=='top-center',
                    'miui-popup-top-left':popupPosition=='top-left',
                    'miui-popup-top-right':popupPosition=='top-right',
                    'miui-popup-bottom-center':popupPosition=='bottom-center',
                    'miui-popup-bottom-left':popupPosition=='bottom-left',
                    'miui-popup-bottom-right':popupPosition=='bottom-right',
                    }"
                    :style="{width: width+'px'}">
                    <i :class="{
                    'popup-top':popupPosition=='top',
                    'popup-bottom':popupPosition=='bottom',
                    'popup-left':popupPosition=='left',
                    'popup-right':popupPosition=='right',
                    }"></i>
                    <div class="miui-popup-box">
                        <span :class="{'nowrap':nowrap}">{{text}}</span>
                    </div>
                </div>
                <div key="2"><slot></slot></div>
            <!-- </div> -->
        </transition-group>
    </div>
</template>
<style  scoped>
    /*@import '../../stylesheet/all.scss';*/

    .miui-popup{
        border-radius: 5px;
        box-shadow: 0 0 1px 0 #666;
        position: absolute;
        transform-style:preserve-3d;
        transform: translateX(-50%);
        width: auto;
    }

    /*pop位置*/
    .miui-popup-top{
        left: 50%;
        transform-origin: 50% 100%;
        bottom: 100%;
        transform:translate(-50%,-12px) scale(1);
    }
    .miui-popup-bottom{
        left: 50%;
        top:100%;
        transform-origin: 50% 0%;
        transform:translate(-50%,12px) scale(1);
    }
    .miui-popup-left{
        right:100%;
        top:50%;
        transform-origin: 100% 50%;
        transform:translate(-12px,-50%) scale(1);
    }
    .miui-popup-right{
        left:100%;
        top:50%;
        transform-origin: 0% 50%;
        transform:translate(12px,-50%) scale(1);
    }

    /*transition*/
    .popup-top-enter-active,.popup-bottom-enter-active,.popup-left-enter-active,.popup-right-enter-active{
      transition:all 0.3s;
    }
    .popup-top-enter{
      opacity: 0;
      transform:translate(-50%,-7px) scale(0.7);
    }
    .popup-bottom-enter{
      opacity: 0;
      transform:translate(-50%,7px) scale(0.7);
    }
    .popup-left-enter{
      opacity: 0;
      transform:translate(-7px,-50%) scale(0.7);
    }
    .popup-right-enter{
      opacity: 0;
      transform:translate(7px,-50%) scale(0.7);
    }

    /*.popup-top-leave-active{
        transition:all 0.3s;
    }
    .popup-top-leave{
        opacity: 0;
        top: 0;
        transform:translate(-50%,-100%) scale(0.7);
    }*/

    .miui-popup i{
        display: block;
        width: 12px;
        height: 12px;
        background: #ffffff;
        position: absolute;
        box-shadow: 0 0 1px 0 #666;
    }
    /*倒三角的位置*/
    .miui-popup i.popup-top{
        bottom: -5px;
        left:50%;
        transform: translateX(-50%) rotate(45deg);
    }
    .miui-popup i.popup-bottom{
        top: -5px;
        left:50%;
        transform: translateX(-50%) rotate(45deg);
    }
    .miui-popup i.popup-left{
        right: -5px;
        top:50%;
        transform: translateY(-50%) rotate(45deg);
    }
    .miui-popup i.popup-right{
        left: -5px;
        top:50%;
        transform: translateY(-50%) rotate(45deg);
    }



    .miui-popup-box{
        border-radius: 5px;
        background: #ffffff;
        padding:10px;
        box-sizing: border-box;
        position: relative;
    }
    .miui-popup-box span{
        font-size: 12px;
        /*单词断行*/
        word-break:break-all;
        /*word-wrap:break-word;*/
    }
    .miui-popup-box span.nowrap{
        /*强制不换行*/
        white-space:nowrap
    }

</style>
<script lang="babel">

export default {
    components: {

    },
    props: {
        width: String,
        text:String,
        popupPosition:{
            type:String
        },
        nowrap:{
            type:Boolean,
            default:true
        },
        isPopup:{
            type:Boolean,
            default:false
        },
        time:{
            type:Number,
            default:1000
        }
    },
    data() {
        return {
            pos:'popup-'+this.popupPosition,
            isPopupShow:this.isPopup
        }
    },
    watch:{
        isPopup(n,o){
            //console.log(n,o);
        }
    },
    mounted() {
        //console.log(this.pos);
    },
    methods: {
        popupClick(){
            this.$emit('click',!this.isPopupShow);
            clearTimeout(timer)
            var timer=setTimeout(()=>{
                //console.log(this.isPopupShow,'自定义');
                this.$emit('click',this.isPopupShow);
            },this.time)
        }
    }
}
</script>
