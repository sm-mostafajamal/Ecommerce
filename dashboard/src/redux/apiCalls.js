import { loginFailure, loginStart, loginSuccess } from "./userReducer";
import { publicRequest } from "../services/dashboard";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
