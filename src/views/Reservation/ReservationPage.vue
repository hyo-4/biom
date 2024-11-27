<template>
  <div class="reservation-page">
    <div class="reservation-page__header">
      <div class="reservation-page__title-wrapper">
        <img src="@/assets/icon/ic_arrow_right.svg" />
        <div class="reservation-page__title">예약 내용을 입력합니다</div>
      </div>
    </div>
    <div class="reservation-page__body">
      <div class="reservation-page__body-left">
        <div class="reservation-page__box-wrapper">
          <div class="reservation-page__title-wrapper">
            <img src="@/assets/icon/ic_arrow_right.svg" />
            <div class="reservation-page__title">환자 정보</div>
          </div>
          <div class="reservation-page__form">
            <div class="reservation-page__form-group">
              <label for="name">이름</label>
              <input id="name" type="text" placeholder="이름을 입력하세요" />
              <button>검색</button>
              <button>전자차트</button>
            </div>
            <div class="reservation-page__form-group">
              <label for="new" class="reservation-page__highlight"
                >새 예약</label
              >
              <label><input type="checkbox" value="isnew" /></label>신환 예약인
              경우 체크하세요
            </div>
            <div class="reservation-page__form-group">
              <label for="phone">휴대전화 번호</label>
              <input
                id="phone"
                type="tel"
                placeholder="휴대전화 번호를 입력하세요"
              />
            </div>
            <div class="reservation-page__form-group">
              <label for="doctor">예약 담당 의사/직원</label>
              <select id="doctor">
                <option value="" disabled selected>의사를 선택하세요</option>
                <option value="doctor1">의사 1</option>
                <option value="doctor2">의사 2</option>
              </select>
              <select id="staff">
                <option value="" disabled selected>직원을 선택하세요</option>
                <option value="staff1">직원 1</option>
                <option value="staff2">직원 2</option>
              </select>
            </div>
            <div class="reservation-page__form-group">
              <label>문자 전송 옵션</label>
              <div class="checkbox-group">
                <label><input type="checkbox" value="option1" />전송안함</label>
                <label
                  ><input type="checkbox" value="option2" />당일 아침</label
                >
                <label><input type="checkbox" value="option3" />1시간 전</label>
                <label><input type="checkbox" value="option4" />1일 전</label>
                <label><input type="checkbox" value="option5" />2일 전</label>
                <label><input type="checkbox" value="option6" />3일 전</label>
                <label><input type="checkbox" value="option7" />7일전</label>
              </div>
            </div>
            <div class="reservation-page__form-group">
              <label for="reservation-type">예약 구분</label>
              <select id="reservation-type">
                <option value="" disabled selected>
                  예약 구분을 선택하세요
                </option>
                <option value="type1">구분 1</option>
                <option value="type2">구분 2</option>
                <option value="type3">구분 3</option>
              </select>
            </div>
          </div>
        </div>
        <div class="reservation-page__box-wrapper">
          <div class="reservation-page__form-group">
            <label>예약 구분</label>
            <div class="radio-group">
              <label
                ><input type="radio" name="reservation-type" value="type1" />
                일반 예약</label
              >
              <label
                ><input type="radio" name="reservation-type" value="type2" />
                정기 검진</label
              >
              <label
                ><input type="radio" name="reservation-type" value="type3" />
                치석제거</label
              >
              <label
                ><input type="radio" name="reservation-type" value="type3" />
                간단한 예약 (S/O 등)</label
              >
            </div>
          </div>
          <div class="reservation-form">
            <div class="form-group">
              <div class="date-time-wrapper">
                <label for="reservation-date">예약일시</label>
                <input
                  type="text"
                  id="reservation-date"
                  placeholder="날짜를 선택하세요"
                />
                <div class="quick-buttons">
                  <button>1주후</button>
                  <button>1달후</button>
                  <button>3달후</button>
                  <button>6달후</button>
                </div>
              </div>
              <div class="time-select">
                <img src="@/assets/naver_logo.png" width="30px" />
                <label for="reservation-date">예약시간</label>
                <select>
                  <option>15시</option>
                  <option>16시</option>
                  <option>17시</option>
                </select>
                <select>
                  <option>00분</option>
                  <option>30분</option>
                </select>
              </div>
            </div>
            <div class="form-group-wrapper">
              <div class="status-select">
                <label for="duration">소요시간</label>
                <select id="duration">
                  <option>30분</option>
                  <option>1시간</option>
                  <option>1시간 30분</option>
                </select>
              </div>
              <div class="form-group">
                <div class="status-select">
                  <label for="reservation-status">예약상태</label>
                  <button class="status-button">예약표에서 선택</button>
                  <select id="reservation-status">
                    <option>미이행</option>
                    <option>이행완료</option>
                    <option>취소됨</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reservation-page__title-wrapper">
          <img src="@/assets/icon/ic_arrow_right.svg" />
          <div class="reservation-page__title">현재 예약 변경 히스토리</div>
        </div>
        <div class="reservation-page__box-wrapper2">
          <div class="reservation-page__history-red">
            [2020-09-29 17:552:13] 예약 최초 입력 @김원장
          </div>
          <div class="reservation-page__history">
            [2020-09-29 17:552:13] 예약 최초 입력 @김원장
          </div>
        </div>
        <div class="reservation-page__title-wrapper">
          <img src="@/assets/icon/ic_arrow_right.svg" />
          <div class="reservation-page__title">전화 메모 히스토리</div>
        </div>
        <div class="reservation-page__box-wrapper2"></div>
      </div>
      <div class="reservation-page__body-right">
        <div class="reservation-page__box-wrapper">
          <div class="reservation-page__title-wrapper">
            <img src="@/assets/icon/ic_arrow_right.svg" />
            <div class="reservation-page__title">환자 정보</div>
          </div>
          <div class="reservation-page__form">
            <div class="reservation-page__form-group">
              <label class="reservation-page__label">예약 내용</label>
              <select class="reservation-page__select-box">
                <option value="type1">구분 1</option>
                <option value="type2">구분 2</option>
                <option value="type3">구분 3</option>
              </select>
            </div>
            <div class="reservation-page__form-group">
              <label class="reservation-page__label">치아번호</label>
              <select class="reservation-page__select-box">
                <option value="type1">구분 1</option>
                <option value="type2">구분 2</option>
                <option value="type3">구분 3</option>
              </select>
            </div>
            <div class="reservation-page__form-group">
              <label class="reservation-page__label">메모</label>
              <select class="reservation-page__select-box">
                <option value="type1">구분 1</option>
                <option value="type2">구분 2</option>
                <option value="type3">구분 3</option>
              </select>
            </div>
          </div>
          <ColorPicker />
        </div>
        <div class="reservation-page__title-wrapper">
          <img src="@/assets/icon/ic_arrow_right.svg" />
          <div class="reservation-page__title">김덴트 님의 예약 히스토리</div>
        </div>
        <div class="reservation-history">
          <table class="reservation-table">
            <thead>
              <tr>
                <th>예약시각</th>
                <th>담당의사</th>
                <th>예약 내용</th>
                <th>이행여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2020-09-29 15:00</td>
                <td>김원장</td>
                <td>유치 발치 &lt;아이가 많이 무서워해요&gt;</td>
                <td class="status pending">미이행</td>
              </tr>
              <tr>
                <td>2020-09-29 15:00</td>
                <td>김원장</td>
                <td>레진 충전</td>
                <td class="status completed">이행</td>
              </tr>
              <tr>
                <td>2020-09-29 15:00</td>
                <td>김원장</td>
                <td>구강 검진</td>
                <td class="status completed">이행</td>
              </tr>
              <tr>
                <td>2020-09-29 15:00</td>
                <td>김원장</td>
                <td>유치발치</td>
                <td class="status completed">이행</td>
              </tr>
              <tr>
                <td>2020-09-29 15:00</td>
                <td>김원장</td>
                <td>구강 검진 &lt;넘어졌다고 하심&gt;</td>
                <td class="status completed">이행</td>
              </tr>
            </tbody>
          </table>
          <div class="button-group">
            <button class="button gray">카드단말 출력</button>
            <button class="button purple">예약 삭제</button>
            <button class="button blue">확인</button>
            <button class="button gray">취소</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorPicker from '@/components/ColorPicker.vue';
