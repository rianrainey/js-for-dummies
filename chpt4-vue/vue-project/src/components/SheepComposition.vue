// This uses the Vue Options API
<script setup>
  import { ref, onMounted } from 'vue'
  const sheepCount = ref(0)
  const countASheep = () => { sheepCount.value++ }
</script>

<template>
  <h1>Sheep Counting App - Composition</h1>
  <h2>Current Count: {{ sheepCount }}</h2>
  <button @click="countASheep">Add a Sheep!</button>
</template>