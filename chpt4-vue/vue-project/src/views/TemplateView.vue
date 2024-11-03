<script setup>
import { reactive, ref } from 'vue';
// const props = defineProps(['firstName', 'lastName']) // don't have to assign this to a local object if I don't want to
defineProps(['firstName', 'lastName'])

const state2 = reactive({
  cupsOfCoffee: 0,
})

const refCoffee = ref(0)

function drinkCoffee() {
  state2.cupsOfCoffee++
}

function drinkRefCoffee() {
  refCoffee.value++
}

const state = reactive({
  sectionTitle: 'Using JS in Templates',
  authorName: 'Jane Doe',
})
</script>
<template>
  <div>
    <h1>{{ state.sectionTitle }}</h1>
    <h3>By {{ state.authorName }}</h3>
    <h1>{{ firstName }} {{ lastName }}</h1>
    <h3>Coffee consumed: {{ state2.cupsOfCoffee }}</h3>
    <h3>Coffee consumed: {{ refCoffee }}</h3>
    <button @click="drinkCoffee">Drink Coffee</button>
    <button v-on:click="drinkRefCoffee">Drink Coffee</button>
  </div>
</template>