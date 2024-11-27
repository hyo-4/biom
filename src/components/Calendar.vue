<template>
  <div class="calendar-component">
    <div class="calendar-header">
      <button @click="prevMonth" class="calendar-nav-button">{{ `<` }}</button>
      <div class="calendar-title">
        {{ currentYear }}년 {{ currentMonth + 1 }}월
      </div>
      <button @click="nextMonth" class="calendar-nav-button">{{ `>` }}</button>
    </div>
    <table class="calendar-table">
      <thead>
        <tr>
          <th v-for="day in weekDays" :key="day" class="calendar-day-header">
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, index) in weeks" :key="index">
          <td
            v-for="day in week"
            :key="day.date.toISOString()"
            :class="['calendar-day', { 
      'calendar-day--selected': isSelected(day.date),
      'calendar-day--out': !isInCurrentMonth(day.date)
    }]"
            @click="isInCurrentMonth(day.date) && selectDate(day.date)"
          >
            <span
              v-if="isInCurrentMonth(day.date)"
              >{{ day.date.getDate() }}</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  initialDate: Date;
}>();


const emit = defineEmits(['update:selectedDate']);


const currentDate = ref(new Date(props.initialDate));
const selectedDate = ref(new Date(props.initialDate));
const weekDays = ['일', '월', '화', '수', '목', '금', '토'];


const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());


const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);
const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();


const weeks = computed(() => {
  const firstDayOfMonth = getFirstDayOfMonth(currentDate.value);
  const daysInMonth = getDaysInMonth(currentDate.value);
  const startDay = firstDayOfMonth.getDay();

  const days: { date: Date }[] = [];
  for (let i = 0; i < startDay; i++) {
    days.push({ date: new Date(firstDayOfMonth.getTime() - (startDay - i) * 24 * 60 * 60 * 1000) });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ date: new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), i) });
  }
  while (days.length % 7 !== 0) {
    const lastDay = days[days.length - 1].date;
    days.push({ date: new Date(lastDay.getTime() + 24 * 60 * 60 * 1000) });
  }

  const weeks: { date: Date }[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
});

const selectDate = (date: Date) => {
  selectedDate.value = date;
  emit('update:selectedDate', date);
};

const isInCurrentMonth = (date: Date) => {
  return date.getMonth() === currentMonth.value && date.getFullYear() === currentYear.value;
};

const isSelected = (date: Date) => {
  return selectedDate.value.toDateString() === date.toDateString();
};

const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
};
</script>

<style scoped lang="scss">
.calendar-component {
  display: flex;
  width: 90%;
  min-height: 170px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px;
  gap: 5px;
  overflow: hidden;
  padding-bottom: 10px;

  .calendar-header {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
  }

  .calendar-title {
    font-weight: bold;
    text-align: center;
  }

  .calendar-nav-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }

  .calendar-table {
    border-collapse: collapse;
    width: 100%;

    th,
    td {
      width: 14.2%;
      height: 18px;
      text-align: center;
      vertical-align: middle;
      border-top: none;
      font-size: 14px;
    }

    .calendar-day {
      cursor: pointer;
      padding: 5px;
    }

    .calendar-day--current {
      background-color: #ffeb3b;
    }

    .calendar-day--selected {
      background-color: #2196f3;
      color: white;
    }
  }
}
</style>
