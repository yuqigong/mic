<template>
    <div class="mic-indexlist">
        <ul class="mic-indexlist-content" ref="content" :style="{ 'height': currentHeight + 'px'}">
            <li class="mic-indexlist-navitem" v-for="(item, index) in currentObj" :key="index">
                <group type="hint" :title="item.initial">
                    <cell v-for="(cell, index) in item.cells" :title="cell" :key="index"></cell>
                </group>
            </li>
        </ul>

        <div class="mic-indexlist-nav"  ref="nav">
            <ul class="mic-indexlist-navlist">
                <li class="mic-indexlist-navitem" v-for="(item, index) in currentObj" @click="handleClick(index)" :key="index">{{ item.initial }}</li>
            </ul>
        </div>

        <div class="mic-indexlist-indicator" v-show="moving">{{ currentIndicator }}</div>
    </div>
</template>
<script lang="babel">
import Cell from '../cell/index.vue';
import Group from '../group/index.vue';
export default {
    name: 'mic-index-list',
    components: {
        Group,
        Cell,
    },
    props: {
      sections: [Array]
    },
    data() {
        return {
            currentHeight: 0,
            currentObj: [],
            currentIndicator: '',
            moving: false,
            indicatorTime: null,
            firstSection: {}
        }
    },
    created() {
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
            let cells = this.sections.filter(name => name[0] === initial);
            this.currentObj.push({
              initial,
              cells
            });
          });
    },
    methods: {
        init() {
            let listItems = this.$refs.content.getElementsByTagName('li');
            if (listItems.length > 0) {
                this.firstSection = listItems[0];
            }
        },
        handleClick(index) {
            this.currentIndicator = this.currentObj[index].initial;
            this.moving = true;
            this.scroll(index);
            this.indicatorTime = setTimeout(() => {
                this.moving = false;
                this.currentIndicator = '';
                clearTimeout(this.indicatorTime);
            }, 500);
        },

        scroll(index) {
            let scrollTop = this.$refs.content.getElementsByTagName('li')[index].getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
            this.$refs.content.scrollTop = scrollTop;
        }
    },
    mounted() {
        if (!this.currentHeight) {
            this.currentHeight = document.documentElement.clientHeight;
        }
        this.init();
    }
};
</script>

<style lang="sass" rel="stylesheet/scss">
@import '../../stylesheet/all.scss';
.mic-indexlist-content {
    margin-right: r(25);
    overflow-x: scroll;
}
.mic-indexlist-nav {
    width: r(25);
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    border-left: 1px solid #ddd;
    text-align: center;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    .mic-indexlist-navitem {
        padding: 2px 6px;
        font-size: 12px;
        user-select: none;
    }
}
.mic-indexlist-indicator {
    position: absolute;
    width: r(50);
    height: r(50);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 50px;
    background-color: rgba(0, 0, 0, .7);
    border-radius: 5px;
    color: #fff;
    font-size: r(22);
}
</style>
