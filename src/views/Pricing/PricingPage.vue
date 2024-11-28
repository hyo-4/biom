<template>
  <div class="pricing-page">
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
    <div class="pricing-page__body">
      <div class="pricing-page__body-left">
        <div class="pricing-page__header">
          <div class="pricing-page__title-wrapper">
            <img src="@/assets/icon/ic_arrow_right.svg" />
            <div class="pricing-page__title">치료비용계획 현황</div>
          </div>
        </div>
        <div class="pricing-page__grid-section">
          <div class="pricing-page__grid-header">
            <span>치료비용계획 현황</span>
            <label> <input type="checkbox" /> 스크린이미지 포함 </label>
          </div>
          <div class="pricing-page__grid-content">
            <div
              class="pricing-page__grid-item"
              v-for="item in 12"
              :key="item"
            ></div>
          </div>
        </div>
        <div class="pricing-page__treatment-plan-container">
          <div class="pricing-page__header">
            <div class="pricing-page__title-wrapper">
              <img src="@/assets/icon/ic_arrow_right.svg" />
              <div class="pricing-page__title">
                김덴트님의 비용설명이 필요한 치료계획
              </div>
            </div>
          </div>
          <div class="pricing-page__treatment-plan-content">
            <div class="pricing-page__treatment-plan-title">
              <span>• 치료계획 #1 @2020-10-19</span>
              <span class="pricing-page__doctor-name">Dr.김원장</span>
            </div>
            <div class="pricing-page__treatment-plan-description">
              <ol>
                <li>[예정] 임플란트</li>
                <li>[예정] 페이셜</li>
                <li>[예정] 브릿지</li>
                <li>[예정] 임시 틀니 제작</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="pricing-page__body-middle">
        <div class="pricing-page__treatment-categories">
          <div
            class="pricing-page__treatment-category"
            v-for="category in categories"
            :key="category.title"
          >
            <div class="pricing-page__treatment-category-title">
              <span>▶ {{ category.title }}</span>
            </div>
            <ul class="pricing-page__treatment-items">
              <li
                class="pricing-page__treatment-item"
                v-for="item in category.items"
                :key="item.name"
              >
                <span class="pricing-page__treatment-item-name">{{
                  item.name
                }}</span>
                <span class="pricing-page__treatment-item-price">{{
                  item.price
                }}</span>
              </li>
            </ul>
          </div>
          <div
            class="pricing-page__treatment-category"
            v-for="category in categories"
            :key="category.title"
          >
            <div class="pricing-page__treatment-category-title">
              <span>▶ {{ category.title }}</span>
            </div>
            <ul class="pricing-page__treatment-items">
              <li
                class="pricing-page__treatment-item"
                v-for="item in category.items"
                :key="item.name"
              >
                <span class="pricing-page__treatment-item-name">{{
                  item.name
                }}</span>
                <span class="pricing-page__treatment-item-price">{{
                  item.price
                }}</span>
              </li>
            </ul>
          </div>
          <div
            class="pricing-page__treatment-category"
            v-for="category in categories"
            :key="category.title"
          >
            <div class="pricing-page__treatment-category-title">
              <span>▶ {{ category.title }}</span>
            </div>
            <ul class="pricing-page__treatment-items">
              <li
                class="pricing-page__treatment-item"
                v-for="item in category.items"
                :key="item.name"
              >
                <span class="pricing-page__treatment-item-name">{{
                  item.name
                }}</span>
                <span class="pricing-page__treatment-item-price">{{
                  item.price
                }}</span>
              </li>
            </ul>
          </div>
          <div
            class="pricing-page__treatment-category"
            v-for="category in categories"
            :key="category.title"
          >
            <div class="pricing-page__treatment-category-title">
              <span>▶ {{ category.title }}</span>
            </div>
            <ul class="pricing-page__treatment-items">
              <li
                class="pricing-page__treatment-item"
                v-for="item in category.items"
                :key="item.name"
              >
                <span class="pricing-page__treatment-item-name">{{
                  item.name
                }}</span>
                <span class="pricing-page__treatment-item-price">{{
                  item.price
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pricing-page__body-right">
        <div class="pricing-page__header">
          <div class="pricing-page__title-wrapper">
            <img src="@/assets/icon/ic_arrow_right.svg" />
            <div class="pricing-page__title">치료 계획</div>
          </div>
        </div>
        <!-- Treatment Table -->
        <div class="pricing-page__treatment-plan-table">
          <table>
            <thead>
              <tr>
                <th>치식</th>
                <th>처치 내용</th>
                <th>금액</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in treatmentItems" :key="item.id">
                <td><img :src="item.image" alt="치식" /></td>
                <td>{{ item.description }}</td>
                <td>{{ item.price }}</td>
                <td class="pricing-page__delete"><a href="#">삭제</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 영수증 -->
        <div class="pricing-page__treatment-plan-summary">
          <div class="pricing-page__summary-row">
            <div class="pricing-page__summary-label">치료비 합계</div>
            <div class="pricing-page__summary-value">@@@@@@@@ 원</div>
          </div>
          <div class="pricing-page__summary-row">
            <div class="pricing-page__summary-label">부가가치세</div>
            <div class="pricing-page__summary-value">@@@@@@@@ 원</div>
          </div>
          <div class="pricing-page__summary-row">
            <div class="pricing-page__summary-label">계약금액</div>
            <div class="pricing-page__summary-value">@@@@@@@@ 원</div>
          </div>
          <div class="pricing-page__summary-row">
            <div class="pricing-page__summary-label">교정치료</div>
            <div class="pricing-page__summary-value">
              <input type="text" placeholder="금액 입력" /> 원
            </div>
          </div>
          <div class="pricing-page__summary-row">
            <div class="pricing-page__summary-label">메모</div>
            <div class="pricing-page__summary-value">
              <input type="text" placeholder="메모 입력" />
            </div>
          </div>
        </div>
        <div class="pricing-page__treatment-plan-footer">
          <div class="pricing-page__footer-row">
            <div>담당의사</div>
            <select>
              <option>김원장</option>
              <option>이원장</option>
            </select>
            <div>상담자</div>
            <select>
              <option>김원장</option>
              <option>이원장</option>
            </select>
          </div>
          <div class="pricing-page__footer-row">
            <textarea placeholder="주문 메모 입력">입력하세요</textarea>
          </div>
          <div class="pricing-page__footer-buttons">
            <button class="btn-confirm">계획 확정</button>
            <button class="btn-save">저장 후 닫기</button>
            <button class="btn-print">출력</button>
            <button class="btn-delete">계획 삭제</button>
            <button class="btn-close">닫기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref(''); //검색어
const categories = [
  {
    title: '임플란트 치료',
    items: [
      { name: '신흥 루나 임플란트', price: '150만원' },
      { name: '신흥 루나 임플란트', price: '150만원' },
      { name: '신흥 루나 임플란트', price: '150만원' },
      { name: '신흥 루나 임플란트', price: '150만원' }
    ]
  },
  {
    title: '보존 치료',
    items: [
      { name: '신흥 루나 임플란트', price: '150만원' },
      { name: '신흥 루나 임플란트', price: '150만원' },
      { name: '신흥 루나 임플란트', price: '150만원' },
      { name: '신흥 루나 임플란트', price: '150만원' }
    ]
  }
];
const postitItem = [
  {
    name: 'post1',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post2',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post3',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post4',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post5',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post6',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post7',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post8',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post9',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post10',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post11',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post12',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post13',
    icon: require('@/assets/post_it.png')
  },
  {
    name: 'post14',
    icon: require('@/assets/post_it.png')
  }
];
const treatmentItems = [
  {
    id: 1,
    image: require('@/assets/post_it.png'),
    description: '임플란트',
    price: '150만원'
  },
  {
    id: 2,
    image: require('@/assets/post_it.png'),
    description: '복잡 발치',
    price: '120만원'
  },
  {
    id: 3,
    image: require('@/assets/post_it.png'),
    description: '추가 치료',
    price: '50만원'
  },
  {
    id: 4,
    image: require('@/assets/post_it.png'),
    description: '임시 틀니',
    price: '30만원'
  }
];
</script>

<style lang="scss">
.pricing-page {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  color: #5b5b5b;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;

  &__body {
    display: flex;
    width: 100%;
    flex-direction: row;
    box-sizing: border-box;
    gap: 20px;
    border: 1px solid #d9d9d9;
    padding: 15px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  &__body-left {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
  }
  &__body-middle {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 100%;
    box-sizing: border-box;
  }
  &__body-right {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
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
    color: #5b5b5b;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    span {
      color: #828282;
      font-weight: 400;
    }
  }
  //grid
  &__grid-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
  }
  &__grid-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;

    label {
      font-size: 12px;
      font-weight: normal;
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  &__grid-content {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
  &__grid-item {
    aspect-ratio: 1;
    background-color: #e0e0e0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  &__treatment-plan-content {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
  }
  &__treatment-plan-header {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__treatment-plan-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
      font-size: 14px;
    }
  }
  &__treatment-plan-description {
    font-size: 14px;

    ol {
      padding-left: 20px;
      margin: 0;

      li {
        margin-bottom: 5px;
        font-size: 14px;
        border-bottom: 1px solid #ccc;
        line-height: 1.5;
      }
    }
  }
  &__treatment-categories {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns layout */
    gap: 20px; /* Space between columns and rows */
    width: 100%;
    box-sizing: border-box;
  }
  &__treatment-category {
    border-bottom: 1px solid #ccc; /* Divider between categories */
    padding: 10px;
  }
  &__treatment-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  &__treatment-item {
    display: flex;
    justify-content: space-between; /* Align name and price */
    padding: 5px 0;
    border-bottom: 1px dotted #ddd; /* Optional divider between items */

    &:last-child {
      border-bottom: none; /* Remove divider for last item */
    }
  }
  &__treatment-item-name {
    font-size: 14px;
  }
  &__treatment-item-price {
    font-size: 14px;
    font-weight: bold;
  }
  //영수증

  &__treatment-plan-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__treatment-plan-table {
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;

      th,
      td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
      }

      th {
        background-color: #f9f9f9;
        font-weight: bold;
      }

      td {
        justify-content: center;
      }

      td img {
        width: 80%;
        max-width: 50px;
        max-height: 30px;
        height: auto;
      }

      .delete {
        color: red;
        text-align: center;

        a {
          color: red;
          text-decoration: none;
        }
      }
    }
  }

  &__summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  &__summary-label {
    font-weight: bold;
  }

  &__summary-value {
    input {
      padding: 5px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    span {
      font-size: 12px;
      color: #666;
      margin-left: 10px;
    }
  }
  &__footer-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    select,
    textarea {
      margin-left: 10px;
      padding: 5px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    textarea {
      width: 100%;
      height: 60px;
    }
  }
  &__footer-buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;

      &.btn-confirm {
        background-color: #007bff;
        color: #fff;
      }

      &.btn-save {
        background-color: #28a745;
        color: #fff;
      }

      &.btn-print {
        background-color: #6c757d;
        color: #fff;
      }

      &.btn-delete {
        background-color: #dc3545;
        color: #fff;
      }

      &.btn-close {
        background-color: #ffc107;
        color: #fff;
      }
    }
  }
}
</style>
