<template>
  <div>
    <el-button type="success" @click="startProxy()">启动或重启Proxy</el-button>
    <el-button type="danger" @click="clearRequestPage = true">清空Request</el-button>
    <el-dialog title="清空Request" :visible.sync="clearRequestPage">
      <p>点击确认清空当前Request内容</p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="clearRequestPage = false">取 消</el-button>
        <el-button type="primary" @click="clearRequest()">确 定</el-button>
      </div>
    </el-dialog>
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
  </div>
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
import {AllRequest, ClearRequest, StartProxy} from './../api/api'

export default {
  data() {
    return {
      tableData: {
        'data': [],
        'expands': []
      },
      clearRequestPage: false,

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
          this.$set(this.tableData, 'data', data.data)
        });
    },
    clearRequest() {
      this.$http.get(ClearRequest)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log(data.code);
          if (data.code == 'error') {
            this.$message({
              showClose: true,
              message: '接口有错误，上传失败！'
            })
          } else {
            this.clearRequestPage = false
          }
        });
    },
    startProxy() {
      this.$http.get(StartProxy)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log(data.code);
          if (data.code == 'error') {
            this.$message({
              showClose: true,
              message: '接口有错误，启动失败！'
            })
          } else {
            this.$message({
              showClose: true,
              message: 'Proxy启动成功！'
            })
          }
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
