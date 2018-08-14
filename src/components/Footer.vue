<template>
  <el-row>
    <el-tag type="success" size="medium">正在使用的过滤正则表达式: {{ usingFilter.match }}</el-tag>
  </el-row>
</template>

<style>
  .el-footer {
  }
</style>
<script>
import {FilterUsing} from './../api/api'

export default {
  data() {
    return {
      usingFilter: {}
    };
  },
  created() {
    this.getUsingFilter()
  },
  mounted() {
    window.setInterval(() => {
      this.getUsingFilter()
    }, 1000)
  },
  complete() {
  },
  methods: {
    getUsingFilter() {
      this.$http.get(FilterUsing)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(data => {
            console.log(data.data)
            this.usingFilter = data.data
          }
        )
    },
  }
}
</script>
