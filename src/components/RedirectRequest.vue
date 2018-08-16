<!--<div>-->
<template>
  <div>
    <el-button type="primary" @click="redirectUrl = true">新增url替换</el-button>
    <el-dialog title="新增url替换" :visible.sync="redirectUrl">
      <el-form :model="redirectUrlForm">
        <el-form-item label="要替换的url" :label-width="formLabelWidth">
          <el-input v-model="redirectUrlForm.Url" auto-complete="off" type="text"></el-input>
        </el-form-item>
        <el-form-item label="新的url" :label-width="formLabelWidth">
          <el-input v-model="redirectUrlForm.newUrl" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="redirectUrl = false">取 消</el-button>
        <el-button type="primary" @click="addRequestRedirectUrl()">确 定
        </el-button>
      </div>
    </el-dialog>
    <el-button type="primary" @click="redirectHost= true">新增host替换</el-button>
    <el-dialog title="新增host替换" :visible.sync="redirectHost">
      <el-form :model="redirectHostForm">
        <el-form-item label="要替换的host" :label-width="formLabelWidth">
          <el-input v-model="redirectHostForm.Host" auto-complete="off" type="text"></el-input>
        </el-form-item>
        <el-form-item label="新的host" :label-width="formLabelWidth">
          <el-input v-model="redirectHostForm.newHost" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="redirectHost = false">取 消</el-button>
        <el-button type="primary" @click="addRequestRedirectHost()">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="primary" @click="redirectPath= true">新增path替换</el-button>
    <el-dialog title="新增path替换" :visible.sync="redirectPath">
      <el-form :model="redirectPathForm">
        <el-form-item label="要替换的host" :label-width="formLabelWidth">
          <el-input v-model="redirectPathForm.Host" auto-complete="off" type="text"></el-input>
        </el-form-item>
        <el-form-item label="新的host" :label-width="formLabelWidth">
          <el-input v-model="redirectPathForm.newHost" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="redirectPath = false">取 消</el-button>
        <el-button type="primary" @click="">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="success" @click="addRedirect= true">添加一种替换策略</el-button>
    <el-dialog title="添加一种替换策略" :visible.sync="addRedirect">
      <el-form :model="addRedirectForm">
        <el-form-item label="要添加的策略id" :label-width="formLabelWidth">
          <el-input v-model="addRedirectForm.id" auto-complete="off" type="text"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addRedirect = false">取 消</el-button>
        <el-button type="primary" @click="selecetRequestRedirect()">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="danger" @click="deleteRedirect= true">删除一个策略</el-button>
    <el-dialog title="删除一个策略" :visible.sync="deleteRedirect">
      <el-form :model="deleteRedirectForm">
        <el-form-item label="要删除的策略id" :label-width="formLabelWidth">
          <el-input v-model="deleteRedirectForm.id" auto-complete="off" type="text"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="deleteRedirect = false">取 消</el-button>
        <el-button type="primary" @click="deleteIdRequestRedirect()">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="danger" @click="clearRedirect= true">清空所有替换策略</el-button>
    <el-dialog title="清空所有替换" :visible.sync="clearRedirect">
      <p>点击确定清空说有的替换策略</p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="clearRedirect = false">取 消</el-button>
        <el-button type="primary" @click="clearRequestRedirect()">确 定</el-button>
      </div>
    </el-dialog>
    <el-table
      ref="multipleTable"
      :data="tableData.data"
      :row-key="getRowKeys"
      :expand-row-keys="tableData.expands"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="parameter">
              <span>{{ props.row.parameter }}</span>
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
  </div>
</template>
<style>
  .demo-table-expand {
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
import {
  RequestRedirect,
  AddRequestRedirectUrl,
  AddRequestRedirectHost,
  ClearRequestRedirect,
  DeleteRequestRedirect,
  SelectRequestRedirect,
} from './../api/api'

export default {
  data() {
    return {
      formLabelWidth: '120px',
      tableData: {
        'data': [],
        'expands': []
      },
      addRedirect: false,
      addRedirectForm: {
        id: "",
      },
      deleteRedirect: false,
      deleteRedirectForm: {
        id: "",
      },
      redirectUrl: false,
      redirectUrlForm: {
        function_name: "RedirectUrl",
        Url: "",
        newUrl: ""
      },
      redirectHost: false,
      redirectHostForm: {
        function_name: "RedirectHost",
        Host: "",
        newHost: ""
      },
      redirectPath: false,
      redirectPathForm: {
        function_name: "RedirectPath",
        Host: "",
        newHost: ""
      },
      clearRedirect: false
    };


  },
  created() {

  },
  mounted() {
    window.setInterval(() => {
//      this.Get()
      this.getRequestRedirect()
    }, 1000)
  },
  methods: {
    getRowKeys(row) {
      return row.id;
    },
    getRequestRedirect() {
      this.$http.get(RequestRedirect)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log(data.Request)
          this.tableData.data = data.Request
        })
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    addRequestRedirectUrl() {
      this.$http.post(AddRequestRedirectUrl, this.redirectUrlForm)
        .then(res => {
          return res.json()
        })
        .then(data => {
          if (data.code == 'error') {
            this.$message({
              showClose: true,
              message: '接口有错误，上传失败！'
            })
            ;
          }
          else {
            this.redirectUrl = false;
          }
        })
    },
    addRequestRedirectHost() {
      this.$http.post(AddRequestRedirectHost, this.redirectHostForm)
        .then(res => {
          return res.json()
        })
        .then(data => {
          if (data.code == 'error') {
            this.$message({
              showClose: true,
              message: '接口有错误，添加失败！'
            })
            ;
          }
          else {
            this.redirectHost = false;
          }
        })
    },
    clearRequestRedirect() {
      this.$http.get(ClearRequestRedirect)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log(data.code);
          if (data.code == 'error') {
            this.$message({
              showClose: true,
              message: '接口有错误，清理失败！'
            })
          } else {
            this.clearRedirect = false
          }
        });
    },
    deleteIdRequestRedirect() {
      this.$http.post(DeleteRequestRedirect, this.deleteRedirectForm)
        .then(res => {
          return res.json()
        })
        .then(data => {
          if (data.code == 'error') {
            this.$message({
              showClose: true,
              message: '接口有错误，添加失败！'
            })
            ;
          }
          else {
            this.deleteRedirect = false;
          }
        })
    },
    selecetRequestRedirect() {
      this.$http.post(SelectRequestRedirect, this.addRedirectForm)
        .then(res => {
          return res.json()
        })
        .then(data => {
          if (data.code == 'error') {
            this.$message({
              showClose: true,
              message: '接口有错误，添加失败！'
            })
            ;
          }
          else {
            this.addRedirect = false;
          }
        })
    }
  }
}
</script>
