<script setup>
  import { ref, computed, watch } from 'vue'
  const repos = ref([])
  const loading = ref(false)
  const error = ref(null)

  const searchTerm = ref('')
  const searchResults = ref([])
  watch(searchTerm, async (newTerm) => {
    if (newTerm.length > 2) {
      loading.value = true
      try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${newTerm}`)
        const data = await response.json()
        console.log('data: ', data)
        if (data.message) {
          error.value = data.message
        } else {
          searchResults.value = data.items
        }
        loading.value = false
      } catch (err) {
        error.value = err.message
      }
    }
  })
  function fetchRepos() {
    loading.value = true
    error.value = null
    fetch('https://api.github.com/users/vuejs/repos?per_page=100')
      .then(response => response.json())
      .then((data) => {
        repos.value = data
        console.log('repos.value: ', repos.value);

        loading.value = false
      })
      .catch((e) => {
        console.log(`Caught error: $(e)`)
        error.value = e
        loading.value = false
      })
  }

  const repoStats = computed(() => {
    return {
      repoCount: repos.value.length,
      stargazers: repos.value.reduce((total, repo) => {
        return total + repo.stargazers_count
      }, 0)
    }
  })
</script>
<template>
  <div>
    <h1>Repo Information</h1>
    <input type="text" v-model="searchTerm" placeholder="Search for repos..." />
    <ul>
      <li v-for="repo in searchResults" :key="repo.id">
        <a :href="repo.html_url">{{ repo.name }}</a>
      </li>
    </ul>
    <button @click="fetchRepos">
      {{ loading ? 'Loading...' : 'Fetch Repos' }}
    </button>
    <p v-if="error">Error: {{ error }}</p>
    <p> Showing {{ repoStats.repoCount }} repos with a total of {{ repoStats.stargazers }} stargazers.</p>
    <ul>
      <li v-for="repo in repos" :key="repo.name">
        <a :href="repo.html_url">{{ repo.name }}</a>
        <p>{{ repo.description }}</p>
      </li>
    </ul>
    <pre>
      {{ repos[0] }}
    </pre>
  </div>
</template>