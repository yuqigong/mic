<template>
    <div class="mic-palette-button" :class="{ expand: expanded, 'mic-palette-button-active': transforming }"
         @animationend="onMainAnimationEnd" @webkitAnimationEnd="onMainAnimationEnd" @mozAnimationEnd="onMainAnimationEnd">
        <div class="mic-sub-button-container">
            <slot></slot>
        </div>
        <div @touchstart="toggle" class="mic-main-button" :class="mainBtnCls">
            {{content}}
        </div>
    </div>
</template>
<script lang="babel">
export default {
    name: 'mic-palette-button',
    components: {
    },
    props: {
        content: String,
        startAngle: {
            type: Number,
            default: 0     //子元素展开起始角度，上为起始线
        },
        offset: {
            type: Number,
            default: 90     //扇面偏移角度
        },
        radius: {
            type: Number,
            default: 90     //半径
        },
        mainBtnCls: {
            type: String
        }
    },
    data() {
        return {
            expanded: false,
            transforming: false
        };
    },
    created() {
    },
    methods: {
        toggle() {
            this.expanded ? this.unexpand() : this.expand();
        },
        onMainAnimationEnd() {
            this.transforming = false;
            this.$emit('expanded');
        },
        expand() {
            this.expanded = true;
            this.transforming = true;
            this.$emit('expand', event);
        },
        unexpand() {
            this.expanded = false;
            this.$emit('unexpand', event);
        }
    },
    mounted() {
        this.slotChildren = [];
        for (let i = 0; i < this.$slots.default.length; i++) {
            if (this.$slots.default[i].elm.nodeType !== 3) {
                this.slotChildren.push(this.$slots.default[i]);
            }
        }
        let css = '';
        let singelAngle = this.offset / (this.slotChildren.length + 1);
        for (let i = 0; i < this.slotChildren.length; i++) {
            var arc = (2 * Math.PI) / 360 * (singelAngle * (i + 1) + this.startAngle);  //角度转成弧度，朝上方向为起点位置
            var x = (Math.sin(arc) * this.radius).toFixed(2);
            var y = (Math.cos(arc) * this.radius).toFixed(2);

            var item_css = '.expand .palette-button-' + this._uid + '-sub-' + i + '{transform:translate(' + x + 'px,' + -y + 'px) rotate(720deg); transition-delay:' + 0.03 * i + 's}';
            css += item_css;
            this.slotChildren[i].elm.className += (' palette-button-' + this._uid + '-sub-' + i);
        }
        this.styleNode = document.createElement('style');
        this.styleNode.type = 'text/css';
        this.styleNode.rel = 'stylesheet';
        this.styleNode.title = 'palette button style';
        this.styleNode.appendChild(document.createTextNode(css));
        document.getElementsByTagName('head')[0].appendChild(this.styleNode);
    },
    destroyed() {
        if (this.styleNode) {
            this.styleNode.parentNode.removeChild(this.styleNode);
        }
    }
};
</script>

<style lang="sass" rel="stylesheet/scss">
@import '../../stylesheet/all.scss';
.mic-palette-button {
    position: relative;
    display: inline-block;
}
.mic-sub-button-container {
    position: absolute;
}
.mic-main-button {
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    z-index: 100;
    clear: both;
    background-color: #12A3C2;
}
.mic-palette-button-active {
    animation: mic-zoom 0.5s ease-in-out;
}
.mic-sub-button-container > * {
    transition: transform .3s ease-in-out;
}
@keyframes mic-zoom{
    0% {transform:scale(1)}
    10% {transform:scale(1.1)}
    30% {transform:scale(0.9)}
    50% {transform:scale(1.05)}
    70% {transform:scale(0.95)}
    90% {transform:scale(1.01)}
    100% {transform:scale(1)}
}
</style>
