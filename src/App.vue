<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    btnClick () {
      console.log('btnClick')
      this.$router.push('/user/23')
    }
  }
}
</script>

<style>

</style>
