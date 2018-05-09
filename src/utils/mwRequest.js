import tip from './tip'
import axios from 'axios'
const qs = require('qs');
/**
 * request,统一处理后端请求
 * loadTarget为loading 的target
 */
export const mwRequest = (url,params ={},loadTarget) => {
  // let handle =setTimeout(tip.loaded(),10000)
  tip.loading(loadTarget);
  try{
    let res =  axios.request({
      url: url,
      method: params.method || 'get',
      data: params.data,
      headers: params.header || { 'Content-Type': 'application/json' },
      timeout: 5000,
      params :params.query,
      paramsSerializer: function(qparams) {
        return qs.stringify(qparams, {arrayFormat: 'brackets',skipNulls: true})
      },

    });
    return res;
  }finally {
    tip.loaded();
  }


};


// module.exports = {
//   mwRequest
// }
