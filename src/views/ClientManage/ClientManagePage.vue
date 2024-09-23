<template>
  <div class="client-page">
    <div class="client-page__header">
      <div class="client-page__header_left">
        <div>
          <img src="@/assets/icon/ic_arrow_right.svg" />해피콜/리콜대상자 목록
        </div>
        <div class="client-page__check_container">
          <label v-for="(option, index) in checkOptions" :key="index">
            <input type="checkbox" :value="option" v-model="checkedOptions" />
            {{ option }}
          </label>
        </div>
      </div>
      <div class="client-page__header_right">
        <div>환자 검색</div>
        <input
          v-model="searchQuery"
          type="text"
          class="menu-page__search-input"
          placeholder="검색"
        />
        <button @click="performSearch">검색</button>
      </div>
    </div>
    <div class="client-page__top-container">
      <div class="client-page__filter-container">
        <div class="client-page__filter-search">
          <div class="client-page__search-row">
            <div class="client-page__search-title">기간검색</div>
            <div class="client-page__search-content">
              <label v-for="(option, index) in periodOptions" :key="index">
                <input
                  type="radio"
                  name="period"
                  :value="option"
                  v-model="selectedPeriod"
                />
                {{ option }}
              </label>
              <input
                type="date"
                v-if="selectedPeriod === '특정기간'"
                v-model="startDate"
              />
              <span v-if="selectedPeriod === '특정기간'"> 부터 </span>
              <input
                type="date"
                v-if="selectedPeriod === '특정기간'"
                v-model="endDate"
              />
              <span v-if="selectedPeriod === '특정기간'"> 까지</span>
            </div>
          </div>
          <!-- 상태 검색 섹션 -->
          <div class="client-page__search-row">
            <div class="client-page__search-title">상태검색</div>
            <div class="client-page__search-content">
              <label v-for="(option, index) in statusOptions" :key="index">
                <input
                  type="radio"
                  name="status"
                  :value="option"
                  v-model="selectedStatus"
                />
                {{ option }}
              </label>
              <select
                v-if="selectedStatus === '해피콜/리콜상태'"
                v-model="recallStatus"
              >
                <option value="해피콜 전">리콜 전</option>
                <option value="리콜 전">리콜 완료</option>
              </select>
            </div>
          </div>
        </div>
        <!-- 검색 제외 섹션 -->
        <div class="client-page__search-except">
          <div class="client-page__search-title">검색 제외</div>
          <div class="client-page__search-content">
            <label v-for="(exclude, index) in excludeOptions" :key="index">
              <input
                type="checkbox"
                :value="exclude"
                v-model="selectedExcludes"
              />
              {{ exclude }}
            </label>
            <div>
              <label>
                <input type="checkbox" v-model="recallFromCheckbox" />
                리콜일로부터
              </label>
              <select v-if="recallFromCheckbox" v-model="recallFromDuration">
                <option value="1주">1주</option>
                <option value="2주">2주</option>
                <option value="1개월">1개월</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="client-page__etc-container">
        <button class="client-page__total-search-btn">검색</button>
        <div class="client-page__save-wrapper">
          <button style="cursor: pointer;">새 해피콜 개별리콜 등록</button>
          <button>엑셀 저장</button>
        </div>
      </div>
    </div>
    <div class="client-page__table-container">
      <table>
        <thead>
          <tr>
            <th v-for="(name, index) in tableName" :key="index">{{ name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(client, rowIndex) in clientData"
            :key="rowIndex"
            class="client-page__table-row"
          >
            <td v-for="(name, colIndex) in tableName" :key="colIndex">
              <template v-if="name === '선택'">
                <input
                  type="checkbox"
                  :value="client['선택']"
                  v-model="client['선택']"
                />
              </template>
              <template v-else>
                <span
                  @click="navigateToDetails(client)"
                  >{{ client[name as keyof typeof client] }}</span
                >
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="client-page__tap-container">
      <div class="client-page__tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="{ active: activeTab === index }"
          class="client-page__tab-button"
        >
          {{ tab.name }}
        </button>
      </div>
      <div class="client-page__tab-view">
        <div v-if="activeTab === 0"><UnfulfilledAppointmentsView /></div>
        <div v-if="activeTab === 1">두 번째 탭 내용</div>
        <div v-if="activeTab === 2">세 번째 탭 내용</div>
        <div v-if="activeTab === 3">네 번째 탭 내용</div>
        <div v-if="activeTab === 4">다섯 번째 탭 내용</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UnfulfilledAppointmentsView from './UnfulfilledAppointmentsView.vue';
import { useRouter } from 'vue-router';

const checkOptions = ['해피콜', '개별리콜', '자동리콜'];
const checkedOptions = ref([]);
const searchQuery = ref(""); //검색어
const performSearch= ()=> { //검색 함수
    alert(searchQuery.value);
}

// 기간 선택 옵션
const periodOptions = ['오늘', '최근 1주일', '전체기간', '특정기간'];
const selectedPeriod = ref('오늘');
const startDate = ref('');
const endDate = ref('');

// 상태 검색 옵션
const statusOptions = ['상태검색', '문자자동전송', '해피콜/리콜상태'];
const selectedStatus = ref('상태검색');
const recallStatus = ref('리콜 전');

// 검색 제외 옵션
const excludeOptions = ['오늘이후', '리콜자 제외', '리콜후 내원환자 제외'];
const selectedExcludes = ref([]);
const recallFromCheckbox = ref(false);
const recallFromDuration = ref('1주');


const tableName = [
    "전화날짜","이름","구분","상태","전화번호","해피콜/개별리콜 내용","전화번호","기타 사항","리콜 후 예약,내원","최종 내원일","전화번호","비고","선택",
]

export interface ClientData {
  "id": string;
  "전화날짜": string;
  "이름": string;
  "구분": string;
  "상태": string;
  "전화번호": string;
  "해피콜/개별리콜 내용": string;
  "기타 사항": string;
  "리콜 후 예약,내원": string;
  "최종 내원일": string;
  "비고": string;
  "선택": boolean;
}

const clientData: ClientData[] = [
  {
    "id": "1",
    "전화날짜": "2024-09-01",
    "이름": "홍길동",
    "구분": "신규",
    "상태": "리콜완료",
    "전화번호": "010-1234-5678",
    "해피콜/개별리콜 내용": "서비스 만족",
    "기타 사항": "추가 문의 없음",
    "리콜 후 예약,내원": "내원 예정",
    "최종 내원일": "2024-08-30",
    "비고": "VIP 고객",
    "선택": false,
  },
  {
    "id": "2",
    "전화날짜": "2024-09-02",
    "이름": "김영희",
    "구분": "기존",
    "상태": "리콜완료",
    "전화번호": "010-2345-6789",
    "해피콜/개별리콜 내용": "전화 연결 안됨",
    "기타 사항": "재시도 예정",
    "리콜 후 예약,내원": "미정",
    "최종 내원일": "2024-07-15",
    "비고": "주의 고객",
    "선택": true,
  },
  {
    "id": "3",
    "전화날짜": "2024-09-03",
    "이름": "이민호",
    "구분": "기존",
    "상태": "리콜완료",
    "전화번호": "010-3456-7890",
    "해피콜/개별리콜 내용": "불만족",
    "기타 사항": "불만 접수",
    "리콜 후 예약,내원": "내원 예정",
    "최종 내원일": "2024-08-20",
    "비고": "클레임 고객",
    "선택": false,
  },
  {
    "id": "4",
    "전화날짜": "2024-09-02",
    "이름": "김영희",
    "구분": "기존",
    "상태": "리콜완료",
    "전화번호": "010-2345-6789",
    "해피콜/개별리콜 내용": "전화 연결 안됨",
    "기타 사항": "재시도 예정",
    "리콜 후 예약,내원": "미정",
    "최종 내원일": "2024-07-15",
    "비고": "주의 고객",
    "선택": true,
  },

];
const tabs = [
  { name: '예약 미이행 환자' },
  { name: '특별관리 환자' },
  { name: '내원중단 환자' },
  { name: '미수금 내역' },
  { name: '고객불만사항' },
];
const activeTab = ref(0);

const router = useRouter();

function navigateToDetails(client: any) {
  router.push(`/client/${client.id}`);
}
</script>
<style lang="scss">
.client-page{
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__header {
    display: flex;
    justify-content: space-between;
    width: 80%;

  }
  &__header_left {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;

  }
  &__header_right {
    display: flex;
  }
  &__check_container {
    display: flex;
    gap: 10px;
  }
  &__check-container label {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
  &__check-container input[type="checkbox"] {
    margin-right: 5px;
  }
  &__top-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
  }
  &__filter-container {
    width: 80%;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid #B5B5B5;
    display: flex;
  }
  &__filter-search {
    width: 55%;
    min-height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //padding: 12px;
    box-sizing: border-box;
    border-right: 1px solid #B5B5B5;
  }
  &__search-row {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
  }
  &__search-row:first-child {
    border-bottom: 1px solid #B5B5B5;
  }
  &__search-title{
    width: 10%;
    min-width: 4rem;
    background-color: #F0F0F0;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-right: 1px solid #B5B5B5;
  }
  &__search-content{
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    label{
        margin-right: 16px;
    }
  }
  &__search-except {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
  }
  &__etc-container {
    padding-left: 10px;
    width: 20%;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  &__total-search-btn {
    border-radius: 3px;
    border: 1px solid #B5B5B5;
    background: #D9D9D9;
    cursor: pointer;
  }
  &__save-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 5px;
    button {
        color: #747474;
        pointer-events: auto;
        cursor: pointer;
        height: 100%;
        border-radius: 3px;
        border: 1px solid #B5B5B5;
        background: #FFF;
    }
  }
  &__table-container {
    width: 100%;
    height: 35vh;
    border: 1px solid #B5B5B5;
    border-radius: 3px;
    overflow-x: auto;
    overflow-y: auto;

  table {
    width: 100%;
    //border-collapse: collapse;
    border-collapse: separate;
    border-spacing: 0;

    th,
    td {
      border: 1px solid #B5B5B5;
      padding: 8px;
      text-align: left;
      border-top: none;
      border-left: none;
    }

    th {
      background-color: #f5f5f5;
      border-bottom: 1px solid #B5B5B5;
    }

    th:last-child {
      border-right: none;
    }

    td:nth-last-child(1) {
      border-right: none;
    }

    td {
      background-color: #ffffff;
    }
  }
}
&__table-row {
    cursor: pointer;
    transition: background-color 0.3s ease;
}
&__tab-container {
  display: flex;
  flex-direction: column;
}

&__tabs {
  display: flex;
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
  border-radius: 0 5px 5px 5px;
  background-color: #fafafa;
  max-height: 28vh;
  overflow-y: auto;
}
}
</style>
