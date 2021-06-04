import axios from 'axios'
export const getAllTicket= ()=>{

return new Promise(async(resolve,reject)=>{
    try {
        const result= axios.get(
             "http://localhost:3000/v1/ticket",
             {
                headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdW1pbDcxNUBnbWFpbC5jb20iLCJpYXQiOjE2MjI4MTAxMTksImV4cCI6MTYyMjgxMzExOX0.i8VJzUn-dJXeajCQzzWllas5igIDdNU78Jb7u-okm_4" }
             }
         )
         resolve(result)
     } catch (error) {
        reject(error)
     }
})


    
}
