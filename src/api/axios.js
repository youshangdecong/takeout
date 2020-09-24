// axios请求模板
/**
 * 向外部暴露一个函数 ajax
 * @param {*} url 请求路径，默认为空
 * @param {*} data 请求参数，默认为空对象
 * @param {*} type 请求方法，默认为GET
 */
export default function aixos(url = '', data = {}, type = 'GET') {
  // 返回一个promist对象 
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '='+ data[key]  + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get
      promise = aixos.get(url)
       
    } else {
      
      promise = aixos.post(url,data)
    }
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
      reject(error)
    })
  })
}