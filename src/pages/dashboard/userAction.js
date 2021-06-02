import {getUserPending,getUserSuccess,getUserFail} from './userSlice'
import {fetchUser} from '../../api/userApi'
export const getUserProfile=()=>async(dispatch)=>{
    try {
        dispatch(getUserPending())
        // get user profile through user accesscode
        const result=await fetchUser()
        // console.log(result)
        if(result.user && result.user._id){
            return dispatch(getUserSuccess(result.user))
        }
    } catch (error) {
        dispatch(getUserFail(error.message));
    }
}   