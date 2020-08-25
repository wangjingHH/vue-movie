<template>
  <div>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
export default {
  name : 'Brand',
  data() {
    return {
      isLoading :true
    }
  }
}
</script>

<style scoped>

</style>