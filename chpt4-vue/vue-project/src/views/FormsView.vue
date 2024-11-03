<script setup>
  function submitData(event) {
    event.preventDefault()
    console.log(event.target.firstName.value);
  }
</script>
<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <form @submit="submitData">
      <input id="firstName" placeholder="First Name" type="text" />
      <input id="lastName" placeholder="Last Name" type="text" />
      <input type="submit" value="Submit" />
    </form>

  </div>
</template>