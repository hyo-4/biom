<template>
  <div class="unfulfilled_appointment-page">
    <div class="unfulfilled_appointment-page__header">
      <div class="unfulfilled_appointment-page__header_left">
        <div class="unfulfilled_appointment-page__title">
          <img src="@/assets/icon/ic_arrow_right.svg" />해피콜/리콜대상자 목록
        </div>
        <div class="client-page__check_container">
          <label v-for="(option, index) in checkOptions" :key="index">
            <input type="checkbox" :value="option" v-model="checkedOptions" />
            {{ option }}
          </label>
        </div>

        <div class="unfulfilled_appointment-page__search">
          <div class="unfulfilled_appointment-page__title">예약 기간 검색</div>
          <label for="start-date">시작일:</label>
          <input type="date" id="start-date" v-model="startDate" />
          ~
          <label for="end-date">종료일:</label>
          <input type="date" id="end-date" v-model="endDate" />

          <button>검색</button>
        </div>
      </div>
      <div class="unfulfilled_appointment-page__header_right">
        <button>결과 내 검색</button>
        <button>출력</button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(name, index) in tableName" :key="index">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, rowIndex) in clientData" :key="rowIndex">
          <td v-for="(name, colIndex) in tableName" :key="colIndex">
            <template v-if="name === '선택'">
              <input
                type="checkbox"
                :value="client['선택']"
                v-model="client['선택']"
              />
            </template>
            <template v-else>
              {{ client[name as keyof typeof client] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const checkOptions = ['오늘 이후 예약자 제외', '미이행 이후 내원자 제외'];
const checkedOptions = ref([]);
const tableName = [
  "예약 날짜/시간", "환자 정보", "전화번호", "담당의사", "예약 내용", "예약 구분", "이행여부", "최종내원일", "다음리콜", "다음예약", "내원경로", "고객성향", "고객구분", "선택"
];
const startDate = ref('');
const endDate = ref('');

const clientData = [
  {
    "예약 날짜/시간": "2024-09-15 10:00",
    "환자 정보": "홍길동",
    "전화번호": "010-1234-5678",
    "담당의사": "김철수",
    "예약 내용": "정기 검진",
    "예약 구분": "미이행",
    "이행여부": "미이행",
    "최종내원일": "2024-07-20",
    "다음리콜": "2024-09-20",
    "다음예약": "2024-09-30",
    "내원경로": "온라인 예약",
    "고객성향": "긍정적",
    "고객구분": "VIP",
    "선택": false
  },
  {
    "예약 날짜/시간": "2024-09-16 14:00",
    "환자 정보": "김영희",
    "전화번호": "010-2345-6789",
    "담당의사": "박민수",
    "예약 내용": "치아 치료",
    "예약 구분": "미이행",
    "이행여부": "미이행",
    "최종내원일": "2024-08-01",
    "다음리콜": "2024-09-25",
    "다음예약": "2024-10-01",
    "내원경로": "전화 예약",
    "고객성향": "보통",
    "고객구분": "일반",
    "선택": true
  },
  {
    "예약 날짜/시간": "2024-09-17 09:30",
    "환자 정보": "이철수",
    "전화번호": "010-3456-7890",
    "담당의사": "최현우",
    "예약 내용": "정기 검진",
    "예약 구분": "미이행",
    "이행여부": "미이행",
    "최종내원일": "2024-07-25",
    "다음리콜": "2024-09-22",
    "다음예약": "2024-09-29",
    "내원경로": "홈페이지",
    "고객성향": "부정적",
    "고객구분": "일반",
    "선택": false
  },
  {
    "예약 날짜/시간": "2024-09-18 13:00",
    "환자 정보": "박지훈",
    "전화번호": "010-4567-8901",
    "담당의사": "이현정",
    "예약 내용": "치아 교정",
    "예약 구분": "미이행",
    "이행여부": "미이행",
    "최종내원일": "2024-06-15",
    "다음리콜": "2024-09-23",
    "다음예약": "2024-10-05",
    "내원경로": "추천",
    "고객성향": "긍정적",
    "고객구분": "VIP",
    "선택": true
  },
  {
    "예약 날짜/시간": "2024-09-19 15:30",
    "환자 정보": "최수민",
    "전화번호": "010-5678-9012",
    "담당의사": "정수민",
    "예약 내용": "임플란트 상담",
    "예약 구분": "미이행",
    "이행여부": "미이행",
    "최종내원일": "2024-08-10",
    "다음리콜": "2024-09-27",
    "다음예약": "2024-10-03",
    "내원경로": "전화 예약",
    "고객성향": "부정적",
    "고객구분": "일반",
    "선택": false
  }
];
</script>

<style lang="scss">
.unfulfilled_appointment-page {
    display: flex;
    flex-direction: column;
    padding: 20px 5px;
    gap: 20px;
    &__title {
        font-weight: 600;
    }
    &__header {
        display: flex;
        flex-direction: row;
    }
    &__header_left {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    &__header_right {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            width: 50%;
            height: 2rem;
            cursor: pointer;
            border: none;
            background: none;
        }
    }
    &__search {
        display: flex;
        gap: 10px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #B5B5B5;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f5f5f5;
    }

    td,
    th:first-child {
        border-left: none;
    }

    td {
        background-color: #ffffff;
    }

}
</style>
