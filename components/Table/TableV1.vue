<template>
  <div class="table-wrapper">
    <table class="table table-auto">
      <thead>
        <tr>
          <th v-for="(head, i) in props.tableData.tHead" :key="i">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in props.tableData.tBody" :key="i">
          <td v-for="(val, key) in row" :key="key + i">
            {{ val }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  tableData: {
    type: Object,
    default: () => {},
  },
})
</script>
