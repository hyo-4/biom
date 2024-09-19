<template>
  <div class="menu-page">
    <div class="menu-page__topbar">
      <div class="menu-page__topbar_left">
        <div class="menu-page__search-wrapper">
          <input
            v-model="searchQuery"
            type="text"
            class="menu-page__search-input"
            placeholder="검색"
          />
          <img
            src="@/assets/icon/ic_folder_search.svg"
            class="menu-page__icon-search"
            @click="performSearch"
            alt="Search Icon"
          />
        </div>
        <div class="menu-page__button_wrapper">
          <button class="menu-page__button">화상키보드</button>
          <button class="menu-page__button">한자검색</button>
          <button class="menu-page__button">Post it</button>
        </div>
      </div>
      <div class="menu-page__topbar_middle">middle</div>
      <div class="menu-page__topbar_right">logo</div>
    </div>
    <div class="menu-page__body">
      <div class="menu-page__menu_container">
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div>body</div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />SMS/ Open Api 관련 설정
          </div>
          <div>body</div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div>body</div>
        </div>
      </div>
      <div class="menu-page__menu_container">
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div>body</div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />SMS/ Open Api 관련 설정
          </div>
          <div>body</div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div>body</div>
        </div>
      </div>
      <div class="menu-page__menu_container">
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div>body</div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />SMS/ Open Api 관련 설정
          </div>
          <div>body</div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div>body</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref(""); //검색어
const performSearch= ()=> { //검색 함수
    console.log(searchQuery.value);
}
</script>

<style lang="scss">
.menu-page {
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 44px;

  &__topbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 46px;
  }
  &__body {
    width: 100%;
    //background-color: blue;
    display: flex;
    flex-direction: row;
    gap: 46px;
  }
  &__topbar_left{
    flex: 1.5;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__search-wrapper {
  width: 100%;
  position: relative;
  display: flex;
  }
 &__search-input {
  padding: 10px;
  width: 100%;
  padding-right: 0px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  }
 &__icon-search {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  color: #888;
  }
  &__button_wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  &__button {
    width: 100%;
    border: 1px solid #B5B5B5;
    color: #9B9B9B;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
  &__topbar_middle {
    flex: 4;
  }
  &__topbar_right {
    flex: 1;
  }
  &__menu_container {
    width: 100%;
    border-radius: 3px;
    border: 1px solid #B5B5B5;
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
  }
  &__menu_subcontainer {
    display: flex;
    flex-direction: column;
  }
  &__title {
    color: #5B5B5B;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    gap: 10px;
  }



}
</style>
