import axios from 'axios';
const rootUrl = "http://localhost:3000/v1"
const loginurl = rootUrl + "/user/login"
const userProfileurl = rootUrl + "/user"
const logouturl=rootUrl+"/user/logout"
const newAccessJWT=rootUrl+"/tokens"
// GET http://localhost:3000/v1/tokens
export const userLogin = (frmdata) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginurl, frmdata);
            // console.log(res);
            resolve(res.data);
            if (res.data.status === "Success") {
                // Login was success then store the aceess token to session storage
                sessionStorage.setItem('accessJWT', res.data.accessJWT);
                localStorage.setItem('crmSite', JSON.stringify({ refreshJWT: res.data.refreshJWT }))
            }
        } catch (error) {
            console.log(error.message)
            reject(error);
        }
    })
}

export const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const accessJWT = sessionStorage.getItem('accessJWT')
            console.log(accessJWT)
            if (!accessJWT) {
                reject("Token not found");
            }
            const res = await axios.get(userProfileurl, {
                headers: { Authorization: accessJWT }
            });
            console.log(res);
            resolve(res.data);
        } catch (error) {
            console.log(error)
            reject(error.message);
        }
    })
}



export const fetchNewAccessToken = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const {refreshJWT} = JSON.parse(localStorage.getItem('crmSite'))
            // console.log(accessJWT)
            if (!refreshJWT) {
                reject("Token not found");
            }
            const res = await axios.get(newAccessJWT, {
                headers: { Authorization: refreshJWT }
            });
            console.log(res.data);
            if (res.data.status === "Success") {
                // Login was success then store the aceess token to session storage
                sessionStorage.setItem("accessJWT", res.data.accessJWT);
            }
            resolve(true);
        } catch (error) {
            if(error.message="Request failed with status 403"){
                localStorage.removeItem('crmSite');
            }
            // console.log(error.message)
            reject(false);
        }
    })
}


export const userLogout=async()=>{
    try {
        await axios.delete(logouturl,{
            headers:{
                Authorization:sessionStorage.getItem("accessJWT")
            },
        });
    } catch (error) {
        console.log(error.message)
    }
}