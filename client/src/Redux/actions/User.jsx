import axios from "axios"
import { LoadUserRequest, LoadUserSucces, LoadingFail } from "../reducers/User"
import { server } from "../../server"

export const loadUser = async (dispatch) => {
  //higher order function
  try {
    dispatch(LoadUserRequest())
    const { data } = await axios.get(`${server}/getuser`, {
      withCredentials: true,
    })

    console.log("helo")
    dispatch(LoadUserSucces(data.user))
  } catch (error) {
    dispatch(LoadingFail(error.res.data.message))
  }
}
