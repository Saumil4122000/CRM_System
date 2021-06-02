import axios from 'axios'
export const getAllTicket= ()=>{

return new Promise(async(resolve,reject)=>{
    try {
        const result= axios.get(
             "http://localhost:3000/v1/ticket",
             {
                 headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdW1pbDcxNUBnbWFpbC5jb20iLCJpYXQiOjE2MjI2MjQwNjMsImV4cCI6MTYyMjYyNzA2M30.TTIrsh6P0Njuzy-EO9RAzegca5oQv0HtNXmVXnQCTrg" }
             }
         )
         resolve(result)
     } catch (error) {
        reject(error)
     }
})


    
}
