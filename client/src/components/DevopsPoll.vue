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
</script>

<template>
  <div class="poll">
    <div class="poll-title">Which one do you prefer?</div>
    <div class="poll-item" @click="add" v-for="{ label, percentage } in data">
      <div class="poll-item-fill"></div>
      <div class="poll-item-info">
        <div class="poll-item-label">{{ label }}</div>
        <div class="poll-item-percentage">{{ percentage }}</div>
      </div>
    </div>
  </div>
</template>

