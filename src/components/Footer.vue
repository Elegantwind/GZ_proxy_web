<template>
  <el-row>
    <el-tag type="success" size="medium">
      <el-button type="text" size="mini" @click="usingFilterTableVisible = true">正在使用的正则表达式</el-button>
      <el-dialog title="正在使用的正则表达式" width="70%" :visible.sync="usingFilterTableVisible">
        <span class="Filter">{{usingFilter}}</span>
      </el-dialog>
    </el-tag>
    <el-tag type="success" size="medium">
      <el-button type="text" size="mini" @click="RequestRedirectTableVisible = true">Request Redirect</el-button>
      <el-dialog title="Request Redirect" width="70%" :visible.sync="RequestRedirectTableVisible">
        <el-table :data="RequestRedirectData">
          <el-table-column property="Function" label="Function" word-></el-table-column>
          <el-table-column class="Parameter" property="Parameter" label="Parameter"></el-table-column>
        </el-table>
      </el-dialog>
    </el-tag>
    <el-tag type="success" size="medium">
      <el-button type="text" size="mini" @click="ResponseRedirectTableVisible = true">Response Redirect</el-button>
      <el-dialog title="Response Redirect" width="70%" :visible.sync="ResponseRedirectTableVisible">
        <el-table :data="ResponseRedirectData">
          <el-table-column property="Function" label="Function" word-></el-table-column>
          <el-table-column class="Parameter" property="Parameter" label="Parameter"></el-table-column>
        </el-table>
      </el-dialog>
    </el-tag>
  </el-row>
</template>

<style>
  .el-table .cell {
    white-space: pre-line;
  }

  .Filter {
    white-space: pre-wrap
  }
</style>
<script>
import {FilterUsing, UsingRequestRedirect, UsingResponseRedirect} from './../api/api'

export default {
  data() {
    return {
      usingFilterTableVisible: false,
      usingFilter: {},
      RequestRedirect: {},
      RequestRedirectTableVisible: false,
      RequestRedirectData: [],
      ResponseRedirectTableVisible: false,
      ResponseRedirectData: []
    };
  },
  created() {
    this.getUsingFilter()
    this.getUsingRequestRedirect()
    this.getUsingResponseRedirect()
  },
  mounted() {
    window.setInterval(() => {
      this.getUsingFilter()
      this.getUsingRequestRedirect()
      this.getUsingResponseRedirect()
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
            if (data.data === null) {
              this.usingFilter = {'match': '无'}
            }
            else {
              this.usingFilter = data.data
            }

          }
        )
    },
    getUsingRequestRedirect() {
      this.$http.get(UsingRequestRedirect)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(data => {
            console.log(data.data)
            this.RequestRedirectData = data.data;

          }
        )
    },
    getUsingResponseRedirect() {
      this.$http.get(UsingResponseRedirect)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(data => {
            console.log(data.data)
            this.ResponseRedirectData = data.data;

          }
        )
    }
  }
}
</script>
