<template>
  <div>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
export default {
  name : 'Feature',
  data(){
    return {
      isLoading :true
    }
  }
}
</script>

<style scoped>

</style>