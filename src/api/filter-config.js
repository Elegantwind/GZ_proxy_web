export let TableDataRegular = [

  {
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

export let TableDataRegularExamples = [
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
]