</script>
<style lang="scss">
.reservation-page {
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

  &__header {
    display: flex;
  }
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
    gap: 10px;
  }
  &__body {
    display: flex;
    width: 100%;
    flex-direction: row;
    box-sizing: border-box;
    gap: 20px;
  }
  &__box-wrapper {
    background-color: #F4F4F4;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  &__box-wrapper2 {
    border: 1px solid #D9D9D9;
    min-height: 30px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    max-height: 200px;
    overflow-y: auto;
  }
  &__body-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
  }
  &__body-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
  }
  &__form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
  }
  &__form-group {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0.5rem;
    align-items: center;
  }
  &__form-group input {
    display: flex;
    flex-direction: row;
    width: 60%;
    gap: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  &__form-group select {
    padding: 0.3rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  &__label {
    min-width: 70px;
  }
  &__select-box{
    padding: 0.3rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-width: 50%;
    font-size: 14px;
  }
  &__highlight {
    background-color: #E19EE2;
    padding: 2px;
  }
  &__history-red {
    background-color: #FFEFE5;
    padding: 3px;
  }
  &__history {
    background-color: #F2F2F2;
    padding: 3px;
  }
  .checkbox-group {
    display: flex;
    gap: 0.5rem;
  }
  .checkbox-group label {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
  }
  .radio-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    gap: 0.5rem;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      text-align: center;
    }

    input[type="radio"] {
      accent-color: #5B5B5B;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.reservation-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

  .form-group-wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;
    box-sizing: border-box;
  }

  .form-group {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;

    .date-time-wrapper {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      input {
        flex: 1;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }

      .quick-buttons {
        display: flex;
        gap: 0.5rem;

        button {
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          font-size: 14px;
          cursor: pointer;

          &:hover {
            background-color: #e0e0e0;
          }
        }
      }
    }

    .time-select {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      select {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }
    }
  }

  .status-select {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    .status-button {
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background-color: #e0e0e0;
      }
    }

    select {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }
  }
}
.reservation-history {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  .reservation-table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #ccc;
      padding: 0.5rem;
      text-align: center;
    }

    th {
      background-color: #f9f9f9;
      font-weight: bold;
    }

    tbody tr:nth-child(odd) {
      background-color: #f9f9f9;
    }

    .status {
      &.pending {
        color: red;
        font-weight: bold;
      }

      &.completed {
        color: #4caf50;
        font-weight: bold;
      }
    }
  }

  .button-group {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;

    .button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;

      &.gray {
        background-color: #f0f0f0;
        color: #333;

        &:hover {
          background-color: #e0e0e0;
        }
      }

      &.purple {
        background-color: #e6e0f8;
        color: #5c33cc;

        &:hover {
          background-color: #d9c4f2;
        }
      }

      &.blue {
        background-color: #e0f7fa;
        color: #00796b;

        &:hover {
          background-color: #b2ebf2;
        }
      }
    }
  }
}
</style>
