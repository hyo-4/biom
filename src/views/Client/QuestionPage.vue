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
            <div class="question-page__custom_subcontainer_body_row">
              <div class="question-page__custom_subcontainer_body_button" @click="editInfo">
                정보수정
              </div>
              <div class="question-page__custom_subcontainer_body_button" @click="deleteInfo">
                삭제
              </div>
            </div>
          </div>
          <div class="question-page__custom_subcontainer_row">
            <div class="question-page__custom_subcontainer_information_text">
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
            <div class="question-page__custom_subcontainer_body_button" @click="checkExam">
              검진포탈<br>자격확인
            </div>
          </div>

          <div class="question-page__custom_subcontainer_row">
            <div class="question-page__title">
              <img src="@/assets/icon/ic_arrow_right.svg" /> 검진 종류 : 일반 구강검진
            </div>
            <div class="question-page__custom_subcontainer_body_button" @click="sendExam">
              검진일자<br>공단전송
            </div>
          </div>
          <div class="question-page__custom_subcontainer_date">
            <div class="question-page__title">
              <img src="@/assets/icon/ic_arrow_right.svg" /> 검진일
            </div>
            <input type="date" id="exam-date" placeholder="년 월 일" v-model="examDate">
          </div>
          <div class="question-page__custom_subcontainer_location">
            <div class="question-page__title">
              <img src="@/assets/icon/ic_arrow_right.svg" /> 검진장소
            </div>
            <div class="question-page__radio-group">
              <label v-for="(option, index) in examOptions" :key="index">
                <input type="radio" :value="option" v-model="selectedExam" />
                {{ option }}
              </label>
            </div>
          </div>
        </div>
        <div class="question-page__custom_subcontainer_body_button2_layout">
          <div class="question-page__custom_subcontainer_body_button2">
            @@
          </div>
          <div class="question-page__custom_subcontainer_body_button2">
            @@
          </div>
        </div>
        <div class="question-page__custom_subcontainer_today">
          <div class="question-page__title">
            <img src="@/assets/icon/ic_arrow_right.svg" /> 당일 구강검진 수검자
          </div>
          <input type="date" id="current-date" v-model="currentDayPatients">
          <div class="question-page__custom_subcontainer_today_button">
            @@
          </div>
        </div>
        <div class="question-page__search">
          <div class="question-page__checkbox-group">
            <label v-for="(option, index) in locationOptions" :key="index">
              <input type="checkbox" :value="option" v-model="selectedLocation" />
              {{ option }}
            </label>
          </div>
          <input v-model="searchQuery" type="text" class="question-page__search-input" placeholder="검색" />
          <button class="question-page__search-submit" @click="performSearch">검색</button>
        </div>
        <div class="question-page__custom_subcontainer_footer">
        </div>
      </div>
      <div class="question-page__question_container">
        문진표
        <div class="question-page__question_container_title">
          ※ 치과병력과 구강건강인식도 관련 문항
        </div>
        <div class="question-page__question_container_subtitle">
          1. 최근 1년간 구강병 치료나 관리를 목적으로 치과병(의)원에 가신 적이 있습니까?
        </div>
        <div class="question-page__radio-group">
          <label v-for="(option, index) in binaryOptions" :key="index">
            <input type="radio" :value="option" v-model="selected1" />
            {{ option }}
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          2. 현재 당뇨병을 앓고 계십니까?
        </div>
        <div class="question-page__radio-group">
          <label v-for="(option, index) in ternaryOptions" :key="index">
            <input type="radio" :value="option" v-model="selected2" />
            {{ option }}
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          3. 현재 심혈관질환을 앓고 계십니까?
        </div>
        <div class="question-page__radio-group">
          <label v-for="(option, index) in ternaryOptions" :key="index">
            <input type="radio" :value="option" v-model="selected3" />
            {{ option }}
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          4. 최근 3개월 동안, 치아나 잇몸 문제로 혹은 틀니 때문에 음식을 씹는 데에 불편감을 느끼신 적이 있습니까?
        </div>
        <div class="question-page__radio-group">
          <label v-for="(option, index) in binaryOptions" :key="index">
            <input type="radio" :value="option" v-model="selected4" />
            {{ option }}
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          5. 최근 3개월 동안, 치아가 쑤시거나 욱신거리거나 아픈 적이 있습니까?
        </div>
        <div class="question-page__radio-group">
          <label v-for="(option, index) in binaryOptions" :key="index">
            <input type="radio" :value="option" v-model="selected5" />
            {{ option }}
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          6. 최근 3개월 동안, 잇몸이 아프거나 피가 난 적이 있습니까?
        </div>
        <div class="question-page__radio-group">
          <label v-for="(option, index) in binaryOptions" :key="index">
            <input type="radio" :value="option" v-model="selected6" />
            {{ option }}
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          7. 스스로 생각하실 때에 치아와 잇몸 등 귀하의 구강건강이 어떤 편이라고 생각하십니까?
        </div>
        <div class="question-page__radio-group">
          <label v-for="(option, index) in feedbackOptions" :key="index">
            <input type="radio" :value="option" v-model="selected7" />
            {{ option }}
          </label>
        </div>
        <div class="question-page__question_container_title">
          ※ 구강건강 습관(설탕섭취, 구강위생, 불소이용, 흡연) 관련 문항
        </div>
        <div class="question-page__question_container_subtitle">
          8. 치아 닦는 방법을 치과나 보건소에서 배운 적이 있습니까?
        </div>
        <div class="question-page__radio-group">
          <label v-for="(option, index) in binaryOptions" :key="index">
            <input type="radio" :value="option" v-model="selected8" />
            {{ option }}
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          9. 어제 하루 동안 치아를 몇 번 닦으셨습니까?
        </div>
        <div class="question-page__radio-group">
          <label v-for="(option, index) in frequencyOptions" :key="index">
            <input type="radio" :value="option" v-model="selected9" />
            {{ option }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
//버튼 함수
const editInfo = () => {
  alert("정보수정");
}
const deleteInfo = () => {
  alert("삭제");
}
const checkExam = () => {
  alert("검진포탈 자격확인");
}
const sendExam = () => {
  alert("검진일자 공단전송");
}

//checkbox 옵션
const locationOptions = ['일반/생애', '영유아', '학생검진', '학교밖'];
const selectedLocation = ref([]);

//radio 검진장소 옵션
const examOptions = ['내원 검진', '출장 검진'];
const selectedExam = ref('');

//radio 문진표 옵션
const binaryOptions = ['예', '아니오'];
const ternaryOptions = ['예', '아니오', '모르겠다'];
const feedbackOptions = ['매우 좋음', '좋음', '보통', '나쁨', '매우 나쁨'];
const frequencyOptions = ['0회', '1회', '2회', '3회', '4회', '5회', '6회 이상'];
const selected1 = ref('');
const selected2 = ref('');
const selected3 = ref('');
const selected4 = ref('');
const selected5 = ref('');
const selected6 = ref('');
const selected7 = ref('');
const selected8 = ref('');
const selected9 = ref('');

//date 모델
const examDate = ref('');
const currentDayPatients = ref('');

//search 
const searchQuery = ref(""); //검색어
const performSearch= ()=> { //검색 함수
    alert(searchQuery.value);
}
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

  &__body {
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: row;
    gap: 40px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  &__custom_container {
    flex: 1;
    height: auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 10px;
  }
  &__custom_subcontainer_row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  &__custom_subcontainer_top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }

  &__custom_subcontainer_top_button {
    flex: 1;
    display: flex;
    height: 3.75rem;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border: 1px solid #B4B4B4;
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
  &__custom_subcontainer_body_button2_layout {
    display: flex;
    justify-content: start;
    flex-direction: row;
    gap: 10px;
    padding-bottom: 14px;
  }
  &__custom_subcontainer_body_button2 {
    display: flex;
    flex-shrink: 0;
    border: 1px solid #B5B5B5;
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px 40px;

    /* text */
    color: #8B8B8B;
    text-align: center;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__custom_subcontainer_information_text {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  &__custom_subcontainer_body {
    height: auto;
    overflow-y: auto;
    border: 1px solid #B5B5B5;
    padding: 20px 20px;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    box-sizing: border-box;
    gap: 10px;
  }
  &__custom_subcontainer_body_row {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  &__custom_subcontainer_date {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  &__custom_subcontainer_location {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  &__custom_subcontainer_body_button {
    flex-shrink: 0;
    border: 1px solid #A9A9A9;
    padding: 5px 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
    gap: 10px;
  }
  &__custom_subcontainer_today_button {
    flex: 1;
    flex-shrink: 0;
    border: 1px solid #A9A9A9;
    padding: 5px 5px;
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
  &__search {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-bottom: 13px;
  }
  &__search-input {
    width: 8rem;
  }
  &__search-submit {
    flex: 1;
    background: white;
    border: 1px solid #B4B4B4;
    /* text */
    color: #8B8B8B;
    text-align: center;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__search_box {
    flex: 1;
    flex-shrink: 0;
    border: 1px solid #A9A9A9;
    padding: 5px 5px;
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
  &__search_button {
    flex: 1;
    flex-shrink: 0;
    border: 1px solid #A9A9A9;
    padding: 5px 5px;
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
  &__custom_subcontainer_footer {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border: 1px solid #B5B5B5;
  }

  &__question_container {
    flex: 2;
    height: auto;
    overflow-y: auto;
    border: 1px solid #B5B5B5;
    display: flex;
    flex-direction: column;
    padding: 40px 40px;
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
  &__question_container_subtitle {
    color: #000;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__checkbox-group {
    color: #8B8B8B;
    font-family: Inter;
    font-size: 0.875rem;
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
  &__radio-group {
    color: #8B8B8B;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__radio-group label {
    margin-right: 10px;
  }
}
</style>