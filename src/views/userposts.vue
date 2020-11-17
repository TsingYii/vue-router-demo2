<template>
  <div>
    用户文章{{ $route.query }}
    <div>params参数 {{ $route.params }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserPosts'
}
</script>

<style>

</style>
