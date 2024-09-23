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
      <div class="menu-page__topbar_middle">
        <div
          v-for="(item, index) in postitItem"
          :key="index"
          class="menu-page__postitItem"
        >
          <img :src="item.icon" alt="icon" class="menu-item__icon" />
          <span class="menu-item__title">{{ item.name }}</span>
        </div>
      </div>
      <div class="menu-page__topbar_right">
        <img src="@/assets/biom_logo.png" class="menu-page__logo" />
        <div class="menu-page__logo_text">사용설명서 보기</div>
        <div class="menu-page__logo_text">동영상 사용설명서(튜토리얼) 보기</div>
      </div>
    </div>
    <div class="menu-page__body">
      <div class="menu-page__menu_container">
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div class="menu-page__gridwrapper">
            <div v-for="(item, index) in container1_menu1" :key="index">
              <NavButton :title="item.title" />
            </div>
          </div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />SMS/ Open Api 관련 설정
          </div>
          <div class="menu-page__gridwrapper">
            <div v-for="(item, index) in container1_menu2" :key="index">
              <NavButton :title="item.title" />
            </div>
          </div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div class="menu-page__gridwrapper">
            <div v-for="(item, index) in container1_menu3" :key="index">
              <NavButton :title="item.title" />
            </div>
          </div>
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
          <div class="menu-page__gridwrapper">
            <div v-for="(item, index) in container2_menu3" :key="index">
              <NavButton :title="item.title" :color="item.color" :link="item.link"/>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-page__menu_container">
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div class="menu-page__gridwrapper">
            <div v-for="(item, index) in container3_menu1" :key="index">
              <NavButton :title="item.title" :link="item.link"/>
            </div>
          </div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />SMS/ Open Api 관련 설정
          </div>
          <div class="menu-page__gridwrapper">
            <div v-for="(item, index) in container3_menu2" :key="index">
              <NavButton :title="item.title" :link="item.link"/>
            </div>
          </div>
        </div>
        <div class="menu-page__menu_subcontainer">
          <div class="menu-page__title">
            <img src="@/assets/icon/ic_arrow_down.svg" />웹 실행에 필요한 필수
            정보
          </div>
          <div class="menu-page__gridwrapper">
            <div v-for="(item, index) in container3_menu3" :key="index">
              <NavButton :title="item.title" :link="item.link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavButton from '@/components/NavButton.vue';
import { ref } from 'vue';

const searchQuery = ref(""); //검색어
const postitItem = [
    {
        name: "post1",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post2",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post3",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post4",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post5",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post6",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post7",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post8",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post9",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post10",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post11",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post12",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post13",
        icon: require('@/assets/post_it.png')
    },
    {
        name: "post14",
        icon: require('@/assets/post_it.png')
    },

]
const performSearch= ()=> { //검색 함수
    console.log(searchQuery.value);
}
//메뉴 container 제목
const container1_menu1 = [
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },

]
const container1_menu2 = [
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },

]
const container1_menu3 = [
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },
    {
        title:"병원 기본 정보",
        color: "FFF",
        link:"",
    },

]


//수현
const container2_menu3 = [
    {
        title:"개인별<br>휴무일",
        color: "#FFC47F",
        link:"",
    },
    {
        title:"공휴일<br>휴무일 설정",
        color: "FFF",
        link:"",
    },
    {
        title:"해피콜<br>개별리콜 설정",
        color: "FFF",
        link:"",
    },
    {
        title:"대기화면<br>설정",
        color: "FFF",
        link:"",
    },

    {
        title:"거래처<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"수입지출<br>항목설정",
        color: "FFF",
        link:"",
    },
    {
        title:"빠른 수입지출<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"자주쓰는<br>주소편집",
        color: "FFF",
        link:"",
    },

    {
        title:"단축키<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"종이차트<br>출력설정",
        color: "FFF",
        link:"",
    },
    {
        title:"할인구분<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"페어목록<br>설정",
        color: "FFF",
        link:"",
    },

    {
        title:"카드 수수료<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"SMTP<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"화면보호 설정",
        color: "FFF",
        link:"",
    },
    {
        title:"수납설정",
        color: "FFF",
        link:"",
    },

    {
        title:"기타설정",
        color: "FFF",
        link:"",
    },
]
const container3_menu1 = [
    {
        title:"병원<br>기본정보",
        color: "FFF",
        link:"",
    },
    {
        title:"환자<br>인적사항",
        color: "FFF",
        link:"",
    },
    {
        title:"예약화면",
        color: "FFF",
        link:"",
    },
    {
        title:"직원정보",
        color: "FFF",
        link:"",
    },

    {
        title:"로그인<br>비밀번호 변경",
        color: "FFF",
        link:"",
    },

]
const container3_menu2 = [
    {
        title:"SMS<br>전송설정",
        color: "FFF",
        link:"",
    },
    {
        title:"진료 후 주의사항<br>문자전송",
        color: "FFF",
        link:"",
    },
    {
        title:"자주쓰는<br>SMS 문구",
        color: "FFF",
        link:"",
    },
    {
        title:"치과약도<br>MMS 설정",
        color: "FFF",
        link:"",
    },

    {
        title:"Open API<br>전화수신 시<br>문자설정",
        color: "FFF",
        link:"",
    },
    {
        title:"Open API<br>(CID) 설정",
        color: "FFF",
        link:"",
    },
    {
        title:"네이버<br>예약",
        color: "FFF",
        link:"",
    },
    {
        title:"알림톡 관리",
        color: "FFF",
        link:"",
    },
]
const container3_menu3 = [
    {
        title:"개인별<br>휴무일",
        color: "FFF",
        link:"/",
    },
    {
        title:"공휴일<br>휴무일 설정",
        color: "FFF",
        link:"",
    },
    {
        title:"해피콜<br>개별리콜 설정",
        color: "FFF",
        link:"",
    },
    {
        title:"대기화면<br>설정",
        color: "FFF",
        link:"",
    },

    {
        title:"거래처<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"수입지출<br>항목설정",
        color: "FFF",
        link:"",
    },
    {
        title:"빠른 수입지출<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"자주쓰는<br>주소편집",
        color: "FFF",
        link:"",
    },

    {
        title:"단축키<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"종이차트<br>출력설정",
        color: "FFF",
        link:"",
    },
    {
        title:"할인구분<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"페어목록<br>설정",
        color: "FFF",
        link:"",
    },

    {
        title:"카드 수수료<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"SMTP<br>설정",
        color: "FFF",
        link:"",
    },
    {
        title:"화면보호 설정",
        color: "FFF",
        link:"",
    },
    {
        title:"수납설정",
        color: "FFF",
        link:"",
    },

    {
        title:"기타설정",
        color: "FFF",
        link:"",
    },
]
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
    height: 75vh;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .menu-item {
        cursor: pointer;
        &__icon {
        //img
            cursor: pointer;
        }
        &__title {
            cursor: pointer;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #9B9B9B;
            text-align: center;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
  }
}

  &__topbar_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
  }
  &__logo {
    width: 103px;
    height: 34px;
    flex-shrink: 0;
  }
  &__logo_text {
    color: #9B9B9B;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
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
  &__gridwrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
}
</style>
