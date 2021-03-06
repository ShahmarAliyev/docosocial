import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  try {
    dispatch({ type: "LOGIN_START" });

    const res = await axios.post(
      "https://celebritysocial.herokuapp.com/api/auth/login",
      userCredentials
    );

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
