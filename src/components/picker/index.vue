<template>
  <div>
    <div class="miui-mask miui-picker-mask" :class="{'mask-toggle': show}" :style="{display: show ? 'block' : 'none'}"></div>
    <div class="miui-picker" :class="{toggle: show}">
      <div class="miui-picker-hd">
        <button class="miui-picker-cancel" @click="dispatchEvent('cancel')">取消</button>
        <span class="miui-picker-title">{{title}}</span>
        <button class="miui-picker-confirm" @click="dispatchEvent('confirm')">确定</button>
      </div>
      <flexbox :gutter="0" class="miui-picker-bd">
        <flexbox-item v-for="(one, index) in currentData" style="margin-left:0;" :key="index">
          <div class="miui-picker-item" :id="'miui-picker-' + uuid + '-' + index"></div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script lang="babel">
  import Scroller from './scroller';
  import {Flexbox, FlexboxItem} from '../flexbox';
  import Manager from './chain';

  export default {
    components: {
      Flexbox,
      FlexboxItem
    },
    created() {
      if (this.columns !== 0) {
        const length = this.columns;
        this.store = new Manager(this.data, length, this.fixedColumns);
        this.currentData = this.store.getColumns(this.value);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.render(this.currentData, this.currentValue);
      });
    },
    props: {
      show: false,
      data: [Array],
      title: '',
      columns: {
        type: Number,
        default: 0
      },
      fixedColumns: {
        type: Number,
        default: 0
      },
      value: Array,
      itemClass: {
        type: String,
        default: 'scroller-item'
      }
    },
    methods: {
      dispatchEvent(name) {
        this.$emit(name, this.currentValue);
      },
      getId(i) {
        return `#miui-picker-${this.uuid}-${i}`;
      },
      render(data, value) {
        this.count = this.currentData.length;
        const _this = this;
        if (!data || !data.length) {
          return;
        }
        let count = this.currentData.length;
        // set first item as value
        if (value.length < count) {
          for (let i = 0; i < count; i++) {
            this.$set(_this.currentValue, i, data[i][0].value || data[i][0]);
          }
        }

        for (let i = 0; i < data.length; i++) {
          /**
           * Still don't know why this happens
           */
          if (!document.querySelector(_this.getId(i))) {
            return;
          }

          _this.scroller[i] && _this.scroller[i].destroy();
          _this.scroller[i] = new Scroller(_this.getId(i), {
            data: data[i],
            defaultValue: value[i] || data[i][0].value,
            itemClass: _this.item_class,
            onSelect(value) {
              _this.$set(_this.currentValue, i, value);
              if (!this.columns || (this.columns && _this.getValue().length === _this.store.count)) {
                _this.$emit('on-change', _this.getValue());
              }
              if (_this.columns !== 0) {
                _this.renderChain(i + 1);
              }
            }
          });
          if (_this.currentValue) {
            _this.scroller[i].select(value[i]);
          }
        }
      },
      renderChain(i) {
        if (!this.columns) {
          return;
        }

        // do not render for last scroller
        if (i > this.count - 1) {
          return;
        }

        const _this = this;
        let ID = this.getId(i);
        // destroy old one
        this.scroller[i].destroy();
        let list = this.store.getChildren(_this.getValue()[i - 1]);
        this.scroller[i] = new Scroller(ID, {
          data: list,
          itemClass: _this.item_class,
          onSelect(value) {
            _this.$set(_this.currentValue, i, value);
            _this.$emit('on-change', _this.getValue());
            _this.renderChain(i + 1);
          }
        });
        this.$set(this.currentValue, i, list[0].value);
        this.renderChain(i + 1);
      },
      getValue() {
        let data = [];
        for (let i = 0; i < this.currentData.length; i++) {
          if (this.scroller[i]) {
            data.push(this.scroller[i].value);
          } else {
            return [];
          }
        }
        return data;
      },
      emitValueChange(val) {
        if (!this.columns || (this.columns && val.length === this.store.count)) {
          this.$emit('on-change', val);
        }
      }
    },
    data() {
      return {
        scroller: [],
        count: 0,
        uuid: Math.random().toString(36).substring(3, 8),
        currentData: this.data,
        currentValue: this.value
      };
    },
    watch: {
      value(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.currentValue)) {
          this.currentValue = val;
        }
      },
      currentValue(val, oldVal) {
        this.$emit('input', val);
        // render all the scroller for chain datas
        if (this.columns !== 0) {
          if (val.length > 0) {
            if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
              this.currentData = this.store.getColumns(val);
              this.$nextTick(function() {
                this.render(this.currentData, val);
              });
            }
          }
        } else {
          for (let i = 0; i < val.length; i++) {
            if (this.scroller[i] && this.scroller[i].value !== val[i]) {
              this.scroller[i].select(val[i]);
            }
          }
        }
      },
      data(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.currentData)) {
          this.currentData = val;
        }
      },
      currentData(newData) {
        if (Object.prototype.toString.call(newData[0]) === '[object Array]') {
          this.$nextTick(() => {
            this.render(newData, this.currentValue);
            // emit on-change after rerender
            this.$nextTick(() => {
              this.emitValueChange(this.getValue());

              if (JSON.stringify(this.getValue()) !== JSON.stringify(this.currentValue)) {
                if (!this.columns || (this.columns && this.getValue().length === this.store.count)) {
                  this.currentValue = this.getValue();
                }
              }
            });
          });
        } else {
          if (this.columns !== 0) {
            if (!newData.length) {
              return;
            }
            const length = this.columns;
            this.store = new Manager(newData, length, this.fixedColumns);
            this.currentData = this.store.getColumns(this.currentValue);
          }
        }
      }
    },
    beforeDestroy() {
      for (let i = 0; i < this.count; i++) {
        this.scroller[i].destroy();
        this.scroller[i] = null;
      }
    }
  };
