<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item title="已经添加的正则表达式">
        <div>
          <el-row>
            <el-button type="primary" @click="addFormVisible = true">新增正则表达式</el-button>
            <el-dialog title="添加新的正则表达式" :visible.sync="addFormVisible">
              <el-form :model="addform">
                <el-form-item label="正则表达式" :label-width="formLabelWidth">
                  <el-input v-model="addform.match" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="描述" :label-width="formLabelWidth">
                  <el-input v-model="addform.describe" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="addFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addFilter()">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="success" @click="selectFormVisible = true">选择正则表达式</el-button>
            <el-dialog title="选择正则表达式" :visible.sync="selectFormVisible">
              <el-form :model="selectform">
                <el-form-item label="id" :label-width="formLabelWidth">
                  <el-input v-model="selectform.id" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="selectFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="selectFilter()">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="danger" @click="cancelFormVisible = true">取消正则表达式</el-button>
            <el-dialog title="取消正则表达式" :visible.sync="cancelFormVisible">
              <p>点击确认后会取消正则表达式</p>
              <div slot="footer" class="dialog-footer">
                <el-button @click="cancelFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="cancelFilter()">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="danger" @click="deleteFormVisible = true">删除正则表达式</el-button>
            <el-dialog title="删除正则表达式" :visible.sync="deleteFormVisible">
              <el-form :model="deleteform">
                <el-form-item label="id" :label-width="formLabelWidth">
                  <el-input v-model="deleteform.id" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="deleteFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteFilter()">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="danger" @click="clearFormVisible = true">清空正则表达式</el-button>
            <el-dialog title="清空正则表达式" :visible.sync="clearFormVisible">
              <p>确认后会清空所有的过滤正则表达式</p>
              <div slot="footer" class="dialog-footer">
                <el-button @click="clearFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="clearFilter()">确 定</el-button>
              </div>
            </el-dialog>
          </el-row>
        </div>
        <div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="id"
              width="width: 25%">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.id}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="正则表达式"
              width="width: 25%">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.match}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="描述"
              width="width: 25%">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.describe}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="以下是能够使用的正则表达式方法">
        <div>
          <el-table
            :data="tableDataRegular"
            style="width: 100%">
            <el-table-column
              prop="regular"
              label="正则表达式"
              width="width: 50%">
            </el-table-column>
            <el-table-column
              prop="meaning"
              label="筛选含义"
              width="width: 50%">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="正则表达式使用例子">
        <div>
          <el-table
            :data="tableDataRegularExamples"
            style="width: 100%">
            <el-table-column
              prop="examples"
              label="示例"
              width="width: 50%">
            </el-table-column>
            <el-table-column
              prop="way"
              label="写法"
              width="width: 50%">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import {ShowAllFilter, FilterAdd, FilterDelete, FilterClear, FilterSelect, FilterCancel} from './../api/api'
import {TableDataRegular, TableDataRegularExamples} from './../api/filter-config'

export default {
  data() {
    return {
      tableData: [],
      tableDataRegular: TableDataRegular,
      tableDataRegularExamples: TableDataRegularExamples,
//      添加部分
      addFormVisible: false,
      addform: {
        match: '',
        describe: '',
      },
//      选择部分
      selectFormVisible: false,
      selectform: {
        id: '',
      },
//      删除部分
      deleteFormVisible: false,
      deleteform: {
        id: '',
      },
      clearFormVisible: false,
      cancelFormVisible: false,
      formLabelWidth: '120px'
    };
  },
  created() {
    this.showAllFilter()
  },
  mounted() {
    window.setInterval(() => {
      this.showAllFilter()
    }, 2000)
  },
  complete() {
  },
  methods: {
    showAllFilter() {
      this.$http.get(ShowAllFilter)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(data => {
            console.log(data.data)
            this.tableData = data.data
          }
        )
    },
    addFilter() {
      this.$http.post(FilterAdd, this.addform)
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
            this.addFormVisible = false;
          }
        })
    },
    deleteFilter() {
      this.$http.post(FilterDelete, this.deleteform)
        .then(res => {
          console.log(FilterDelete)
          console.log(res)
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
            this.deleteFormVisible = false;
          }
        })
    },
    selectFilter() {
      this.$http.post(FilterSelect, this.selectform)
        .then(res => {
          console.log(FilterDelete)
          console.log(res)
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
            this.selectFormVisible = false;
          }
        })
    },
    clearFilter() {
      this.$http.get(FilterClear)
        .then(res => {
          console.log(FilterClear)
          console.log(res)
          return res.json()
        })
        .then(data => {
          if (data.code != 'ok') {
            this.$message({
              showClose: true,
              message: '接口错误清理失败'
            })
            ;
          }
          else {
            this.clearFormVisible = false;
          }
        })
    },
    cancelFilter() {
      this.$http.get(FilterCancel)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(data => {
          if (data.code != 'ok') {
            this.$message({
              showClose: true,
              message: '接口错误清理失败'
            })
            ;
          }
          else {
            this.cancelFormVisible = false;
          }
        })
    },
  }
}
</script>
