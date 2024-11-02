<script setup>
function makeError() {
    throw new Error('Something went wrong!')
  }
</script>

<template>
  <button @click="makeError">Make an error</button>
</template>