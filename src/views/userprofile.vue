<template>
  <div class="appContainer">
    用户信息 {{ $route.params }}
  </div>
</template>

<script>
export default {
  name: 'UserProfile'
}
</script>

<style lang="scss" scoped>
.appContainer{
  height: 200px;
  background-color: pink;
}
</style>
