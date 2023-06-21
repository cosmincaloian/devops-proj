<script setup lang="ts">
import DevopsPollItem from './DevopsPollItem.vue'
import * as process from "process";

function _refresh() {
// const response = await fetch(process.env.SERVER_URL + '/poll');
// const data = await response.json();

}

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
    <DevopsPollItem v-for="{ label, percentage } in data">
      <template #info>
        <div class="poll-item-label">{{ label }}</div>
        <div class="poll-item-percentage">{{ percentage }}</div>
      </template>
    </DevopsPollItem>
  </div>
</template>

