<template>
	<div class="miui-range">
		<slot name="start"></slot>
		<div class="miui-range-bar" ref="content">
			<div class="miui-range-base" :style="{ height: barHeight + 'px' }"></div>
			<div class="miui-range-progress" :style="{ width: progress + '%', height: barHeight + 'px', background: barColor}" ></div>
			<div class="miui-range-slide" ref="slide" :style="{ left: progress + '%'}"></div>
		</div>
		<slot name="end"></slot>
	</div>
</template>
<script>
export default {
    name: 'mi-range',

    data() {
      return {
      	slide:null,
      	contentWidth:'',
      	initX:'',
      	moveX:'',
      	disX:0,
      	newProgress:0,
      	stepCount:1
      }
    },
    props: {
    	value:{
    		default:0
    	},
    	barColor:{
    		default:'#12C286'
    	},
    	barHeight:{
    		default:3
    	},
		step: {
			type: Number,
			default: 1
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		disabled: {
			type: Boolean,
			default: false
		}
    },
    computed:{
    	progress(){
	        const value = this.value;
	        if (typeof value === 'undefined' || value === null) return 0;
	        return Math.floor((value - this.min) / (this.max - this.min) * 100);
    	}
    },
    methods:{
    	moveStart:function(event){
    		event.preventDefault();
    		document.onselectstart = function() { return false; };
    		document.ondragstart = function() { return false; };
    		this.initX = event.targetTouches[0].pageX - this.disX;
    		document.addEventListener('touchmove', this.moveOn,false);
    		document.addEventListener('touchend',this.moveEnd,false)
    	},
    	moveOn:function(event){
    		event.preventDefault();
    		const stepCount = Math.ceil((this.max - this.min) / this.step);
    		this.moveX = event.targetTouches[0].pageX;
    		const newPosition = (this.moveX - this.initX) - (this.moveX - this.initX) % (this.contentWidth / stepCount);
    		this.newProgress = Math.round((newPosition / this.contentWidth)*100);
    		if (this.newProgress > 100) {
    			this.newProgress = 100;
    		}else if(this.newProgress < 0){
    			this.newProgress = 0;
    		}
    		this.disX = this.newProgress / 100 * this.contentWidth;
    		this.$emit('input', Math.round(this.min + this.newProgress * (this.max - this.min)/100))
    	},
    	moveEnd:function(event){
    		event.preventDefault();
    		this.$emit('change', this.value);
    		document.removeEventListener('touchmove', this.moveOn,false);
    		document.removeEventListener('touchend', this.moveEnd,false);
		    document.onselectstart = null;
		    document.ondragstart = null;
    	}
    },
    mounted(){
    	this.slide = this.$refs.slide;
    	const content = this.$refs.content;
    	this.contentWidth = content.getBoundingClientRect().width;
    	this.disX = this.contentWidth * (this.value - this.min)/100;
    	if (!this.disabled) {
			this.slide.addEventListener('touchstart',this.moveStart,false);
		}
    }
};
</script>
<style lang="sass">
@import '../../stylesheet/all.scss';
*{touch-action: none;}

$rangeHeight:30;
$baseColor:#ccc;
$slideWidth:32;
$slideHeight:18;

.miui-range{
	width:100%;
	height:r($rangeHeight);
	line-height:r($rangeHeight);
	display:flex;
	justify-content:space-between;
}
.miui-range-bar{
	position:relative;
	margin-right:r($slideWidth);
	flex:1;
}
.miui-range-base{
	position:absolute;
	height:1px;
	background:$baseColor;
	left:0;
	top:50%;
	right:- r($slideWidth);
	transform:translate(0,-50%);
}
.miui-range-progress{
	position:absolute;
	height:1px;
	background:#12C286;
	left:0;
	top:50%;
	transform:translate(0,-50%);
}
.miui-range-slide{
	position:absolute;
	top:50%;
	left:0;
	transform:translate(0,-50%);
	background:#fff;
	width:r($slideWidth);
	height:r($slideHeight);
	border-radius:8px;
	box-shadow:0 1px 3px rgba(0,0,0,.4);
	&:after{
		content:'';
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		width:30%;
		height:10px;
		border-left:1px solid #ccc;
		border-right:1px solid #ccc;
	}
}
</style>
