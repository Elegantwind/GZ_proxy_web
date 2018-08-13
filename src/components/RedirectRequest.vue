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
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="parameter">
              <span>{{props.row.parameter}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="id"
        prop="id">
      </el-table-column>
      <el-table-column
        label="type"
        prop="type">
      </el-table-column>
      <el-table-column
        label="function"
        prop="function">
      </el-table-column>
      <el-table-column
        label="describe"
        prop="describe">
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData3[0]])">切换第1行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>


<script>
import {RequestRedirect} from './../api/api'
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.$http.get(RequestRedirect)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data.Request)
        this.tableData = data.Request
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
