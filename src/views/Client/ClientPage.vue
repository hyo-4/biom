<template>
  <div class="client-detail-page">
    <div class="client-detail-page__header">
      <div><img src="@/assets/icon/ic_arrow_right.svg" /> VVIP</div>
    </div>
    <div class="client-detail-page__body">
      <div class="client-detail-page__left"><MenuPage2 /></div>
      <div class="client-detail-page__right">
        <div class="client-detail-page__basic-info">
          <div class="client-detail-page__basic-info_left">
            <div class="client-detail-page__form-item">
              <label for="name" class="client-detail-page__form-label"
                >이름</label
              >
              <input class="client-detail-page__input" type="text" />
              <button>C</button>
            </div>
            <div class="client-detail-page__form-item">
              <label for="chart-number" class="client-detail-page__form-label"
                >차트번호</label
              >
              <input class="client-detail-page__input" type="text" />
              <button>변경</button>
            </div>
            <div class="client-detail-page__form-item">
              <label for="address" class="client-detail-page__form-label"
                >주소</label
              >
              <input
                class="client-detail-page__input"
                type="text"
                placeholder="04321"
              />
              <button>검색</button>
            </div>
          </div>
          <div class="client-detail-page__basic-info_right">
            <div class="client-detail-page__form-item">
              <label
                for="resident-number"
                class="client-detail-page__form-label"
                >주민번호</label
              >
              <input
                class="client-detail-page__input"
                type="text"
                placeholder="970704"
              />
              -
              <input
                class="client-detail-page__input"
                type="text"
                placeholder="000000"
              />
              <button>공단</button>
            </div>
            <div class="client-detail-page__form-item">
              <label for="name" class="client-detail-page__form-label"
                >생년월일</label
              >
              <input class="client-detail-page__input" type="text" />
              <button>양력</button>
              <input type="checkbox" />
              리콜일로부터
            </div>
            <div class="client-detail-page__form-item">
              <input class="client-detail-page__wide-input" type="text" />
              <button>편집</button>
            </div>
          </div>
        </div>
        <div class="client-detail-page__address-wrapper">
          <input
            class="client-detail-page__wide-input"
            type="text"
            placeholder="서울특별시 용산구 한강대로 372 아스테리움 C동 2층(후암동)"
          />
        </div>
        <div class="client-detail-page__hospital-info">
          <div class="client-detail-page__hospital-left">
            <div class="client-detail-page__form-item">
              <label for="name" class="client-detail-page__form-label"
                >리콜구분</label
              >
              <select class="client-detail-page__select">
                <option value="기본리콜">기본리콜</option>
                <option value="기본리콜">기본리콜</option>
              </select>
            </div>
            <div class="client-detail-page__form-item">
              <label for="name" class="client-detail-page__form-label"
                >내원경로</label
              >
              <select class="client-detail-page__select">
                <option value="지인소개">지인소개</option>
                <option value="지인소개">지인소개</option>
              </select>
            </div>
          </div>
          <div class="client-detail-page__hospital-right">
            <div class="client-detail-page__form-item">
              <label for="name" class="client-detail-page_form-label"
                >최종내원일</label
              >
              <input
                type="text"
                placeholder="2024-08-31"
                class="client-detail-page__wide-input"
              />
            </div>
            <div class="client-detail-page__form-item">
              <label for="name" class="client-detail-page_form-label"
                >소개하신분</label
              >
              <input type="text" class="client-detail-page__wide-input" />
              <button>검색</button>
            </div>
          </div>
        </div>
        <div class="client-detail-page__etc-info">
          <div class="client-detail-page__separate">
            <div class="client-detail-page__tendency">
              <label for="name" class="client-detail-page__form-label"
                >고객 성향</label
              >
              <select class="client-detail-page__select">
                <option value="1">고객성향1</option>
                <option value="2">고객성향2</option>
              </select>
            </div>
            <div class="client-detail-page__separate-select">
              <label for="name" class="client-detail-page__form-label"
                >구분</label
              >
              <select class="client-detail-page__wide-input">
                <option value="구분1">전체 치료 원함</option>
                <option value="구분2">부분 치료 원함</option>
              </select>
            </div>
            <div class="client-detail-page__separate-select">
              <label for="name" class="client-detail-page__form-label"
                >구분2</label
              >
              <select class="client-detail-page__wide-input">
                <option value="구분2선택">- 선택 -</option>
                <option value="구분2선택">- 선택 -</option>
              </select>
            </div>
          </div>
        </div>
        <div class="client-detail-page__edit-wrapper">
          <div class="client-detail-page__edit-left">
            <div class="client-detail-page__memo-container">
              <div class="client-detail-page__form-item">
                <label for="memo" class="client-detail-page_form-label"
                  >환자 메모</label
                >
                <textarea type="text" class="client-detail-page__wide-input" />
              </div>
            </div>
            <div class="client-detail-page__doctor-info">
              <label>담당의사/직원</label>
              <select class="client-detail-page__select">
                <option value="직원1">- 의사 1 -</option>
                <option value="직원2">- 의사 2 -</option>
              </select>
              <select class="client-detail-page__select">
                <option value="직원1">- 의사 1 -</option>
                <option value="직원2">- 의사 2 -</option>
              </select>
            </div>
            <div class="client-detail-page__check-options">
              <div class="client-page__check_container">
                <label v-for="(option, index) in checkOptions" :key="index">
                  <input
                    type="checkbox"
                    :value="option"
                    v-model="checkedOptions"
                  />
                  {{ option }}
                </label>
              </div>
            </div>
          </div>
          <div class="client-detail-page__edit-right">
            <div class="client-detail-page__button-container">
              <button class="client-detail-page__button">신환<br />등록</button>
              <button class="client-detail-page__button">환자<br />저장</button>
              <button class="client-detail-page__button">접수</button>
              <button class="client-detail-page__button">
                문서<br />
                출력
              </button>
              <RouterLink to="/question">
                <button class="client-detail-page__button">문진표</button>
              </RouterLink>
              <div class="client-detail-page__small-buttons">
                <button class="client-detail-page__small-button">삭제</button>
                <button class="client-detail-page__small-button">설정</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import MenuPage2 from '../Menu/MenuPage2.vue';

