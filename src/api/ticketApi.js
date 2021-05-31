import axios from 'axios'
export const getAllTicket= ()=>{

return new Promise(async(resolve,reject)=>{
    try {
        const result= axios.get(
             "http://localhost:3000/v1/ticket",
             {
                 headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdW1pbDcxNUBnbWFpbC5jb20iLCJpYXQiOjE2MjI0NDI4NjUsImV4cCI6MTYyMjQ0NTg2NX0.nFB-eN0k3V_qXIQz8bPu4n7qpjAuK1YLHWTISUbKY-M" }
             }
         )
         resolve(result)
     } catch (error) {
        reject(error)
     }
})


    
}
