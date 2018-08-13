<!--<div>-->
<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="function"
        label="方法"
        width="10">
        <template slot-scope="scope">{{scope.row.function}}</template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="10">
      </el-table-column>
      <el-table-column
        prop="type"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>


<script>
import {ReponseRedirect} from './../api/api'

export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.$http.get(ReponseRedirect)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data.Response)
        this.tableData = data.Response
      })
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>
