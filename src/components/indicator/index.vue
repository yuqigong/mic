<template>
    <transition name="fade">
        <div class="miui-indicator" v-show="visible">
            <div class="miui-indicator-img">
                <span class="miui-indicator-icon">
                  <i class="miui-indicator-round"></i>
                </span>
                <p class="miui-indicator-txt" v-show="msg">{{msg}}</p>
            </div>
            <div class="miui-indicator-mask"></div>
        </div>
    </transition>
</template>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .miui-indicator-img{
      top: 50%;
      left: 50%;
      position: fixed;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      border-radius: 5px;
      background: rgba(0,0,0,.7);
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      padding:15px;
  }
  .miui-indicator-icon{
      display: inline-block;
      text-align: center;
  }
  .miui-indicator-round{
      animation: miui-indicator-rotate .8s infinite linear;
      border: 4px solid transparent;
      border-radius: 50%;
      border-top-color: rgb(204, 204, 204);
      border-left-color: rgb(204, 204, 204);
      border-bottom-color: rgb(204, 204, 204);
      height: 26px;
      width: 26px;
      display: block;
  }
  .miui-indicator-txt{
      display: block;
      color: #fff;
      text-align: center;
      margin-top: 10px;
      font-size: 16px;
      max-width: 200px;
      word-wrap:break-word;
  }
  .miui-indicator-mask{
      top: 0;
      left: 0;
      position: fixed;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: transparent;
  }
  @keyframes miui-indicator-rotate {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
  }
</style>
<script lang="babel">
  export default {
    data() {
      return {
        hadTxt:false
      }
    },
    props: {
      msg: {
        type: String
      },
      visible:{
        type:Boolean,
        default:false
      }
    },
    watch: {
      msg(val) {
        if (val) {
          this.hadTxt = true;
        }
      }
    }
  }
</script>