const checkOptions = ['정보제공 동의', '알림톡X', '문자거부'];
const checkedOptions = ref([]);
</script>
<style lang="scss">
.client-detail-page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 742px;
    height: 519px;
    border: 1px solid #A5A5A5;
    padding: 10px;
    &__header {
        display: flex;
        flex-direction: column;
        height: 40px;
        color: #D32626;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &__body {
        width: 100%;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
    }
    &__left {
        flex: 1;
    }
    &__right {
        flex: 3;
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        gap: 10px;
    }
    &__form-row-item {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    &__basic-info {
        display: flex;
        width: 100%;
        flex-direction: row;
    }
    &__basic-info_left {
        flex: 3;
        display: flex;
        flex-direction: column;
        gap: 5px;
        box-sizing: border-box;
        padding-right: 10px;
    }
    &__basic-info_right {
        flex: 5;
        display: flex;
        flex-direction: column;
        gap: 5px;
        box-sizing: border-box;
    }
    &__form-item {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 14px;
        white-space: nowrap;
        box-sizing: border-box;
        gap: 5px;
        button {
        padding: 5px 10px;
        border: none;
        min-width: 50px;
        background-color: white;
        border: 1px solid #ccc;
        cursor: pointer;
        border-radius: 4px;
        white-space: nowrap;
        box-sizing: border-box;

        &:hover {
            color: white;
            background-color: #ccc;
        }
       }
    }
    &__form-label {
        width: 50px;
        display: flex;
        justify-content: center;
        margin: 2px;
        white-space: nowrap;
    }
    &__input {
        width: calc(100% / 5);
        min-width: 100px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    &__wide-input {
        width: 100%;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    &__address-wrapper {
        padding-left: 55px;
    }
    &__hospital-info {
        display: flex;
        flex-direction: row;
    }
    &__hospital-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
    }
    &__hospital-right {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: center;
        gap: 5px;
        flex: 1;
    }
    &__select {
        width: 50%;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    &__separate {
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 14px;
        align-items: center;
        box-sizing: border-box;
    }
    &__tendency {
        display: flex;
        flex-direction: row;
        flex:1;
        gap: 5px;
        align-items: center;
    }
    &__separate-select {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex:2;
        padding: 0 10px;
        box-sizing: border-box;
    }
    &__edit-wrapper{
        display: flex;
        flex-direction: row;
        font-size: 14px;
    }
    &__edit-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 5px;
        textarea {
            width: 248px;
            height: 60px;
            resize: none;
        }
    }
    &__edit-right {
        flex: 1;
    }
    &__doctor-info {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        gap: 5px;
    }
    &__check-options {
        padding-left: 5px;
        padding-top: 5px;
    }
    &__button-container {
        display: grid;
        box-sizing: border-box;
        width: 100%;
        padding: 0 5px;
        margin-left: 5px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto;
        gap: 10px;
    }
    &__button {
        width: 100%;
        font-size: 16px;
        padding: 10px;
        height: 60px;
        background-color: white;
        border: 1px solid #A9A9A9;
        color: #A9A9A9;
        box-sizing: border-box;
        cursor: pointer;
    }
    &__small-buttons {
        display: flex;
        flex-direction: column;
        gap: 5px;
        box-sizing: border-box;
    }
    &__small-button {
        flex: 1;
        cursor: pointer;
        height: 27px;
        box-sizing: border-box;
        background-color: white;
        border: 1px solid #A9A9A9;
        color: #A9A9A9;
    }
}
</style>
