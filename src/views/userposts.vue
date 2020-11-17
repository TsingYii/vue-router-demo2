<template>
  <div class="appContainer">
    用户文章{{ $route.params }}
  </div>
</template>

<script>
export default {
  name: 'UserPosts'
}
</script>

<style lang="scss" scoped>
.appContainer{
  height: 200px;
  background-color: orange;
}
</style>
