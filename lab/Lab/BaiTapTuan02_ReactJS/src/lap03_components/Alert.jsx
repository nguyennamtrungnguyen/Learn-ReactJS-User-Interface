import "./Alert.css";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import Button from "../lap02_components/Button";
import { useState } from "react";

const Alert = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = ({ title, message, type, duration = 3000 }) => {
    setAlert({ title, message, type });

    setTimeout(() => {
      setAlert(null);
    }, duration);
  };

  const renderIcon = (type) => {
    if (type === "success") return <FaCheckCircle />;
    if (type === "warning") return <IoIosWarning />;
    if (type === "error") return <MdError />;
  };

  return (
    <div className="main">
      <div id="alert">
        {alert && (
          <div className={`alert alert--${alert.type}`}>
            <div className="alert-icon">{renderIcon(alert.type)}</div>

            <div className="alert-body">
              <h3 className="alert-title">{alert.title}</h3>
              <p className="alert-msg">{alert.message}</p>
            </div>

            <div className="alert-close" onClick={() => setAlert(null)}>
              <FaTimes />
            </div>
          </div>
        )}
      </div>

      <div className="btn">
        <Button
          type="success"
          onClick={() =>
            showAlert({
              title: "Success",
              message: "Thành công rồi 🎉",
              type: "success",
            })
          }
        >
          Success
        </Button>

        <Button
          type="warning"
          onClick={() =>
            showAlert({
              title: "Warning",
              message: "Cẩn thận nha ⚠️",
              type: "warning",
            })
          }
        >
          Warning
        </Button>

        <Button
          type="danger"
          onClick={() =>
            showAlert({
              title: "Error",
              message: "Có lỗi xảy ra ❌",
              type: "error",
            })
          }
        >
          Danger
        </Button>
      </div>
    </div>
  );
};

export default Alert;
