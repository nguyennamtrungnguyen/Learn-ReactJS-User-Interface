import React from "react";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../recoil/LoginStata";

const Lap03 = () => {
  const user = useRecoilValue(LoginState);
  return <div>{user ? `Welcome ${user.username}` : "Chưa đăng nhập"}</div>;
};

export default Lap03;
