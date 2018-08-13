// import Vue from 'vue'
// //
// import VueResource from 'vue-resource'
// //
// // Vue.config.productionTip = false
//
// Vue.use(VueResource)
//
// var demo = new Vue({
//   el: '#app',
//   data: {
//     gridColumns: ['id', 'url', 'request_method', 'request_scheme', 'request_host', 'request_port', 'request_path',
//       'request_http_version', 'request_headers', 'request_content', 'response_http_version', 'response_status_code', 'response_reason', 'response_headers', 'response_content', 'response_text'],
//     export: [],
//     apiUrl:
//       'http://0.0.0.0:8888/realtime/show_all_request'
//   },
//   ready: function () {
//     this.getCustomers()
//   },
//   methods: {
//     getCustomers: function () {
//       this.$http.get(this.apiUrl)
//         .then((response) => {
//           this.$set('gridData', response.data)
//         })
//         .catch(function (response) {
//           console.log(response)
//         })
//       return gridData;
//     }
//   }
// })
