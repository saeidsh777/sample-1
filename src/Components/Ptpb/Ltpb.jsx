import React from "react";

export default function Ltpb({ l, t, p, b, colorW }) {
  return (
    <div className="d-flex flex-column gap-3">
      {l && <p className="green-t m-0">{l}</p>}
      {t && (
        <span className={`fw-bold m-0 h1 ${colorW ? "white-t" : ""}`}>{t}</span>
      )}
      {p && <p className={`${colorW ? "white-t" : "black-50-t"}`}>{p}</p>}

      {b && <button className="btn-c1">{b}</button>}
    </div>
  );
}
