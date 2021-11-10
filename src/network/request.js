import axios from 'axios'

export function request(config) {
	//1.axios實例
	const instance =axios.create({
	  baseURL: 'http://152.136.185.210:7878/api/hy66',
	  timeout: 5000		
})
//2.攔截器
instance.interceptors.request.use(config => {
	return config
}, err => {
	console.log(err);
})

//2.2響應攔截
 instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
//3.發送網路請求
return instance(config)
}