import React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { toastState } from "../recoil/ToastState";

const styles = {
  toast: {
    position: "fixed",
    top: 20,
    right: 20,
    background: "green",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
  },
};

const Toast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ message: "", visible: false });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  if (!toast.visible) return null;
  return <div style={styles.toast}>{toast.message}</div>;
};

export default Toast;
