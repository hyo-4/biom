<template>
  <div class="question-page">
    <div class="question-page__body">
      <div class="question-page__custom_container">
        <div class="question-page__custom_subcontainer_top">
          <div class="question-page__custom_subcontainer_top_button">
            @@
          </div>
          <div class="question-page__custom_subcontainer_top_button">
            @@
          </div>
        </div>
        <div class="question-page__custom_subcontainer_body">
          <div class="question-page__custom_subcontainer_row">
            <div class="question-page__title">
              <img src="@/assets/icon/ic_arrow_right.svg" /> 선택된 검진 대상자 정보
            </div>
            <div class="question-page__custom_subcontainer_body_button">
              정보수정
            </div>
            <div class="question-page__custom_subcontainer_body_button">
              삭제
            </div>
          </div>
          <div class="question-page__custom_subcontainer_row">
            <div>
              <div class="question-page__custom_subcontainer_row">
                <div class="question-page__subtitle">
                  • 이 름 박 민 송
                </div>
                <div class="question-page__subtitle">
                  • 주민번호 970704-0000000
                </div>
              </div>
              <div class="question-page__subtitle">
                • 전화번호 010-4180-8677
              </div>
            </div>
            <div class="question-page__custom_subcontainer_body_button">
              검진포탈<br>자격확인
            </div>
          </div>

          <div class="question-page__custom_subcontainer_row">
            <div class="question-page__title">
              <img src="@/assets/icon/ic_arrow_right.svg" /> 검진 종류 : 일반 구강검진
            </div>
            <div class="question-page__custom_subcontainer_body_button">
              검진일자<br>공단전송
            </div>
          </div>
          <div class="question-page__custom_subcontainer_row">
            <div class="question-page__title">
            <img src="@/assets/icon/ic_arrow_right.svg" /> 검진일
          </div>
          <DatePicker v-model="picked" :locale="locale" :weekStartsOn="0" :inputFormat="inputFormat"
            :clearable="true" />
          </div>
          <div class="question-page__custom_subcontainer_row">
            <div class="question-page__title">
              <img src="@/assets/icon/ic_arrow_right.svg" /> 검진장소
            </div>
            <div class="radio-group">
              <label>
                <input type="radio" value="hospital" v-model="selectedOption" name="options" />
                내원 검진
              </label>
              <label>
                <input type="radio" value="home" v-model="selectedOption" name="options" />
                출장 검진
              </label>
            </div>
          </div>
        </div>
        <div class="question-page__custom_subcontainer_top">
          <div class="question-page__custom_subcontainer_top_button">
            @@
          </div>
          <div class="question-page__custom_subcontainer_top_button">
            @@
          </div>
        </div>
        <div class="question-page__custom_subcontainer_today">
          <div class="question-page__title">
            <img src="@/assets/icon/ic_arrow_right.svg" /> 당일 구강검진 수검자
          </div>
          <div class="question-page__custom_subcontainer_top_button">
            @@
          </div>
          <div class="question-page__custom_subcontainer_top_button">
            @@
          </div>
        </div>
        <div>
          당일 구강검진 수검자
        </div>
        <div class="question-page__custom_subcontainer_footer">
        </div>
      </div>
      <div class="question-page__question_container">
        문진표
        <div class="question-page__question_container_title">
          ※ 치과병력과 구강건강인식도 관련 문항
        </div>
        <div class="question-page__question_container_title">
          ※ 구강건강 습관(설탕섭취, 구강위생, 불소이용, 흡연) 관련 문항
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import DatePicker from 'vue3-datepicker';
import { ko } from 'date-fns/locale';

const locale = reactive(ko);

</script>

<style lang="scss">
.question-page {
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

  &__body {
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: row;
    gap: 46px;
    box-sizing: border-box;
    overflow: hidden;
  }

  &__custom_container {
    flex: 1;
    height: auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 20px;
  }
  &__custom_subcontainer_row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__custom_subcontainer_top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
  }

  &__custom_subcontainer_top_button {
    flex: 1;
    display: flex;
    height: 3.75rem;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #B5B5B5;
    flex-direction: row;
    box-sizing: border-box;
    /* text */
    color: #8B8B8B;
    text-align: center;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__custom_subcontainer_body {
    height: auto;
    overflow-y: auto;
    border-radius: 3px;
    border: 1px solid #B5B5B5;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 20px;
  }
  &__custom_subcontainer_body_row {
    display: flex;
    flex-direction: row;
    gap: 20px;

  }
  &__custom_subcontainer_body_button {
    width: 4.0625rem;
    height: 3.125rem;
    flex-shrink: 0;
    border: 1px solid #A9A9A9;
    justify-content: center;
    align-items: center;
    /* text */
    color: #8B8B8B;
    text-align: center;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__custom_subcontainer_today {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  &__custom_subcontainer_footer {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #B5B5B5;
  }

  &__question_container {
    flex: 2;
    height: auto;
    overflow-y: auto;
    border-radius: 3px;
    border: 1px solid #B5B5B5;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    box-sizing: border-box;
    gap: 20px;

    color: #8B8B8B;
    text-align: left;
    font-family: Inter;
    font-size: 3.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__question_container_title {
    width: 100%;
    height: auto;
    background-color: #8BCEFF;
    padding: 10px 5px;

    color: #000;
    text-align: left;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__title {
    color: #525252;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &__subtitle {
    color: #8B8B8B;
    text-align: justify;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>