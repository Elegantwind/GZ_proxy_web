<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item title="以下是能够使用的正则表达是方法">
        <div>
          <el-table
            :data="tableData1"
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
    </el-collapse>
  </div>
</template>
<!--<style>-->
<!--font-style: oblique;-->
<!--color: rgb(128, 139, 150);-->
<!--}-->
<!--/*</style>*/-->
<script>

export default {
  data() {
    return {
      tableData1: [{
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
    }
  }
}
</script>
