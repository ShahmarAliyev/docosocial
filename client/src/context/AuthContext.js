import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    username: "Drake",
    email: "drake@gmail.com",
    password: "$2b$10$YemmZIV0Ah4NYuID2IBpSukWaz5gwfxKsLkekf6/5k/G6wvbeYiKO",
    profilePicture: "profiles/10.jpg",
    coverPicture: "posts/10.jpg",
    followers: ["62899e583322d995ba8bdd02"],
    followings: ["62899e533322d995ba8bdd00", "62899e583322d995ba8bdd02"],
    isAdmin: false,
    _id: "629552bda0f097707dd0a768",
    from: "Newyork",
    city: "Brooklyn",
    relationship: 1,
    likes: ["62899e583322d995ba8bdd00"],
    desc: "Best Singer of the World",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
