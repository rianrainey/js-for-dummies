<script setup>
  import { reactive, onMounted } from 'vue'; // For state mgmt
  const state = reactive({
    todos: [],
  })

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

      // try {
      //   let response = await fetch('https://jsonplaceholder.typicode.com/todos');
      //   const todos = await response.json();
      //   state.todos = todos;
      // } catch (error) {
      //   console.log("Error fetching data: ", error);
      // }
      // try {
      //   let response = await fetch('http://localhost:3000/todos', {
      //     mode: 'cors'
      //   })
      //   const todos = await response.json()
      //   state.todos = todos
      // } catch (error) {
      //   console.log(error);
      // })
  })
</script>

<template>
  <div>
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