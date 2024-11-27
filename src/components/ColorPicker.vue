<template>
  <div class="color-layout">
    <div class="color-picker">
      <div class="color-picker__section">
        <label>글자색</label>
        <div class="color-options">
          <div
            class="color-box"
            v-for="color in textColors"
            :key="color"
            :style="{ backgroundColor: color }"
          ></div>
        </div>
      </div>
      <div class="color-picker__section">
        <label>배경색</label>
        <div class="color-options">
          <div
            class="color-box"
            v-for="color in bgColors"
            :key="color"
            :style="{ backgroundColor: color }"
          ></div>
        </div>
      </div>
    </div>
    <div class="text-input">
      <input type="text" placeholder="클릭하면 내용 입력(우클릭=추가)" />
      <div class="checkbox-group">
        <label><input type="checkbox" /> 배경색</label>
        <label><input type="checkbox" /> 글자색 반영</label>
      </div>
      <select>
        <option>김원장</option>
        <option>박원장</option>
      </select>
      <button>버튼편집</button>
    </div>
    <div class="buttons-grid">
      <button
        class="grid-button"
        v-for="button in buttons"
        :key="button.text"
        :style="{ backgroundColor: button.bgColor, color: button.textColor }"
      >
        {{ button.text }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const textColors = ['#000000', '#FFFFFF', '#FFAAAA', '#FFD700', '#90EE90', '#ADD8E6', '#FFC0CB', '#D3D3D3'];
const bgColors = ['#FFFFFF', '#000000', '#FFAAAA', '#FFD700', '#90EE90', '#ADD8E6', '#FFC0CB', '#D3D3D3'];
const buttons = [
  { text: '구강 검진', bgColor: '#E6F7FF', textColor: '#000000' },
  { text: '보철 상담', bgColor: '#FFF4E6', textColor: '#000000' },
  { text: '임플란트 상담', bgColor: '#FBEAEA', textColor: '#FF0000' },
  { text: '교정상담', bgColor: '#F6FFED', textColor: '#000000' },
  { text: '충전 or 발수', bgColor: '#E6F4FF', textColor: '#000000' },
  { text: '인상 or 발수', bgColor: '#FFF7E6', textColor: '#000000' },
  { text: '근관확대', bgColor: '#E6FFE6', textColor: '#000000' },
  { text: '근관세척', bgColor: '#E6F7FF', textColor: '#000000' },
  { text: '근관충전', bgColor: '#FFF0F0', textColor: '#FF0000' },
  { text: '충치 치료', bgColor: '#FFFAF0', textColor: '#000000' },
  { text: '레진 충전', bgColor: '#FAF0E6', textColor: '#000000' },
  { text: '발치', bgColor: '#FFE6E6', textColor: '#FF0000' },
  { text: '매복 발치', bgColor: '#FFD9E6', textColor: '#FF0000' },
  { text: 'S/O', bgColor: '#E6F0FF', textColor: '#000000' },
  { text: 'Dressing', bgColor: '#F5F5F5', textColor: '#000000' },
  { text: '충전을 연마', bgColor: '#E6FFFA', textColor: '#000000' },
  { text: '인레이 프랩', bgColor: '#FFF7F0', textColor: '#000000' },
  { text: 'Post, 프랩, 인상', bgColor: '#E6E6FF', textColor: '#000000' },
  { text: '크라운 프랩', bgColor: '#FFFAF0', textColor: '#000000' },
  { text: '인레이 셋팅', bgColor: '#F0FFF0', textColor: '#000000' },
  { text: '크라운 셋팅', bgColor: '#FFF0F0', textColor: '#000000' },
  { text: 'Scaling', bgColor: '#E0FFE0', textColor: '#000000' },
  { text: 'RP', bgColor: '#E6F7FF', textColor: '#000000' },
  { text: '큐렛', bgColor: '#FFF7F0', textColor: '#000000' },
  { text: '새 예약', bgColor: '#FFF0F0', textColor: '#000000' },
];
</script>

<style lang="scss">
.color-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

  .color-picker {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__section {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      label {
        min-width: 80px;
      }

      .color-options {
        display: flex;
        gap: 0.5rem;

        .color-box {
          width: 24px;
          height: 24px;
          border: 1px solid #ccc;
          cursor: pointer;
        }
      }
    }
  }

  .text-input {
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    .checkbox-group {
      display: flex;
      gap: 1rem;

      label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    select {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #e0e0e0;
      }
    }
  }

  .buttons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem;

    .grid-button {
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      text-align: center;

      &:hover {
        opacity: 0.9;
      }
    }
  }
}
</style>
