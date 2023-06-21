<script setup lang="ts">

const data = [
  {
    "label": "first",
    "percentage": "10%"
  },
  {
    "label": "second",
    "percentage": "20%"
  }
]

function add() {
  console.log('da')
}
</script>

<template>
  <div class="poll">
    <div class="poll-title">Which one do you prefer?</div>
    <div class="poll-item" @click="add" v-for="(item) in data" :key="item.label">
      <div class="poll-item-fill"></div>
      <div class="poll-item-info">
        <div class="poll-item-label">{{ item.label }}</div>
        <div class="poll-item-percentage">{{ item.percentage }}</div>
      </div>
    </div>
  </div>
</template>

