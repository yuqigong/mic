<template>
    <div style="padding-top:50px">
        <!-- :time="1000" :nowrap="false" width="140" -->
        <div>
            <div class="pop1">
                <mi-popup @click="popupTopClick" :is-popup="isPopupTop" :popup-position="'top'" :text="'众安保险'" >
                    <mi-button  text="popup-top" type="small"></mi-button>
                </mi-popup>
            </div>
        </div>
        <div>
            <div class="pop1">
                <mi-popup @click="popupBottomClick" :nowrap="false" width="140" :is-popup="isPopupBottom" :popup-position="'bottom'" :text="'众安保险众安保险众安保险'" >
                    <mi-button text="popup-bottom" type="small"></mi-button>
                </mi-popup>
            </div>
        </div>
        <div>
            <div class="pop1">
                <mi-popup @click="popupLeftClick"  :is-popup="isPopupLeft" :popup-position="'left'" :text="'众安保险'" >
                    <mi-button text="popup-left" type="small"></mi-button>
                </mi-popup>
            </div>
        </div>
        <div>
            <div class="pop1">
                <mi-popup @click="popupRightClick" :is-popup="isPopupRight" :popup-position="'right'" :text="'众安保险'" >
                    <mi-button text="popup-right" type="small"></mi-button>
                </mi-popup>
            </div>
        </div>
    </div>
</template>
<style>
    .pop1{
        position: relative;
        display: inline-block;
        left: 50%;
        transform: translateX(-50%);
    }
    .pop1{
        margin: 50px auto 50px auto;
    }

</style>
<script>
import {
    MiPopup,
    MiButton
} from '../components/index';

export default {
    components: {
        MiPopup,
        MiButton
    },
    data() {
        console.log(11);
        return {
            isPopupTop:false,
            isPopupBottom:false,
            isPopupLeft:false,
            isPopupRight:false
        };
    },
    mounted(){

    },
    methods: {
        popupTopClick(boolean){
            this.isPopupTop=boolean
        },
        popupBottomClick(boolean){
            this.isPopupBottom=boolean
        },
        popupLeftClick(boolean){
            this.isPopupLeft=boolean
        },
        popupRightClick(boolean){
            this.isPopupRight=boolean
        }

    }
}
</script>
