import React from "react";
import { Toast } from "react-bootstrap";

const ToastNotification = ({ show, message, onClose, color }) => {
  return (
    <Toast
      className={color}
      show={show}
      onClose={onClose}
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
      }}
    >
      <Toast.Header closeButton={false}>
        <strong className="mr-auto ">Error</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastNotification;
