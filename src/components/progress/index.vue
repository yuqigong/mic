<template>
    <div class="miui-progress">
        <slot name="start"></slot>
        <div class="miui-progress-content">
            <div class="miui-progress-runway" :style="{ height: barHeight + 'px' }"></div>
            <div class="miui-progress-progress" :style="{ width: value + '%', height: barHeight + 'px' }"></div>
        </div>
        <slot name="end"></slot>
    </div>
</template>
<script>
export default {
    name: 'mic-progress',

    props: {
        value: Number,
        barHeight: {
            type: Number,
            default: 3
        }
    }
};
</script>
<style lang="sass">
@import '../../stylesheet/all.scss';
.page-progress .miui-cell-value {
    -webkit-box-flex: 2.5;
    -ms-flex: 2.5;
    flex: 2.5;
    position: relative;
    top: -20px;
}

.page-progress .miui-progress {
    width: 100%;
    position: absolute;
    top: 5px;
}

.page-progress-wrapper {
    padding: 0 10px;
    margin-top: 50px;
}

.page-progress-wrapper .miui-progress {
    position: relative;
}

.page-progress-wrapper .progress-fade-transition {
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}

.page-progress-wrapper .progress-fade-enter,
.page-progress-wrapper .progress-fade-leave {
    opacity: 0;
}

.miui-progress {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 30px;
    line-height: 30px
}

.miui-progress > * {
    display: -ms-flexbox;
    display: flex;
    display: -webkit-box
}

.miui-progress *[slot="start"] {
    margin-right: 5px
}

.miui-progress *[slot="end"] {
    margin-left: 5px
}

.miui-progress-content {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.miui-progress-runway {
    position: absolute;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    top: 50%;
    left: 0;
    right: 0;
    background-color: #ebebeb;
    height: 3px
}

.miui-progress-progress {
    position: absolute;
    display: block;
    background-color: #12C286;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    width: 0
}
</style>
