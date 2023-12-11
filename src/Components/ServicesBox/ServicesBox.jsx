import React from "react";
import "./ServicesBox.css";
export default function ServicesBox({ Icon, title, body, bgG }) {
  return (
    <div
      className={`services-box d-flex flex-column justify-content-center align-items-center gap-2 ${
        bgG ? "green-b" : "white-b"
      } `}
    >
      <Icon
        className={`text-center icon-services ${bgG ? "white-t" : "green-t"}`}
      />
      <h5 className={`text-center fw-bold ${bgG && "white-t"}`}>{title}</h5>
      <p className={`${bgG ? "white-t" : "black-50-t"} text-center`}>{body}</p>
    </div>
  );
}
