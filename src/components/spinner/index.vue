<template>
<div>
    <div class="miui-spinner double-bounce" v-if="type == 'double'">
        <div class="miui-double-bounce first"></div>
        <div class="miui-double-bounce second"></div>
    </div>
    <div class="miui-spinner" v-if="type == 'triple'">
        <div class="miui-triple-bounce first"></div>
        <div class="miui-triple-bounce second"></div>
        <div class="miui-triple-bounce third"></div>
    </div>
    <div class="miui-spinner miui-circle" v-if="type == 'circle'">
        <div class="miui-circle">
            <div class="miui-circle1 miui-child"></div>
            <div class="miui-circle2 miui-child"></div>
            <div class="miui-circle3 miui-child"></div>
            <div class="miui-circle4 miui-child"></div>
            <div class="miui-circle5 miui-child"></div>
            <div class="miui-circle6 miui-child"></div>
            <div class="miui-circle7 miui-child"></div>
            <div class="miui-circle8 miui-child"></div>
            <div class="miui-circle9 miui-child"></div>
            <div class="miui-circle10 miui-child"></div>
            <div class="miui-circle11 miui-child"></div>
            <div class="miui-circle12 miui-child"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        type: String
    }
}
</script>

<style lang="sass">
@import '../../stylesheet/all.scss';

.miui-spinner {
    display: inline-block;
    position: relative;
    height: r(30);

    &.double-bounce {
        width: r(30);
    }
}

.miui-double-bounce {
    position: absolute;
    width: r(30);
    height: r(30);
    transform: translate(0, -50%);
    border-radius: 50%;
    opacity: 0.6;
    -webkit-animation: miui-bounce 2.0s infinite ease-in-out;
    animation: miui-bounce 2.0s infinite ease-in-out;
    background-color: $baseColor;

    &.second {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }
}
.miui-triple-bounce {
    display: inline-block;
    width: r(14);
    height: r(14);
    border-radius: 100%;
    opacity: 0.6;
    -webkit-animation: miui-bounce 1.4s infinite ease-in-out both;
    animation: miui-bounce 1.4s infinite ease-in-out both;
    background-color: $baseColor;

    &.second {
        -webkit-animation-delay: 0.16s;
        animation-delay: 0.16s;
    }

    &.third {
        -webkit-animation-delay: 0.32s;
        animation-delay: 0.32s;
    }
}

@-webkit-keyframes miui-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes miui-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@-webkit-keyframes miui-bounce {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
}

@keyframes miui-bounce {
    0%, 80%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    } 40% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
}
.miui-circle {
    width: r(30);
    height: r(30);
    position: relative;
}
.miui-circle .miui-child {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.miui-circle .miui-child:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: $baseColor;
    border-radius: 100%;
    -webkit-animation: miui-circleBounceDelay 1.2s infinite ease-in-out both;
    animation: miui-circleBounceDelay 1.2s infinite ease-in-out both;
}
.miui-circle .miui-circle2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg); }
.miui-circle .miui-circle3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg); }
.miui-circle .miui-circle4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg); }
.miui-circle .miui-circle5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg); }
.miui-circle .miui-circle6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg); }
.miui-circle .miui-circle7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg); }
.miui-circle .miui-circle8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg); }
.miui-circle .miui-circle9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg); }
.miui-circle .miui-circle10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg); }
.miui-circle .miui-circle11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); }
.miui-circle .miui-circle12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); }
.miui-circle .miui-circle2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; }
.miui-circle .miui-circle3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }
.miui-circle .miui-circle4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }
.miui-circle .miui-circle5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; }
.miui-circle .miui-circle6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; }
.miui-circle .miui-circle7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; }
.miui-circle .miui-circle8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; }
.miui-circle .miui-circle9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s; }
.miui-circle .miui-circle10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s; }
.miui-circle .miui-circle11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s; }
.miui-circle .miui-circle12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s; }

@-webkit-keyframes miui-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes miui-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
</style>
