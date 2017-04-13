<template>
  <div>
    <group>
      <cell
        @click="showCalendar"
        title="出生日期"
        type="input"
        placeholder="请输入出生日期"
        :input-value="value">
      </cell>
    </group>
    <calendar :show="calendarShow" format="yyyy-MM-dd" @selected="selectedHandler"></calendar>
  </div>
</template>

<script>
  import {
    Group,
    Cell,
    Calendar
  } from '../components/index';

  export default {
    data() {
      return {
        value: '',
        calendarShow: false
      };
    },
    components: {
      Group,
      Cell,
      Calendar
    },
    methods: {
      showCalendar() {
        this.calendarShow = true;
      },
      selectedHandler(date) {
        this.value = date;
        this.calendarShow = false;
      }
    }
  };
</script>
