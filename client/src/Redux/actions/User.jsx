import axios from "axios"
import { LoadUserRequest, LoadUserSucces, LoadingFail } from "../reducers/User"
import { server } from "../../server"

export const loadUser = ()=> async (dispatch) => {
  //higher order function
 
  try {
    
    dispatch(LoadUserRequest())
    console.log("helo")
    const { data } = await axios.get(`${server}/getuser`, {
      withCredentials: true,
    })

    
    dispatch(LoadUserSucces(data.user))
  } catch (error) {
    dispatch(LoadingFail(error.response.data.message))
  }
}
