module.exports = [{
  name: '请求',
  id: 'Request',
  sub: [
    {
      name: '接口请求过滤设置',
      componentName: 'FilterRequest'
    },
    {
      name: '请求内容',
      componentName: 'RealTimeRequest'
    }]
}, {
  name: '功能',
  id: 'Redirect',
  sub: [{
    name: '替换',
    componentName: 'Redirect'
  }
  // , {
  //   name: 'Response',
  //   componentName: 'RedirectResponse'
  // }
  ]
}]
