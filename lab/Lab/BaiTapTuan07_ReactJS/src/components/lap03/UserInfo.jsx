import React from "react";
import { useRecoilState } from "recoil";
import { LoginState } from "../../recoil/LoginStata";

const UserInfo = () => {
  const [user, setUser] = useRecoilState(LoginState);
  if (!user) return <p>Chưa đăng nhập</p>;
  return (
    <div>
      <h3>Xin chào: {user.username}</h3>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default UserInfo;
