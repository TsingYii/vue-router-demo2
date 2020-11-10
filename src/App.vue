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
html,body,#app{
  height: 100%;
  background: pink;
}
*{
  padding: 0;
  margin: 0;
}
</style>
