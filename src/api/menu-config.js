module.exports = [{
  name: '基础',
  id: 'basic',
  sub: [
    {
      name: '接口请求过滤',
      componentName: 'FilterRequest'
    },
    {
      name: '接口值',
      componentName: 'RealTimeRequest'
    }, {
      name: 'Request',
      componentName: 'RedirectRequest'
    }, {
      name: 'Response',
      componentName: 'RedirectResponse'
    }]
}, {
  name: 'Form',
  id: 'form',
  sub: [{
    name: 'Radio 单选框',
    componentName: 'FormRadio'
  }, {
    name: 'Checkbox 多选框',
    componentName: 'FormCheckbox'
  }]
}]
