import React from "react";
import { useRecoilState } from "recoil";
import { authState } from "../recoil/AuthState";

const Profile = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const logout = () => {
    setAuth({
      token: null,
      user: null,
    });

    localStorage.removeItem("token");
  };

  return (
    <div>
      <h2>Profile</h2>

      <p>Email: {auth.user?.email}</p>
      <p>Token: {auth.token}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
