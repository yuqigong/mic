<template>
<div class="scroll">
    <div v-show="isBar" class="scroll-bar"></div>
    <div class="scroll-move">
        <div class='pull-down'>
            <i v-show="isDownSpinner"><spinner type="circle" slot="right"></spinner></i>
            <span>下拉刷新......</span>
        </div>
        <div class="scroll-box">
            <slot name="content"></slot>
        </div>
        <div v-show="false" class="tmp-pull-down-str">
            <slot name="pullDownStr"></slot>
        </div>
        <div v-show="false" class="tmp-pull-up-str">
            <slot name="pullUpStr"></slot>
        </div>
        <div class='pull-up'>
            <i v-show="isUpSpinner"><spinner type="circle" slot="right"></spinner></i>
            <span>上拉刷新......</span>
        </div>
    </div>
</div>
</template>
<style scoped>
.scroll {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.scroll-move {
    -webkit-transform-style: preserve-3d;
    -webkit-transform: translate3d(0, 0, 0);
}

.scroll-bar {
    position: absolute;
    -webkit-transform-style: preserve-3d;
    z-index: 2;
    width: 4px;
    height: 100px;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 100px;
}

.pull-up,
.pull-down {
    padding: 5px 0;
    background: #ffffff;
    text-align: center;
    height: 35px;
    line-height: 35px;
    width: 100%;
    position: absolute;
    left: 0;
}

.pull-down {
    top: 0;
    transform: translateY(-100%);
}

.pull-up {
    bottom: 0;
    transform: translateY(100%);
}

.pull-up i,
.pull-down i {
    display: inline-block;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    margin-top: 0px;
}

.pull-up span,
.pull-down span {
    font-size: 14px;
}
</style>
<script lang="babel">
import Spinner from '../spinner/index.vue';

export default {
    components: {
        Spinner
    },
    props: {
        isBar: {
            type: Boolean,
            default: true
        },
        pullUp: {
            type: Function
        },
        pullDown: {
            type: Function
        }

    },
    data() {
        return {
            isDownSpinner: false,
            isUpSpinner: false
        }
    },
    mounted() {
        //滚动条
        var vue = this;

        var prefix = (function() {
            var tempDom = document.createElement('div').style,
                prefixStrArr = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                sPre;
            for (var i = 0; i < prefixStrArr.length; i++) {
                if (prefixStrArr[i] + 'ransform' in tempDom) {
                    sPre = prefixStrArr[i].substring(0, prefixStrArr[i].length - 1);
                    window.cssPrefix = sPre ? sPre : '';
                    window.css_Prefix = sPre ? '-' + sPre.toLowerCase() + '-' : '';
                }
            }
            tempDom = null;
            return function(style) {
                if (sPre === '') return style;
                style = style.charAt(0).toUpperCase() + style.substring(1);
                return sPre + style;
            }
        })();

        var _vTransitionEnd = {
            '': 'transitionend',
            'webkit': 'webkitTransitionEnd',
            'Moz': 'transitionend',
            'O': 'otransitionend',
            'ms': 'MSTransitionEnd'
        }

        var transform = prefix('transform'),
            transformOrigin = prefix('transformOrigin'),
            transition = prefix('transition'),
            transitionEnd = _vTransitionEnd[window.cssPrefix],
            transitionDelay = prefix('transitionDelay'),
            transitionDuration = prefix('transitionDuration'),
            transitionProperty = prefix('transitionProperty'),
            transitionTimingFunction = prefix('transitionTimingFunction');

        var fiScroll = (function() {
            function scrollConstruct(json) {
                this.json = json
                this.scrollParent = document.getElementsByClassName('scroll')[0];
                this.parentHeight = this.scrollParent.offsetHeight;
                this.scrollBar = this.scrollParent.getElementsByClassName('scroll-bar')[0];
                this.scrollMove = this.scrollParent.getElementsByClassName('scroll-move')[0];
                this.scrollBox = this.scrollParent.getElementsByClassName('scroll-box')[0];
                this.hisBoxHeight=this.scrollBox.offsetHeight
                //临时dom
                this.tmpPullUpStr = this.scrollParent.getElementsByClassName('tmp-pull-up-str')[0];
                this.tmpPullDownStr = this.scrollParent.getElementsByClassName('tmp-pull-down-str')[0];

                this.oPullUp = this.scrollParent.getElementsByClassName('pull-up')[0];
                this.oPullUpText = this.oPullUp.getElementsByTagName('span')[0];
                this.oPullDown = this.scrollParent.getElementsByClassName('pull-down')[0];
                this.oPullDownText = this.oPullDown.getElementsByTagName('span')[0];
                this.oUpDownHeight = this.oPullDown.offsetHeight;
                this.clientHeight = document.documentElement.clientHeight;
                this.iCur = 0;
                this.downY = 0;
                this.nowY = 0;
                this.sBor = true;
                this.wBor = true;
                this.zBor = true;
                this.moveBez = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
                this.moveBackBez = 'cubic-bezier(0.25,0.46,0.45,0.94) ';
                this.speedY = 0;
                this.lastY = 0;
                this.raf = null;
                this.isEq = 0;
                this.disY = 0;
                this.onceBorUp = true;
                this.onceBorDown = true;
                this.startTime = 0;
                this.scale = 1;
                this.mTarget = 0;
                this.timerUp = null;
                this.timerDown = null;
                this.isUpLoading = true;
                this.isDownLoading = true;
                this.isEv = true;

                this.timerUp=null;
                this.timerDown=null;
                this.disFrameY=null

                this.isUpdateUp='';
                this.isUpdateDown='';
                this.isUpData=true;
                this.isDownData=true;

            }

            scrollConstruct.prototype = {
                init: function() {
                    //this.inner();
                    this.reset();
                    this.event();
                },
                inner: function() {
                    //文本内容
                    // var str = '';
                    // for (var i = 0; i < 45; i++) {
                    //     str += "<div class='list'>item " + (i + 1) + "</div>"
                    // }
                    // this.scrollBox.innerHTML = str
                },
                reset: function() {
                    this.isPull();
                    //获取属性  this.clientHeight
                    this.parentHeight = this.scrollParent.offsetHeight;
                    this.allHeight = this.scrollMove.offsetHeight;
                    this.maxHeight = this.allHeight - this.parentHeight;
                    //bar高度
                    var mHeight = this.scrollMove.offsetHeight;
                    var nowBarHeight = this.parentHeight / mHeight * this.parentHeight;
                    this.moveBarMaxH = this.parentHeight - nowBarHeight;
                    this.scrollBar.style.height = nowBarHeight + 'px';
                },
                isPull: function() {
                    //是否显示上拉,下拉
                    if (vue.pullDown) {
                        this.oPullDown.style.display = 'block';
                    } else {
                        this.oPullDown.style.display = 'none';
                    }

                    if (vue.pullUp) {
                        this.oPullUp.style.display = 'block';
                    } else {
                        this.oPullUp.style.display = 'none';
                    }
                },
                event: function() {
                    if (this.parentHeight > this.allHeight) {
                        //是否显示bar
                        this.scrollBar.style.display = 'none';
                        this.oPullDown.style.display = 'none';
                        this.oPullUp.style.display = 'none';
                    } else {
                        //注册事件
                        this.register()
                    }
                },
                register: function() {
                    var _this = this
                    this.scrollParent.addEventListener('touchstart',function(e){
                        if (!_this.isEv) {
                            return
                        }
                        var touch = e.changedTouches[0];
                        _this.iCur = _this.getY();
                        _this.downY = touch.clientY;
                        _this.sTime = Date.now();
                        _this.startTime = Date.now();

                        //重置滚动条的高度
                        _this.moveBar();
                        _this.stop(_this.scrollMove);
                        cancelAnimationFrame(_this.raf);

                        //重置布尔值
                        _this.sBor = true;
                        _this.wBor = true;
                        _this.zBor = true;
                        _this.onceBorUp = true;
                        _this.onceBorDown = true;

                        _this.scrollParent.addEventListener('touchmove',_this.scrollParent.move,false)
                        _this.scrollParent.addEventListener('touchend',_this.scrollParent.end,false)
                    },false)

                    _this.scrollParent.move=function(e){
                        var touch = e.changedTouches[0]
                        //更新上拉
                        if (_this.isUpdateUp=='') {
                            if (Math.abs(_this.getY()) > _this.maxHeight + _this.oUpDownHeight) {
                                _this.oPullUpText.innerHTML = '松手开始更新......';
                            } else {
                                _this.oPullUpText.innerHTML = '上拉更新......';
                            }
                        }

                        if (_this.isUpdateDown=='') {
                            if (_this.getY() > _this.oUpDownHeight) {
                                //松手开始刷新
                                _this.oPullDownText.innerHTML = '松手开始更新......'
                            } else {
                                _this.oPullDownText.innerHTML = '下拉更新......'
                            }
                        }

                        if (_this.getY() > 0) {
                            if (_this.sBor) {
                                _this.iCur = _this.getY();
                                _this.downY = touch.clientY;
                                _this.sBor = false;
                                _this.zBor = true;
                            }
                            _this.nowY = (touch.clientY - _this.downY) / 3 + _this.iCur;
                        } else if (Math.abs(_this.getY()) > _this.maxHeight) {
                            if (_this.wBor) {
                                _this.iCur = _this.getY();
                                _this.downY = touch.clientY;
                                _this.wBor = false;
                                _this.zBor = true;
                            }
                            _this.nowY = (touch.clientY - _this.downY) / 3 + _this.iCur;

                        } else {
                            if (_this.zBor) {
                                _this.iCur = _this.getY();
                                _this.downY = touch.clientY;
                                _this.zBor = false;
                                _this.sBor = true;
                                _this.wBor = true;
                            }
                            _this.nowY = touch.clientY - _this.downY + _this.iCur;

                        }
                        //console.log(_this.nowY)

                        _this.speedY = Math.abs(_this.nowY - _this.lastY);
                        _this.lastY = _this.nowY;
                        _this.scrollMove.style[transform] = 'translate3d(0,' + _this.nowY + 'px,0)';
                        _this.moveBar();
                        e.preventDefault();
                    }

                    _this.scrollParent.end=function(e){
                        var touch = e.changedTouches[0];
                        //先赋值
                        _this.eY = touch.clientX;
                        _this.disY = _this.getY();
                        _this.hisBoxHeight=_this.scrollBox.offsetHeight

                        //清除事件
                        _this.scrollParent.removeEventListener('touchmove',_this.scrollParent.move, false)
                        _this.scrollParent.removeEventListener('touchend',_this.scrollParent.end,false)

                        //大于最大值
                        if (_this.getY() > 0) {
                            if (_this.isUpdateDown=='' && _this.getY() > _this.oUpDownHeight) {
                                _this.frame.call(_this);
                            } else {
                                _this.transition(_this.scrollMove, 0, _this.moveBackBez, 450);
                            }
                            return
                        } else if (Math.abs(_this.getY()) > _this.maxHeight) {
                            if (_this.isUpdateUp=='' &&  Math.abs(_this.getY()) > _this.maxHeight + _this.oUpDownHeight) {
                                _this.frame.call(_this);
                            } else {
                                _this.transition(_this.scrollMove, -_this.maxHeight, _this.moveBackBez, 450);
                            }
                            return
                        }

                        //速度
                        var disY = Math.abs(touch.clientY - _this.downY);
                        var disTime = (Date.now() - _this.sTime) / 100;
                        var pos = _this.speedY * disY / 5;
                        var sTime = _this.speedY * disY / 2;
                        var tapTime = Date.now() - _this.startTime;
                        //50 是按下和离开的时候的差值
                        if (touch.clientY > _this.downY && touch.clientY - _this.downY > 50 && tapTime < 200) {
                            pos = Math.abs(pos);
                            _this.mTarget = _this.getY() + pos;
                            //开启定时器监控
                            _this.frame.call(_this);
                            _this.transition(_this.scrollMove, _this.mTarget, _this.moveBez, Math.abs(sTime));
                        } else if (touch.clientY < _this.downY && _this.downY - touch.clientY > 50 && tapTime < 200) {
                            pos = -pos;
                            _this.mTarget = _this.getY() + pos;
                            //开启定时器监控
                            _this.frame.call(_this);
                            _this.transition(_this.scrollMove, _this.mTarget, _this.moveBez, Math.abs(sTime));
                        } else {
                            cancelAnimationFrame(_this.raf);
                        }
                    }

                },
                transition: function(obj, target, timing, time) {
                    //如果重置当前位置直接调用transition运动会有问题，需要延迟执行
                    setTimeout(function() {
                        obj.style[transitionDuration] = time + 'ms';
                        obj.style[transitionProperty] = 'transform';
                        obj.style[transitionTimingFunction] = timing;
                        obj.style[transform] = 'translate3d(0,' + target + 'px,0)';
                    }, 0)
                },
                stop: function(obj) {
                    obj.style[transform] = 'translate3d(0,' + this.getY() + 'px,0)';
                    obj.style[transitionDuration] = '0ms';
                    cancelAnimationFrame(this.raf);
                },
                moveBar: function() {
                    //运动的比例 最后获取矩阵时候，定时器被清除了但是获取到的不是0矩阵的值还未完全运动完
                    var ny = Math.abs(this.getY()) < 1 ? 0 : this.getY();
                    this.scale = -(ny / this.maxHeight);
                    //console.log(this.scale,this.moveBarMaxH)

                    var nowBarY = this.scale * this.moveBarMaxH;
                    nowBarY < 0 ? nowBarY = 0 : nowBarY;
                    nowBarY > this.moveBarMaxH ? nowBarY = this.moveBarMaxH : nowBarY;

                    if (this.getY() > 0) {
                        //downScale=1+this.scale*2
                        var downScale = 1 + this.scale;
                        this.scrollBar.style[transformOrigin] = '50% 0';
                        this.scrollBar.style[transform] = 'translate3d(0,' + nowBarY + 'px,0) scaleY(' + downScale + ')';
                    } else if (this.getY() < -this.maxHeight) {
                        //upScale=3-this.scale*2
                        var upScale = 2 - this.scale;
                        this.scrollBar.style[transformOrigin] = '50% 100%';
                        this.scrollBar.style[transform] = 'translate3d(0,' + nowBarY + 'px,0) scaleY(' + upScale + ')';
                    } else {
                        this.scrollBar.style[transform] = 'translate3d(0,' + nowBarY + 'px,0) scaleY(1)';
                    }
                },
                frame: function() {
                    var _this = this;
                    //判断Y轴位置
                    if (this.getY() < -this.maxHeight - this.oUpDownHeight) {
                        if (vue.pullUp) {
                            this.transition(this.scrollMove, -this.maxHeight - this.oUpDownHeight, this.moveBackBez, 450);
                        } else {
                            this.transition(this.scrollMove, -this.maxHeight, this.moveBackBez, 450);
                        }
                    } else if (this.getY() > this.oUpDownHeight) {
                        if (vue.pullDown) {
                            this.transition(this.scrollMove, this.oUpDownHeight, this.moveBackBez, 450);
                        } else {
                            this.transition(this.scrollMove, 0, this.moveBackBez, 450);
                        }
                    }
                    //差距不到50的时候
                    if (this.getY() > 0 && this.getY() - this.disY != 0 && parseInt(this.mTarget) > 0 && parseInt(this.mTarget) < 50) {
                        //两点间的差值
                        if (this.getY() - this.disY < 0.4) {
                            this.transition(this.scrollMove, 0, this.moveBackBez, 450);
                        }
                    } else if (this.getY() < -this.maxHeight && this.getY() - this.disY != 0 && parseInt(this.mTarget) < -this.maxHeight && parseInt(this.mTarget) > -this.maxHeight - 50) {
                        if (this.getY() - this.disY > -0.4) {
                            this.transition(this.scrollMove, -this.maxHeight, this.moveBackBez, 450);
                        }
                    }

                    //上拉
                    if (vue.pullUp) {
                        if (this.isUpdateUp=='' && Math.abs(this.getY()) > this.maxHeight + this.oUpDownHeight) {
                            this.pullUpDom();
                        }
                    }

                    //下拉
                    if (vue.pullDown) {
                        if (this.isUpdateDown=='' && this.getY() > this.oUpDownHeight) {
                            this.pullDownDom();
                        }
                    }

                    //两点间的距离
                    this.disFrameY=this.getY()-this.disY;

                    //滚动条
                    this.moveBar();
                    this.disY = this.getY();

                    if (this.disFrameY==0 && this.hisBoxHeight!=this.scrollBox.offsetHeight || Math.abs(this.getY()) == 0 || Math.abs(this.getY()) == this.maxHeight || parseInt(this.getY()) == parseInt(this.mTarget) || this.getY() == 0 && this.mTarget > 0 || this.getY() == -this.maxHeight && this.mTarget <0) {
                        cancelAnimationFrame(this.raf);
                    } else {
                        //cancelAnimationFrame(this.raf)
                        this.raf = requestAnimationFrame(function() {
                            _this.frame();
                        })
                    }
                },
                pullUpDom: function() {
                    vue.isUpSpinner = true;
                    this.oPullUpText.innerHTML = '加载中......';
                    //执行回调
                    this.isUpData=true;
                    vue.pullUp.call(vue,this);
                    clearInterval(this.timerUp);
                    this.timerUp = setInterval(function() {
                        if (this.isUpdateUp == 'success') {
                            //清除定时器
                            clearInterval(this.timerUp);
                            this.upStr = this.tmpPullUpStr.innerHTML;
                            vue.isUpSpinner = false;
                            //没有数据
                            if (!this.isUpData) {
                                this.isEv = false;
                                //清除事件
                                this.scrollParent.removeEventListener('touchmove',this.scrollParent.move, false)
                                this.scrollParent.removeEventListener('touchend',this.scrollParent.end,false)
                                //暂无数据
                                this.oPullUpText.innerHTML = '暂无数据';
                                //重置位置
                                setTimeout(() => {
                                    this.transition(this.scrollMove, -this.maxHeight, this.moveBackBez, 450);
                                    //重置Bar高度
                                    this.tpmUpTimer = setInterval(() => {
                                        if (this.getY() == -this.maxHeight) {
                                            this.isEv = true;
                                            this.isUpdateUp='';
                                            clearInterval(this.tpmUpTimer)
                                        } else {
                                            this.moveBar()
                                        }
                                    }, 1000 / 60)
                                }, 350)
                            } else {
                                //渲染DOM 重置高度
                                this.append(this.upStr);
                                this.reset();
                                this.moveBar();
                                this.isUpdateUp='';
                                this.oPullUpText.innerHTML = '上拉更新......';
                            }
                        } else if (this.isUpdateUp == 'fail') {
                            //请求失败 重置
                            clearInterval(this.timerUp);
                            vue.isUpSpinner = false;
                            this.scrollMove.style[transitionDuration] = '0ms';
                            this.scrollMove.style[transform] = 'translate3d(0,'+(-this.maxHeight)+'px,0)';
                            this.reset();
                            this.moveBar();
                            this.isUpdateUp='';
                        }
                    }.bind(this), 200)
                },
                append: function(html) {
                    this.nodesHtml(this.scrollBox, html);
                    this.scrollBox.appendChild(this.scrollBox.fragment);
                },
                pullDownDom: function() {
                    vue.isDownSpinner = true;
                    this.oPullDownText.innerHTML = '加载中......';
                    //执行回调
                    this.isDownData=true;
                    vue.pullDown.call(vue,this)
                    clearInterval(this.timerDown);
                    this.timerDown = setInterval(function() {
                        if (this.isUpdateDown == 'success') {
                            this.downStr = this.tmpPullDownStr.innerHTML;
                            clearInterval(this.timerDown);
                            vue.isDownSpinner = false;
                            //是否有数据
                            if (!this.isDownData) {
                                //清除事件
                                this.scrollParent.removeEventListener('touchmove',this.scrollParent.move, false)
                                this.scrollParent.removeEventListener('touchend',this.scrollParent.end,false)
                                //暂无数据
                                this.isEv = false;
                                this.oPullDownText.innerHTML = '暂无数据';
                                setTimeout(() => {
                                    this.transition(this.scrollMove, 0, this.moveBackBez, 450);
                                    //重置Bar高度
                                    this.tpmDownTimer = setInterval(() => {
                                        if (this.getY() == 0) {
                                            this.isEv = true
                                            this.isUpdateDown='';
                                            clearInterval(this.tpmDownTimer)
                                        } else {
                                            this.moveBar()
                                        }
                                    }, 1000 / 60)
                                }, 350)
                            } else {
                                this.scrollMove.style[transitionDuration] = '0ms';
                                this.scrollMove.style[transform] = 'translate3d(0,0,0)';
                                this.oPullDownText.innerHTML = '下拉更新......';
                                this.before(this.downStr);
                                this.reset();
                                this.moveBar();
                                this.isUpdateDown='';
                            }
                        }else if (this.isUpdateDown== 'fail') {
                            //请求失败 重置
                            clearInterval(this.timerDown);
                            vue.isDownSpinner = false;
                            this.scrollMove.style[transitionDuration] = '0ms';
                            this.scrollMove.style[transform] = 'translate3d(0,0,0)';
                            this.reset()
                            this.moveBar()
                            this.isUpdateDown='';
                        }
                    }.bind(this), 200)
                },
                before: function(html) {
                    var firstDom = this.scrollBox.firstChild
                    this.nodesHtml(this.scrollBox, html);
                    this.scrollBox.insertBefore(this.scrollBox.fragment, firstDom);
                },
                nodesHtml: function(obj, html) {
                    obj.domTemp = document.createElement('div');
                    obj.fragment = document.createDocumentFragment();
                    var nodes = null;
                    obj.domTemp.innerHTML = html;
                    nodes = obj.domTemp.childNodes;
                    for (var i = 0; i < nodes.length; i++) {
                        obj.fragment.appendChild(nodes[i].cloneNode(true));
                    }
                },
                getStyle: function(obj, attr) {
                    return getComputedStyle(obj, false)[attr]
                },
                getY: function() {
                    var transformStr = this.getStyle(this.scrollMove, transform)
                    transformStr = transformStr.match(/[-+]?\d*\.?\d+/g)
                    return Number(transformStr[5]) || 0
                }

            }
            return function(json) {
                return new scrollConstruct(json).init()
            }
        })()

        //调用
        fiScroll()


    },
    methods: {

    }
}
</script>
