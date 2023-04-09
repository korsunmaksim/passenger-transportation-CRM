import React from "react";

export const Loading = () => {
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{
        height: "40vh",
      }}
    >
      <h2>Loading </h2>
      <div className="spinner-border ml-2 " role="status"></div>
    </div>
  );
};
