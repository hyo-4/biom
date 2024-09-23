<template>
  <div class="client-page">
    <div class="client-page__table-container">
      <table>
        <thead>
          <tr>
            <th v-for="n in 13" :key="n">Header {{ n }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in 5" :key="row">
            <td v-for="col in 13" :key="col">Row {{ row }}, Col {{ col }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.client-page{
    &__table-container {
  width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #333;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f5f5f5;
      border-bottom: 2px solid #333;
    }

    td {
      background-color: #ffffff;
    }
  }
}
}
</style>
