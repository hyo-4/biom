<!-- eslint-disable no-unused-vars -->
<template>
  <div class="calendar-page">
    <div class="calendar-page__topbar">
      <div class="calendar-page__topbar_left">
        <div class="calendar-page__search-wrapper">
          <input
            v-model="searchQuery"
            type="text"
            class="calendar-page__search-input"
            placeholder="검색"
          />
          <img
            src="@/assets/icon/ic_folder_search.svg"
            class="calendar-page__icon-search"
            @click="performSearch"
            alt="Search Icon"
          />
        </div>
        <div class="calendar-page__button_wrapper">
          <button class="calendar-page__button">화상키보드</button>
          <button class="calendar-page__button">한자검색</button>
          <button class="calendar-page__button">Post it</button>
        </div>
      </div>
      <div class="calendar-page__topbar_middle">
        <div
          v-for="(item, index) in postitItem"
          :key="index"
          class="calendar-page__postitItem"
        >
          <img :src="item.icon" alt="icon" class="calendar-item__icon" />
          <span class="menu-item__title">{{ item.name }}</span>
        </div>
      </div>
      <div class="calendar-page__topbar_right">
        <img src="@/assets/biom_logo.png" class="calendar-page__logo" />
        <div class="calendar-page__logo_text">사용설명서 보기</div>
        <div class="calendar-page__logo_text">
          동영상 사용설명서(튜토리얼) 보기
        </div>
      </div>
    </div>
    <div class="calendar-page__body">
      <div class="calendar-page__body_left">
        <Calendar
          :initialDate="new Date()"
          @update:selectedDate="handleDateSelect"
        />
        <div class="calendar-page__doctorpicker">
          <div class="calendar-page__title-wrapper">
            <img src="@/assets/icon/ic_arrow_right.svg" />
            <div class="calendar-page__title">의사 선택</div>
          </div>
          <div class="calendar-page__check-container">
            <label
              v-for="(name, index) in doctor"
              :key="index"
              class="calendar-page__doctor-item"
            >
              <input type="checkbox" :id="'doctor-' + index" />
              <span>{{ name }}</span>
            </label>
          </div>
        </div>
        <div class="calendar-page__memo-wrapper">
          <div class="calendar-page__tab-container">
            <div class="calendar-page__tabs">
              <button
                v-for="(tab, index) in memoTabs"
                :key="index"
                @click="memoActiveTab = index"
                :class="{ active: memoActiveTab === index }"
                class="calendar-page__tab-button"
              >
                {{ tab.name }}
              </button>
            </div>
            <div class="calendar-page__memo-tab-view">
              <div v-if="memoActiveTab === 0">
                <div
                  v-for="(date, index) in memoDates"
                  :key="index"
                  class="calendar-page__date-item"
                >
                  <div class="calendar-page__date">{{ formatDate(date) }}</div>
                  <div class="calendar-page__memo">메모 내용</div>
                </div>
              </div>
              <div v-if="memoActiveTab === 1">두 번째 탭 내용</div>
              <div v-if="memoActiveTab === 2">세 번째 탭 내용</div>
              <div v-if="memoActiveTab === 3">네 번째 탭 내용</div>
              <div v-if="memoActiveTab === 4">다섯 번째 탭 내용</div>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar-page__body_right">
        <div class="calendar-page__tab-container">
          <div class="calendar-page__tabs">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="activeTab = index"
              :class="{ active: activeTab === index }"
              class="calendar-page__tab-button"
            >
              {{ tab.name }}
            </button>
          </div>
          <div class="calendar-page__tab-view">
            <div v-if="activeTab === 0" class="calendar-page__table-container">
              <table class="calendar-page__reservation-table">
                <thead>
                  <tr>
                    <th>시간</th>
                    <th v-for="(date, index) in dateRange" :key="index">
                      {{ formatDate(date) }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(time, timeIndex) in timeSlots" :key="timeIndex">
                    <td>{{ time }}</td>
                    <td
                      v-for="(date, dateIndex) in dateRange"
                      :key="dateIndex"
                      class="calendar-page__reservation-cell"
                    >
                      <div
                        v-for="(item, itemIndex) in getReservationsForTimeAndDate(time, date)"
                        :key="itemIndex"
                        class="calendar-page__reservation-content"
                      >
                        {{ item.name }}
                        <br />{{ item.content }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="activeTab === 1">두 번째 탭 내용</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Calendar from '@/components/Calendar.vue';
import { ref } from 'vue';

const searchQuery = ref(""); //검색어
const performSearch= ()=> { //검색 함수
    console.log(searchQuery.value);
}
const selectedDate = ref<Date | null>(null);
const handleDateSelect = (date: Date) => {
  selectedDate.value = date;
};
const activeTab = ref(0);
const memoActiveTab = ref(0);
const tabs = [
  { name: '주간 예약' },
  { name: '일별 예약' },
];
const memoTabs = [
  { name: '메모' },
  { name: '보류' },
  { name: '리콜' },
  { name: '통계' },
];
const doctor = [
    "박00",
    "김00"
]
const postitItem = [
    {
        name: "post1",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post2",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post3",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post4",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post5",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post6",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post7",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post8",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post9",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post10",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post11",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post12",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post13",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post14",
        icon: require('@/assets/post_it.png')
    },

]

// 예약 데이터 타입 선언
interface Reservation {
  name: string;
  content: string;
  time: Date;
}
// eslint-disable-next-line no-unused-vars
const reservations =  ref<Reservation[]>([
    {
        name: "김철수",
        content: "충치 치료 / 스케일링",
        time: new Date(2024, 10, 26, 9, 0),
    },
    {
        name: "이영희",
        content: "스케일링",
        time: new Date(2024, 10, 28, 9, 30),
    },
    {
        name: "박민수",
        content: "충치 치료",
        time: new Date(2024, 10, 29, 10, 0),
    },
    {
        name: "최지우",
        content: "잇몸 치료",
        time: new Date(2024, 11, 1, 10, 30),
    },
    {
        name: "홍길동",
        content: "스케일링",
        time: new Date(2024, 11, 2, 10, 30),
    },
    {
        name: "김미영",
        content: "충치 치료",
        time: new Date(2024, 11, 3, 10, 30),
    },
    {
        name: "이동현",
        content: "스케일링",
        time: new Date(2024, 10, 29, 12, 0),
    },
    {
        name: "정수빈",
        content: "치아 미백",
        time: new Date(2024, 10, 29, 12, 30),
    },
    {
        name: "박영진",
        content: "잇몸 치료",
        time: new Date(2024, 10, 30, 13, 0),
    },
    {
        name: "한예슬",
        content: "충치 치료",
        time: new Date(2024, 10, 27, 13, 30),
    },
    {
        name: "최준영",
        content: "치아 교정 상담",
        time: new Date(2024, 11, 1, 14, 0),
    },
    {
        name: "유민지",
        content: "스케일링",
        time: new Date(2024, 10, 26, 14, 30),
    },
    {
        name: "이준호",
        content: "충치 치료",
        time: new Date(2024, 10, 26, 15, 0),
    },
    {
        name: "김서현",
        content: "스케일링",
        time: new Date(2024, 10, 27, 15, 30),
    },
    {
        name: "장현수",
        content: "잇몸 치료",
        time: new Date(2024, 10, 29, 10, 0),
    },
]);
// 현재 날짜부터 +3일까지 날짜를 생성
const generateThreeDateRange = (startDate: Date, days: number): Date[] => {
  const range = [];
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    range.push(date);
  }
  return range;
};
// 오늘 날짜 기준으로 4일치 생성
const memoToday = new Date();
const memoDates = ref(generateThreeDateRange(memoToday, 4));

// 날짜 범위 (표의 첫 번째 행에 사용)
const dateRange = ref(generateDateRange(new Date(), 7)); // 현재 날짜부터 7일간
//정규화
const normalizeDate = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};
// 30분 단위의 시간 범위 (표의 첫 번째 열에 사용)
const timeSlots = Array.from({ length: 21 }, (_, i) => {
  const hour = Math.floor(i / 2) + 9; // 시작 시간 9시
  const minutes = i % 2 === 0 ? '00' : '30';
  return `${hour}:${minutes}`;
});
// 날짜 포맷팅 함수
const formatDate = (date: Date) =>
  `${date.getMonth() + 1}월 ${date.getDate()}일`;

