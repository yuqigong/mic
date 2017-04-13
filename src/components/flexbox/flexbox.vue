<template>
  <div class="miui-flexbox" :class="{'miui-flex-col': orient === 'vertical', 'miui-flex-row': orient === 'horizontal'}" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="babel">
  export default {
    props: {
      gutter: {
        type: Number,
        default: 8
      },
      orient: {
        type: String,
        default: 'horizontal'
      },
      justify: String,
      align: String,
      wrap: String,
      direction: String
    },
    computed: {
      styles() {
        return {
          'justify-content': this.justify,
          'align-items': this.align,
          'flex-wrap': this.wrap,
          'flex-direction': this.direction
        };
      }
    }
  };
</script>

<style>
  .miui-flexbox {
    width: 100%;
    text-align: left;
    display: flex;
    box-align: center;
    align-items: center;
  }

  .miui-flexbox .miui-flexbox-item {
    flex: 1;
    min-width: 20px;
    width: 0%;
  }

  .miui-flexbox-item > .miui-flexbox {
    width: 100%;
  }

  .miui-flexbox .miui-flexbox-item:first-child {
    margin-left: 0 !important;
    margin-top: 0 !important;
  }

  .miui-flex-col {
    box-orient: vertical;
    flex-direction: column;
  }

  .miui-flex-col > .miui-flexbox-item {
    width: 100%;
  }

  .miui-flex-row {
    box-direction: row;
    box-orient: horizontal;
    flex-direction: row;
  }
</style>