</script>

<style lang="sass" rel="stylesheet/scss">
  @import '../../stylesheet/all.scss';

  .miui-picker {
    position: fixed;
    left: 0;
    bottom: 0;
    -webkit-transform: translate(0, 100%);
    transform: translate(0, 100%);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 2000;
    width: 100%;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
  }

  .miui-picker-mask {
    -webkit-transition: background .3s;
    transition: background .3s;
  }

  .mask-toggle {
    background: rgba(40, 40, 40, 0.2);
  }

  .toggle {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  .miui-picker-hd {
    background-color: #EEF1F2;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    line-height: 34px;
    text-align: right;
    display: -webkit-flex; /* Safari */
    display: flex;
    .miui-picker-cancel {
      width: 50px;
    }
    .miui-picker-title {
      flex: 1;
      text-align: center;
    }
    .miui-picker-confirm {
      width: 50px;
    }
  }

  .miui-picker-hd button {
    color: $baseColor;
    line-height: 34px;
  }

  .miui-picker-bd {
    background-color: #EEF1F2;
  }

  .scroller-component {
    display: block;
    position: relative;
    height: 238px;
    overflow: hidden;
    width: 100%;
  }

  .scroller-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .scroller-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    z-index: 3;
    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)),
    -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)),
    linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-position: top, bottom;
    background-size: 100% 102px;
    background-repeat: no-repeat;
  }

  .scroller-item {
    text-align: center;
    font-size: 16px;
    height: 34px;
    line-height: 34px;
    color: #000;
  }

  .scroller-indicator {
    width: 100%;
    height: 34px;
    position: absolute;
    left: 0;
    top: 102px;
    z-index: 3;
    background-image: -webkit-linear-gradient(top, #d0d0d0, #d0d0d0, transparent, transparent),
    -webkit-linear-gradient(bottom, #d0d0d0, #d0d0d0, transparent, transparent);
    background-image: linear-gradient(to bottom, #d0d0d0, #d0d0d0, transparent, transparent),
    linear-gradient(to top, #d0d0d0, #d0d0d0, transparent, transparent);
    background-position: top, bottom;
    background-size: 100% 1px;
    background-repeat: no-repeat;
  }

  .scroller-item {
    line-clamp: 1;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
