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
              <div class="question-page__custom_subcontainer_body_button">
                정보수정
              </div>
              <div class="question-page__custom_subcontainer_body_button">
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
          <div class="question-page__custom_subcontainer_date">
            <div class="question-page__title">
              <img src="@/assets/icon/ic_arrow_right.svg" /> 검진일
            </div>
            <input type="date" class="form-control" v-model="recruit_endperiod" required>
          </div>
          <div class="question-page__custom_subcontainer_location">
            <div class="question-page__title">
              <img src="@/assets/icon/ic_arrow_right.svg" /> 검진장소
            </div>
            <div class="question-page__radio-group">
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
          <input type="date" class="form-control" v-model="recruit_endperiod" required>
          <div class="question-page__custom_subcontainer_today_button">
            @@
          </div>
        </div>
        <div class="question-page__search">
          <div class="question-page__checkbox-group">
            <label>
              <input type="checkbox" value="option1" v-model="selectedOptions" />
              일반/생애
            </label>
            <label>
              <input type="checkbox" value="option2" v-model="selectedOptions" />
              영유아
            </label>
            <label>
              <input type="checkbox" value="option3" v-model="selectedOptions" />
              학생검진
            </label>
            <label>
              <input type="checkbox" value="option4" v-model="selectedOptions" />
              학교밖
            </label>
          </div>
          <div class="question-page__search_box">
            @@
          </div>
          <div class="question-page__search_button">
            검색
          </div>
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
          <label>
            <input type="radio" value="hospital" v-model="selectedOption" name="options" />
            예
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            아니오
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          2. 현재 당뇨병을 앓고 계십니까?
        </div>
        <div class="question-page__radio-group">
          <label>
            <input type="radio" value="hospital" v-model="selectedOption" name="options" />
            예
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            아니오
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            모르겠다
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          3. 현재 심혈관질환을 앓고 계십니까?
        </div>
        <div class="question-page__radio-group">
          <label>
            <input type="radio" value="hospital" v-model="selectedOption" name="options" />
            예
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            아니오
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            모르겠다
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          4. 최근 3개월 동안, 치아나 잇몸 문제로 혹은 틀니 때문에 음식을 씹는 데에 불편감을 느끼신 적이 있습니까?
        </div>
        <div class="question-page__radio-group">
          <label>
            <input type="radio" value="hospital" v-model="selectedOption" name="options" />
            예
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            아니오
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          5. 최근 3개월 동안, 치아가 쑤시거나 욱신거리거나 아픈 적이 있습니까?
        </div>
        <div class="question-page__radio-group">
          <label>
            <input type="radio" value="hospital" v-model="selectedOption" name="options" />
            예
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            아니오
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          6. 최근 3개월 동안, 잇몸이 아프거나 피가 난 적이 있습니까?
        </div>
        <div class="question-page__radio-group">
          <label>
            <input type="radio" value="hospital" v-model="selectedOption" name="options" />
            예
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            아니오
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          7. 스스로 생각하실 때에 치아와 잇몸 등 귀하의 구강건강이 어떤 편이라고 생각하십니까?
        </div>
        <div class="question-page__radio-group">
          <label>
            <input type="radio" value="hospital" v-model="selectedOption" name="options" />
            매우 좋음
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            좋음
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            보통
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            나쁨
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            매우 나쁨
          </label>
        </div>
        <div class="question-page__question_container_title">
          ※ 구강건강 습관(설탕섭취, 구강위생, 불소이용, 흡연) 관련 문항
        </div>
        <div class="question-page__question_container_subtitle">
          8. 치아 닦는 방법을 치과나 보건소에서 배운 적이 있습니까?
        </div>
        <div class="question-page__radio-group">
          <label>
            <input type="radio" value="hospital" v-model="selectedOption" name="options" />
            예
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            아니오
          </label>
        </div>
        <div class="question-page__question_container_subtitle">
          9. 어제 하루 동안 치아를 몇 번 닦으셨습니까?
        </div>
        <div class="question-page__radio-group">
          <label>
            <input type="radio" value="hospital" v-model="selectedOption" name="options" />
            0회
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            1회
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            2회
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            3회
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            4회
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            5회
          </label>
          <label>
            <input type="radio" value="home" v-model="selectedOption" name="options" />
            6회 이상
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">



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
    height: 95vh;
    display: flex;
    flex-direction: row;
    gap: 46px;
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
    gap: 20px;
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
  &__custom_subcontainer_body_button2_layout {
    display: flex;
    justify-content: start;
    flex-direction: row;
    gap: 20px;
  }
  &__custom_subcontainer_body_button2 {
    display: flex;
    flex-shrink: 0;
    border-radius: 3px;
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
    gap: 10px;
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
    position: relative;

  }
  &__custom_subcontainer_body_row {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  &__custom_subcontainer_date {
    display: flex;
    flex-direction: row;
    gap: 20px;
    position: relative;
  }
  &__datepicker {
    position: absolute; /* DatePicker를 절대 위치로 설정 */
    top: 100%; /* 상위 요소의 아래쪽으로 위치 설정 */
    left: 0; /* 왼쪽 정렬 */
     z-index: 9999; /* 다른 요소 위에 오도록 z-index 설정 */
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
  &__question_container_subtitle {
    color: #000;
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
}
</style>