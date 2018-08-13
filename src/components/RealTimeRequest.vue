<template>
  <el-table
    :data="tableData.data"
    :row-key="getRowKeys"
    :expand-row-keys="tableData.expands"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="request_http_version">
            <span>{{ props.row.request_http_version }}</span>
          </el-form-item>
          <el-form-item label="request_method">
            <span>{{ props.row.request_method }}</span>
          </el-form-item>
          <el-form-item label="request_scheme">
            <span>{{ props.row.request_scheme }}</span>
          </el-form-item>
          <el-form-item label="request_port">
            <span>{{ props.row.request_port }}</span>
          </el-form-item>
          <el-form-item label="request_headers">
            <span>{{ props.row.request_headers }}</span>
          </el-form-item>
          <el-form-item label="request_headers">
            <span>{{ props.row.request_headers }}</span>
          </el-form-item>
          <el-form-item label="request_content">
            <span>{{ props.row.request_content }}</span>
          </el-form-item>
          <el-form-item label="response_http_version">
            <span>{{ props.row.response_http_version }}</span>
          </el-form-item>
          <el-form-item label="response_reason">
            <span>{{ props.row.response_reason }}</span>
          </el-form-item>
          <el-form-item label="response_text">
            <span>{{ props.row.request_headers }}</span>
          </el-form-item>
          <el-form-item label="response_headers">
            <span>{{ props.row.response_headers }}</span>
          </el-form-item>
          <el-form-item label="response_text">
            <span>{{ props.row.response_text }}</span>
          </el-form-item>
          <el-form-item label="response_content">
            <span>{{ props.row.response_content }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <!--<el-table-column-->
    <!--label="host"-->
    <!--prop="request_host">-->
    <!--</el-table-column>-->
    <el-table-column
      label="url"
      prop="url">
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    word-wrap: break-word;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    word-break: break-all;
    width: 100%;
  }
</style>

<script>
import {AllRequest} from './../api/api'

export default {
  data() {
    return {
      tableData: {
        'data': [],
        'expands': []
      }

    };
  },
  methods: {
    firstGet() {
      this.$http.get(AllRequest)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log(data.data);
//          this.tableData3 = data.data
//          return this.tableData3;
//          this.$forceUpdate();
          this.$set(this.tableData, 'data', data.data)
//          this.tableData3.push(data.data[0])
        });
    },
    Get() {
      this.$http.get(AllRequest)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log(data.data);
//          this.tableData3 = data.data
//          return this.tableData3;
//          this.$forceUpdate();
          this.tableData.data.push(data.data[0])
//          this.$set(this.tableData, "data", data.data[0])
//          this.tableData3.push(data.data[0])
        });
    },
    getRowKeys(row) {
      return row.id;
    },
  },
  created() {
    this.firstGet()
  },
  mounted() {
    window.setInterval(() => {
//      this.Get()
      this.firstGet()
    }, 5000)
  }
};
</script>