// 특정 시간과 날짜에 해당하는 예약을 반환
const getReservationsForTimeAndDate = (time: string, date: Date) => {
  const [hour, minute] = time.split(':').map(Number); // 시간과 분 추출
  const normalizedDate = normalizeDate(date); // 날짜만 비교 (시간 제거)

  const filteredReservations = reservations.value.filter((res) => {
    const resDate = normalizeDate(res.time); // 예약 시간의 날짜만 비교

    return (
      resDate.getTime() === normalizedDate.getTime() && // 날짜 비교
      res.time.getHours() === hour && // 시간 비교
      res.time.getMinutes() === minute // 분 비교
    );
  });

  return filteredReservations;
};

// 날짜 범위 생성 함수
function generateDateRange(startDate: Date, days: number): Date[] {
  const range = [];
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    range.push(date);
  }
  return range;
}
</script>

<style lang="scss">
.calendar-page {
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 44px;

  &__topbar {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    max-height: 200px;
    gap: 20px;
    flex-shrink: 0; /* 크기 변화 없음 */
  }
  &__body {
    width: 100%;
    flex-grow: 1; /* 남은 공간을 차지 */
    overflow-y: auto; /* 스크롤 가능 */
    display: flex;
    flex-direction: row;
    gap: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }
  &__body_left {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 250px;
    align-items: center;
  }
  &__body_right {
    flex: 4.5;
  }
  &__topbar_left{
    flex: 1.5;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    gap: 10px;
  }
  &__search-wrapper {
    width: 100%;
    position: relative;
    display: flex;
  }
  &__postitItem {
    img {
        min-width: 20px;
        max-width: 40px;
        width: 10vw;
    }
  }
 &__search-input {
    padding: 10px;
    width: 100%;
    padding-right: 0px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
 &__icon-search {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 18px;
    color: #888;
  }
  &__button_wrapper {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    gap: 5px;
  }
  &__button {
    width: 100%;
    border: 1px solid #B5B5B5;
    color: #9B9B9B;
    font-style: normal;
    font-weight: 400;
    padding: 11px;
    line-height: normal;
    cursor: pointer;
  }
  &__topbar_middle {
    flex: 4;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .menu-item {
        cursor: pointer;
        &__icon {
        //img
            cursor: pointer;
        }
        &__title {
            cursor: pointer;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #9B9B9B;
            text-align: center;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
  }
}
&__topbar_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
  }
&__logo {
    width: 103px;
    height: 34px;
    flex-shrink: 0;
  }
&__logo_text {
    color: #9B9B9B;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
&__menu_container {
    width: 100%;
    height: auto;
    overflow-y: auto;
    border-radius: 3px;
    border: 1px solid #B5B5B5;
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
    box-sizing: border-box;
    gap: 20px;
  }
&__menu_subcontainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
//의사 선택
&__doctorpicker {
    width: 100%;
    display: flex;
    padding: 10px;
    flex-direction: column;
  }
&__check-container {
    border: 1px solid #B5B5B5;
    border-radius: 3px;
    padding: 10px;
}
&__memo-wrapper {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
}
&__memo-tab-view {
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 0 5px 5px 5px;
    background-color: #fafafa;
    flex-grow: 1;
    overflow-y: auto;
}
&__date-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
}
&__date {
    border-bottom: 1px solid #B5B5B5;
    padding-bottom: 5px;
}
&__memo {
    min-height: 20px;
    padding: 0 10px;
}
&__title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: start;
    text-align: start;
    gap: 10px;
    padding: 8px;
}
&__title {
    color: #5B5B5B;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    gap: 10px;
  }
&__tab-container {
    display: flex;
    flex-direction: column;
    width: 99%;
}
&__tabs {
    display: flex;
    width: 100%;
}
&__tab-button {
    border: none;
    color:#9B9B9B;
    background-color: #E8E8E8;
    cursor: pointer;
    padding: 10px;
    border-radius: 3px 3px 0 0;
    border: 1px solid #ccc;
    border-bottom: none;
}
&__tab-button.active {
    background-color: white;
    border-radius: 3px 3px 0 0;
    border: 1px solid #ccc;
    border-bottom: none;
}
&__tab-view {
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 0 5px 5px 5px;
    background-color: #fafafa;
    flex-grow: 1;
    min-height: 65vh;
    overflow-y: auto;
}
&__date-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;

  .calendar-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    max-width: 300px;
  }
  .selected-date-display {
    font-size: 14px;
    color: #5b5b5b;
  }
}
//table
&__table-container {
  overflow-x: auto;
  height: 100%;
}

&__reservation-table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  text-align: center;
}

&__reservation-table th,
&__reservation-table td {
  border: 1px solid #ccc;
  border-left: none;
  border-bottom: none;

  &:last-child {
    border-right: none;
  }
}

&__reservation-table th {
  background-color: #f9f9f9;
  font-weight: bold;
  border-top: none;
}

&__reservation-cell {
  min-height: 50px;
  min-width: 100px;
}

&__reservation-content {
  display: flex;
  background-color: #e0f7fa;
  font-size: 14px;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
&__doctor-item {
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 10px;
}

&__doctor-item input {
  margin-right: 5px;
}
}
</style>
