<template>
  <div class="profile-page">
    <div class="profile-page__left">
      <img src="@/assets/iv_profile.png" class="profile-page__image" alt="Profile image" />
      <div class="profile-page__profile_button">
        <div class="profile-page__button">
          촬영
        </div>
        <div class="profile-page__button">
          열기
        </div>
        <div class="profile-page__button">
          삭제
        </div>
      </div>
      <div class="profile-page__profile_information">
        보험정보
        <div class="profile-page__profile_information_detail">
          <div class="profile-page__profile_information_detail_title">
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
          <div class="profile-page__profile_information_detail_table">
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
        <div class="profile-page__profile_information_footer">
          <span>
            본원
          </span>
          <span>
            상세정보 보기
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.profile-page {
  width: 24%;
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
  &__image {
    width: 100%;
  }
  &__profile_button {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding-bottom: 5px;
  }
  &__profile_information {
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
  &__profile_information_detail {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 7px;
    padding-top: 15px;
    padding-bottom: 11px;
  }
  &__profile_information_detail_title {
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
  &__profile_information_detail_table {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 5px;
  }
  &__profile_information_footer {
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
    /* text */
    color: #8B8B8B;
    text-align: center;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
