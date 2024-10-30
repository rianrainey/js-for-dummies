// This uses the Vue Options API
<script>
export default {
  data() {
    return {
      sheepCount: 0,
    }
  },
  methods: {
    countASheep() {
      this.sheepCount++
    }
  }
}
</script>

<template>
  <h1>Sheep Counting App</h1>
  <h2>Current Count: {{ sheepCount }}</h2>
  <button @click="countASheep">Add a Sheep!</button>
</template>