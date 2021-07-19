import React from "react";
import SignInHOC from "../HOC/SignInHOC";
import { changeUserLoginStatus } from "../../reducers/changeUserLoginStatus";
import { useSelector } from "react-redux";

export const UserSignIn = () => {
  const loginStatus = useSelector((state) => state.changeUserLoginStatus);
  return (
    <SignInHOC
      formName="usersignin"
      toggleLoginStatus={changeUserLoginStatus}
      loginStatus={loginStatus}
    />
  );
};
