<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item title="已经添加的正则表达式">
        <div>
          <el-row>
            <el-button type="primary" @click="addFormVisible = true">新增正则表达式</el-button>
            <!--<el-button type="text" @click="addFormVisible = true">打开嵌套表单的 Dialog</el-button>-->
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
                <el-button type="primary" @click="addFormVisible = false">确 定</el-button>
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
                <el-button type="primary" @click="selectFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="danger" @click="selectFormVisible = true">删除正则表达式</el-button>
            <el-dialog title="删除正则表达式" :visible.sync="deleteFormVisible">
              <el-form :model="deleteform">
                <el-form-item label="id" :label-width="formLabelWidth">
                  <el-input v-model="deleteform.id" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="deleteFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteFormVisible = false">确 定</el-button>
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
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除
                </el-button>
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
export default {
  data() {
    return {
      tableDataRegular: [{
        regular: '~a',
        meaning: '匹配资产以响应：CSS，Javascript，Flash，图像。',
      }, {
        regular: '~b regex',
        meaning: 'Body',
      }, {
        regular: '~bq regex',
        meaning: 'Request body',
      }, {
        regular: '~bs regex',
        meaning: 'Response body',
      }, {
        regular: '~c int',
        meaning: 'HTTP response code',
      }, {
        regular: '~d regex',
        meaning: '域',
      }, {
        regular: 'dst regex',
        meaning: '匹配目标地址',
      }, {
        regular: '~e',
        meaning: '匹配错误',
      }, {
        regular: '~h regex',
        meaning: 'Header',
      }, {
        regular: '~hq regex',
        meaning: 'Request header',
      }, {
        regular: '~hs regex',
        meaning: 'Response header',
      }, {
        regular: '~http',
        meaning: '匹配HTTP流',
      }, {
        regular: '~m regex',
        meaning: '匹配方法',
      }, {
        regular: '~marked',
        meaning: '匹配标记的流量',
      }, {
        regular: '~q',
        meaning: '匹配没有相应的请求',
      }, {
        regular: '~s',
        meaning: '匹配相应',
      }, {
        regular: '~src regex',
        meaning: '匹配源地址',
      }, {
        regular: '~t regex',
        meaning: 'Content-type header',
      }, {
        regular: '~tcp',
        meaning: 'Match TCP flows',
      }, {
        regular: '~tq regex',
        meaning: 'Request Content-Type header',
      }, {
        regular: '~ts regex',
        meaning: 'Response Content-Type header',
      }, {
        regular: '~u regex',
        meaning: '匹配URL',
      }, {
        regular: '~websocket',
        meaning: 'Match WebSocket flows',
      }, {
        regular: '!',
        meaning: 'not',
      }, {
        regular: '&',
        meaning: 'and',
      }, {
        regular: '|',
        meaning: 'or',
      }, {
        regular: '(...)',
        meaning: 'grouping',
      }]
      , tableDataRegularExamples: [
        {
          examples: '包含“google.com”的网址',
          way: 'google\\.com'
        }, {
          examples: '主体包含字符串“test”的请求',
          way: '~q ~b test'
        }, {
          examples: '除了具有text / html内容类型的请求之外的任何内容',
          way: '!(~q & ~t "text/html")'
        }
      ],
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
      formLabelWidth: '120px'
    };
  },
}
</script>
