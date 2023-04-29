const BASE_URL = 'http://localhost:3333'

export default class Api {
     constructor(url) {
          this.url = url
     }
     async post(data) {
          const post = await fetch(`${BASE_URL}${this.url}`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
          })
          const result = await post.json()
          return new Promise((resolve,reject)=>{
               if(post.status==200){
                    resolve(result)
               }else{
                    reject(result)
               }
          })
     }

     async get(params = {}) {
          const param = new URLSearchParams(params).toString();
          const post = await fetch(`${BASE_URL}${this.url}?${param}`, {
               method: 'GET',
          })
          const result = await post.json()
          return new Promise((resolve,reject)=>{
               if(post.status==200){
                    resolve(result)
               }else{
                    reject(result)
               }
          })
     }
}