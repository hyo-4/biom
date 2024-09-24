<template>
  <div class="client-detail-page">
    <div class="client-detail-page__left">
      <img src="@/assets/iv_profile.png" class="client-detail-page__image-profile" alt="Profile image" />
      <div class="client-detail-page__button_wrapper">
        <div class="client-detail-page__button" @click="shootProfile">
          촬영
        </div>
        <div class="client-detail-page__button" @click="openProfile">
          열기
        </div>
        <div class="client-detail-page__button" @click="deleteProfile">
          삭제
        </div>
      </div>
      <div class="client-detail-page__left_container">
        보험정보
        <div class="client-detail-page__left_container_body">
          <div class="client-detail-page__left_container_body_title">
            <span>
              구분
            </span>
            <span>
              가입자
            </span>
            <span>
              증번호
            </span>
            <span>
              사업자
            </span>
            <span>
              공상
            </span>
          </div>
          <div class="client-detail-page__left_container_body_table">
            <table>
              <tr>
                <td>건강보험</td>
              </tr>
              <tr>
                <td>파이퀀트</td>
              </tr>
              <tr>
                <td>2024052401</td>
              </tr>
              <tr>
                <td>국민건강보험</td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="client-detail-page__left_container_footer">
          <span>
            본원
          </span>
          <span class="client-detail-page__detail_profile_button" @click="detailProfile">
            상세정보 보기
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const shootProfile = () => {
  //촬영 함수
  alert("촬영");

}
const openProfile = () => {
  //열기 함수
  alert("열기");
}
const deleteProfile = () => {
  //삭제 함수
  alert("삭제");
}
const detailProfile = () => {
  //상세정보 보기 함수
  alert("상세정보");
}
</script>

<style lang="scss">
.client-detail-page {
  width: 25%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &__left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__image-profile {
    width: 100%;
  }
  &__button_wrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding-bottom: 5px;
  }
  &__left_container {
    border: 1px solid #A9A9A9;
    flex-shrink: 0;
    padding: 5px 5px;
    flex-direction: column;
    /* text */
    color: #8B8B8B;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &__left_container_body {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 7px;
    padding-top: 15px;
    padding-bottom: 11px;
  }
  &__left_container_body_title {
    display: flex;
    flex-direction: column;
    gap: 9px;
    color: #8B8B8B;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    justify-content: center;
    align-items: center;
  }
  &__left_container_body_table {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 5px;
  }
  &__left_container_footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    /* text */
    color: #8B8B8B;
    text-align: center;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__button {
    flex: 1;
    flex-shrink: 0;
    border: 1px solid #A9A9A9;
    padding: 6px 10px;
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
  &__detail_profile_button {
    cursor: pointer;
  }
}

table {
  border-collapse: collapse;
}
tr, td {
    height: 1.5625rem;
    border: 1px solid #A9A9A9;
    padding: 0px 5px;
    /* text */
    color: #8B8B8B;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
