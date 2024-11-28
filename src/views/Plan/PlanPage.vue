<template>
  <div class="plan-page">
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
    <div class="plan-page__body">
      <div class="plan-page__body-left">
        <div class="plan-page__tab-container">
          <div class="plan-page__tabs">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="activeTab = index"
              :class="{ active: activeTab === index }"
              class="plan-page__tab-button"
            >
              {{ tab.name }}
            </button>
          </div>
          <div class="plan-page__tab-view">
            <div v-if="activeTab === 0">
              <div class="plan-page__header">
                <div class="plan-page__title-wrapper">
                  <img src="@/assets/icon/ic_arrow_right.svg" />
                  <div class="plan-page__title">
                    김덴트님의 진행중 또는 치료 종결된 치료계획
                  </div>
                </div>
              </div>
              <div class="plan-page__table-container">
                <table class="plan-page__table">
                  <thead>
                    <tr>
                      <th>확정일</th>
                      <th>치료계획</th>
                      <th>총 진료비</th>
                      <th>현재수납액</th>
                      <th>상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in treatmentData" :key="index">
                      <td>{{ item.date }}</td>
                      <td>
                        <div v-for="(line, idx) in item.plan" :key="idx">
                          {{ line }}
                        </div>
                      </td>
                      <td>{{ item.totalCost }}</td>
                      <td>{{ item.payment }}</td>
                      <td>{{ item.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="plan-page__header">
                <div class="plan-page__title-wrapper">
                  <img src="@/assets/icon/ic_arrow_right.svg" />
                  <div class="plan-page__title">
                    김덴트님의 비용설명 하였으나 진행이 확정되지 않은 계획
                  </div>
                </div>
              </div>
              <div class="plan-page__table-container">
                <table class="plan-page__table">
                  <thead>
                    <tr>
                      <th>작성일</th>
                      <th>치료계획</th>
                      <th>총 진료비</th>
                      <th>상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in treatmentData2" :key="index">
                      <td>{{ item.date }}</td>
                      <td>
                        {{ item.plan }}
                      </td>
                      <td>{{ item.totalCost }}</td>
                      <td>{{ item.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="plan-page__header">
                <div class="plan-page__title-wrapper">
                  <img src="@/assets/icon/ic_arrow_right.svg" />
                  <div class="plan-page__title">
                    김덴트님의 비용 설명에 필요한 치료계획
                    <span>(담당의사가 전자차트에서 입력한 계획)</span>
                  </div>
                </div>
              </div>
              <div class="plan-page__treatment-plan-content">
                <div class="plan-page__treatment-plan-title">
                  <span>• 치료계획 #1 @2020-10-19</span>
                  <span class="plan-page__doctor-name">Dr.김원장</span>
                </div>
                <div class="plan-page__treatment-plan-description">
                  <ol>
                    <li>[예정] 임플란트, 임시 틀니 제작 (또는)</li>
                  </ol>
                </div>
              </div>
            </div>
            <div v-if="activeTab === 1">두 번째 탭 내용</div>
          </div>
        </div>
      </div>
      <div class="plan-page__body-right">
        <div class="plan-page__top-container">
          <div class="plan-page__filter-container">
            <!-- 작성일 Section -->
            <div class="plan-page__filter-search">
              <div class="plan-page__search-row">
                <div class="plan-page__search-title">작성일</div>
                <div class="plan-page__search-options">
                  <label> <input type="radio" name="date" /> 월별 </label>
                  <select>
                    <option>2020년</option>
                    <option>2021년</option>
                  </select>
                  <select>
                    <option>08월</option>
                    <option>09월</option>
                  </select>
                  <label> <input type="radio" name="date" /> 연도별 </label>
                  <select>
                    <option>2020년</option>
                    <option>2021년</option>
                  </select>
                  <label> <input type="radio" name="date" /> 특정기간 </label>
                  <input type="date" /> 부터 <input type="date" /> 까지
                </div>
              </div>

              <!-- 검색범위 Section -->
              <div class="plan-page__search-row">
                <div class="plan-page__search-title">검색범위</div>
                <div class="plan-page__search-options">
                  <label><input type="checkbox" /> 미확정 계획</label>
                  <label><input type="checkbox" /> 진행중/수납완료</label>
                  <label><input type="checkbox" /> 진행중/수납완료</label>
                  <label><input type="checkbox" /> 수납완료/치료종결</label>
                  <label
                    ><input type="checkbox" /> 이수금
                    (치료종결/수납미완료)</label
                  >
                </div>
              </div>

              <!-- 검색 Section -->
              <div class="plan-page__search-row">
                <div class="plan-page__search-title">검색</div>
                <div class="plan-page__search-options">
                  <label>환자검색</label>
                  <input type="text" placeholder="환자검색" />
                  <label>내용검색</label>
                  <input type="text" placeholder="내용검색" />
                  <button class="search-button">검색</button>
                  <label>
                    <input type="radio" name="option" /> 왼쪽 더블클릭 시
                  </label>
                  <label> <input type="radio" name="option" /> 환자선택 </label>
                  <label> <input type="radio" name="option" /> 내용보기 </label>
                  <label>
                    <input type="checkbox" name="option" /> 남은금액 표시
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="plan-page__btn-wrapper">
            <button class="plan-page__search-btn">검색</button>
            <div class="plan-page__btn-group">
              <button class="plan-page__btn--small">액셀 저장</button>
              <button class="plan-page__btn--small">출력</button>
            </div>
          </div>
        </div>
        <div class="plan-page__treatment-container">
          <div class="plan-page__treatment-table-container">
            <table class="plan-page__table">
              <thead>
                <tr>
                  <th>환자정보</th>
                  <th>작성일</th>
                  <th>진행상태</th>
                  <th>수납상태</th>
                  <th>치료계획</th>
                  <th>치료비용</th>
                  <th>현재수납액</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in treatmentData3" :key="index">
                  <td>{{ item.patientInfo }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.progress }}</td>
                  <td>{{ item.paymentStatus }}</td>
                  <td>
                    <div v-for="(plan, i) in item.treatmentPlan" :key="i">
                      {{ plan }}
                    </div>
                  </td>
                  <td>{{ item.treatmentCost }}</td>
                  <td>{{ item.currentPayment }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref(""); //검색어
const treatmentData = [
        {
          date: "2020-09-29",
          plan: [
            "[예정] 상악: 전체 틀니",
            "[예정] #37~34, 44~47 : 신흥 루나 임플란트, 커",
            "[예정] 하악 : 부분 틀니"
          ],
          totalCost: "17,200,000",
          payment: "0",
          status: "진행중"
        },
      ];
// eslint-disable-next-line no-unused-vars
const treatmentData2 = [
        {
          date: "2020-09-29",
          plan: "전악 : 신흥 루나 임플란트, 커스텀 어버트먼트, 지르코니아 보철(#13~23,3 ...",
          totalCost: "17,200,000",
          status: "수정"
        },
        {
          date: "2020-09-29",
          plan: "전악 : 전체 틀니",
          totalCost: "17,200,000",
          status: "수정"
        },
      ];
// eslint-disable-next-line no-unused-vars
const treatmentData3 =  Array.from({ length: 25 }, (_, i) => ({
        patientInfo: `오렌지(${1493 + i})`,
        date: "2020-09-29",
        progress: i === 19 ? "치료종결" : "진행중",
        paymentStatus: i === 19 ? "미납료" : "완료",
        treatmentPlan: [
          "@@@@@@@@@@@@@@@@@@@@@@@@@"
        ],
        treatmentCost: "17,200,000",
        currentPayment: "17,200,000",
      }));
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
const activeTab = ref(0);
const tabs = [
  { name: '치료비용계획' },
  { name: '상담 보드' },
];
</script>

<style lang="scss">
.plan-page {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  color: #5B5B5B;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;

  &__body {
    display: flex;
    width: 100%;
    flex-direction: row;
    box-sizing: border-box;
    gap: 20px;
  }
  &__body-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box;
  }
  &__body-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 50%;
    max-height: 100%;
  }
  //타이틀
  &__title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: start;
    text-align: start;
    gap: 10px;
  }
  &__title {
    color: #5B5B5B;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    span {
        color: #828282;
        font-weight: 400;
    }
  }
  //탭
  &__tab-container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  &__tabs {
    width: 100%;
    max-width: 100%;
  }
  &__tab-button {
    border: none;
    color:#9B9B9B;
    background-color: #E8E8E8;
    cursor: pointer;
    padding: 10px;
    max-height: 40px;
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
    max-width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 0 5px 5px 5px;
    background-color: #fafafa;
    height: calc(100vh - 230px);
    overflow-y: auto;
  }
  &__table-container {
    padding: 10px;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    max-height: 400px;
  }
  &__table {
    border-collapse: collapse;
    width: 100%;
    min-width: 100%;
    overflow-x: auto;
    border: 1px solid #ccc;

    tbody {
        max-height: 400px;
        overflow-y: auto;
    }

    th, td {
        padding: 5px;
        width: 100%;
        max-width: 100%;
        height: 10px;
        text-align: left;
        border: 1px solid #ccc;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        }

        th {
        background-color: #f2f2f2;
        }

        td {
        height: 10px;
        background-color: #f9f9f9;
        }
}

//치료비용계획 현황
&__treatment-container {
  max-width: 100%;
  max-height: calc(100vh - 230px);
}

&__treatment-table-container {
    max-height: calc(100vh - 360px);
    overflow-y: auto;
}
&__treatment-plan-content {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
  }
&__treatment-plan-description {
      font-size: 14px;

      ol {
        padding-left: 20px;
        margin: 0;

        li {
          margin-bottom: 5px;
          font-size: 14px;
          line-height: 1.5;
        }
      }
    }
&__treatment-plan-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      span {
        font-size: 14px;
    }
}
&__doctor-name {
          font-size: 12px;
          color: #555;
        }
&__top-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    justify-content: space-between;
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
    width: 100%;
    //min-height: 3rem;
    display: flex;
    flex-direction: column;
    //padding: 12px;
    box-sizing: border-box;
  }
  &__search-row {
    display: flex;
    height: 100%;
    flex-direction: row;
    box-sizing: border-box;
  }
  &__search-row:last-child {
    border-bottom: none;
  }
  &__search-title{
    width: 4.5rem;
    padding: 5px;
    min-width: 4.5rem;
    background-color: #F0F0F0;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-right: 1px solid #B5B5B5;
  }
  &__btn-wrapper {
    display: flex;
    width: 20%;
    gap: 10px;
    box-sizing: border-box;
    flex-direction: row;
  }
  &__search-btn {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #C6D5F1;
    border: #B5B5B5;
  }
  &__btn-group {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
  }
  &__btn--small {
      font-size: 0.8rem;
      height: 50%;
      background-color: #CFCFCF;
      border: none;
      overflow: hidden;
  }
  //필터링 옵션
  &__search-options {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        font-size: 14px;

        input[type="radio"],
        input[type="checkbox"] {
          margin-right: 2px;
        }

        input[type="text"] {
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        input[type="date"] {
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        select {
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .search-button {
          padding: 5px 10px;
          border: 1px solid #ccc;
          background-color: #f2f2f2;
          border-radius: 4px;
          cursor: pointer;
        }
     }
}
</style>
