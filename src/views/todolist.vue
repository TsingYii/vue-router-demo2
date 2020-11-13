<template>
  <div>
    任务列表
    <el-button type="primary" @click="gotodetail">
      详情
    </el-button>
    <!-- <div class="todobox">
      <template v-for="todo in todos">
        <el-checkbox :key="todo.id" v-model="checked">
          {{ todo.title }}
        </el-checkbox>
      </template>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Todolist',
  data () {
    return {
      todos: []
    }
  },
  methods: {
    gotodetail () {
      this.$router.push('/tododetail')
    }
  }
}
</script>

<style>

</style>
