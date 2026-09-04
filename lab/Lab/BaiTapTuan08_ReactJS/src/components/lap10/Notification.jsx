import React from "react";
import { useRecoilValue } from "recoil";
import { toastState } from "../recoil/ToastState";

const Notification = () => {
  const toast = useRecoilValue(toastState);

  if (!toast.visible) return null;

  return <div className="toast">{toast.message}</div>;
};

export default Notification;
