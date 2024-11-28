<template>
  <div class="monitor-page">
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
    <div class="monitor-page__body">
      <div class="monitor-page__sidebar">
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
          <div class="monitor-page__tab-view">
            <div v-if="activeTab === 0">
              <div class="monitor-page__input-wrapper">
                <input v-model="newName" type="text" placeholder="북마크" />
                <button>환자 북마크 추가</button>
              </div>
              <div
                v-for="laminate in laminates"
                :key="laminate.id"
                class="monitor-page__laminate"
              >
                라미네이트
                <div class="monitor-page__laminate-container">
                  <img
                    v-for="(image, imgIndex) in laminate.images"
                    :key="imgIndex"
                    :src="image"
                    alt="이미지"
                  />
                </div>
              </div>
            </div>
            <div v-if="activeTab === 1">두 번째 탭 내용</div>
          </div>
        </div>
      </div>
      <div class="monitor-page__main">
        <div class="monitor-page__main-top">
          <div class="monitor-page__btn-wrapper">
            <button>사진 추가</button>
            <button>eyeFi 대기</button>
          </div>
          <div class="monitor-page__pic-wrapper">
            <img
              v-for="(image, imgIndex) in pictures"
              :key="imgIndex"
              :src="image"
              alt="이미지"
            />
          </div>
        </div>
        <div class="monitor-page__display-container">
          <div class="monitor-page__display-title">
            김덴트(1)
            <br />
            <span>2015-09-09 (8m) 670*800 px</span>
          </div>
          <img src="@/assets/post_it.png" class="monitor-page__display-image" />
          <div class="monitor-page__tool-wrapper">
            <button>색상</button>
            <button>선택</button>
            <button>펜</button>
            <button>원</button>
            <button>길이</button>
            <button>@@</button>
            <button>@@</button>
            <button>가는선</button>
            <button>굵은선</button>
            <button>확대</button>
            <button>축소</button>
            <button>{{ `<-` }}</button>
            <button>{{ `->` }}</button>
            <button>{{ `<->` }}</button>
            <button>{{ `:` }}</button>
            <button>이동</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref(''); //검색어
const activeTab = ref(0);
const newName = ref(''); // 입력된 이름
const tabs = [{ name: '치료비용계획' }, { name: '상담 보드' }];
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
const laminates = [
  {
    id: 1,
    images: [require('@/assets/post_it.png'), require('@/assets/post_it.png')]
  },
  {
    id: 2,
    images: [require('@/assets/post_it.png'), require('@/assets/post_it.png')]
  },
  {
    id: 3,
    images: [require('@/assets/post_it.png'), require('@/assets/post_it.png')]
  },
  {
    id: 4,
    images: [require('@/assets/post_it.png'), require('@/assets/post_it.png')]
  }
];
const pictures = [
  require('@/assets/post_it.png'),
  require('@/assets/post_it.png'),
  require('@/assets/post_it.png'),
  require('@/assets/post_it.png'),
  require('@/assets/post_it.png'),
  require('@/assets/post_it.png'),
  require('@/assets/post_it.png'),
  require('@/assets/post_it.png')
];
</script>
<style lang="scss">
.monitor-page {
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
  padding-bottom: 2rem;
  &__body {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    gap: 10px;
  }
  &__sidebar {
    flex: 1;
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
    gap: 10px;
  }
  &__input-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    gap: 5px;

    input {
      width: 80%;
    }
  }
  &__laminate {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 10px;
    width: 100%;
    background-color: white;
    border: 1px solid #b5b5b5;
    margin-top: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
  &__laminate-container {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    gap: 10px;
    width: 100%;

    img {
      flex: 1;
    }
  }
  &__main {
    flex: 4;
    background-color: #5b5b5b;
  }
  &__main-top {
    width: 100%;
    height: 100px;
    display: flex;
    background-color: white;
    border: 1px solid #5b5b5b;
    padding: 5px;
    box-sizing: border-box;
    gap: 10px;
  }
  &__pic-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 100%;
  }
  &__btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;

    button {
      height: 50%;
      border: 1px solid #b5b5b5;
    }
  }
  &__display-container {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 80%;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
  }
  &__display-title {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: white;
    font-weight: 700;

    span {
      font-weight: 400;
    }
  }
  &__display-image {
    width: 25%;
    max-width: 400px;
    max-height: 300px;
    height: auto;
  }
  &__tool-wrapper {
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;

    button {
      background-color: #828282;
      color: white;
      border: none;
    }
  }
}
</style>
