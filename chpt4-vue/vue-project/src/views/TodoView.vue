<script setup>
  import ErrorButton from '@/components/ErrorButton.vue';
  import { reactive, onMounted, onErrorCaptured, ref } from 'vue'

  const state = reactive({
    todos: [],
  })

  // Uses Vue3's Composition API to create a reactive reference
  // You can access this anywhere in the component with `error`
  // You can set it's value with `error.value = "new error"`and read it with `error.value`
  // You can use it in templates by wrapping it in `{{ }}` like `{{ error }}`or `v-if="error"`
  const error = ref('')

  onErrorCaptured((e) => {
    console.log('onErrorCaptured successfully')
    console.log('before error.value: ', error.value)
    error.value = e.message
    console.log('after error.value: ', error.value)
  })

  function resetError() {
    error.value = ''
  }

  onMounted(() => {
    // fetch is included by default. Don't need axios dependency.
    fetch('https://jsonplaceholder.typicode.com/todos') // returns a promise
      .then(response => {
        const json = response.json()
        console.log('Response: ', json)
        return json // promise returns Response object. We just want the json
      })
      .then(data => {
        console.log('data: ', data);
        return state.todos = data // takes json and assigns it to the todos array in our state object
      })
      .catch (error => {
        console.error('Error fetching todos:', error);
      })
  })
</script>

<template>
  <div>
    <div v-if="error">
      There's been an error: {{ error }} <button @click="resetError">Reset Error</button>
    </div>
    <ErrorButton />
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in state.todos">
        <input type="checkbox" v-model="todo.completed" />
        &nbsp;<span v-text="todo.id"></span>
        &nbsp;<span v-text="todo.title"></span>
      </li>
    </ul>
  </div>
</template>

<style>
</style>