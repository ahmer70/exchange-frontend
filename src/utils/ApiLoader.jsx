import React from "react";

const ApiLoader = ({ title }) => {
  return (
    <div
      style={{
        background: "#fdfdfdd4",
        top: "0",
        left: "0",
        position: "fixed",
        zIndex: 99999,
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="text-center">
          <div
            className="spinner-border "
            role="status"
            aria-hidden="true"
          ></div>

          <div className="ms-1">{title || "Loading..."}</div>
        </div>
      </div>
    </div>
  );
};

export default ApiLoader;
