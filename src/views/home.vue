<template>
  <div>
    <el-button type="primary"
               @click="logout">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
