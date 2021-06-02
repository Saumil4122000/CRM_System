import axios from 'axios';
const loginurl="http://localhost:3000/v1/user/login"
export const userLogin=(frmdata)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const res=await axios.post(loginurl,frmdata);      
             console.log(res);
            resolve(res.data);
            if(res.data.status==="Success"){
                // Login was success then store the aceess token to session storage
                sessionStorage.setItem('accessJWT',res.data.accessJWT);
                localStorage.setItem('crmSite',JSON.stringify({refreshJWT:res.data.refreshJWT}))
            }
        } catch (error) {
            console.log(error.message)
            reject(error);
        }
    })
}