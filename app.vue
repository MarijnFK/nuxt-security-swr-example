<template>
  <div>{{ data }}</div>
  <div>{{ new Date().toISOString() }}</div>
</template>
<script setup lang="ts">
const { data } = await useFetch('/api/date')
</script>