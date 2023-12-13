import React, { useEffect, useReducer } from "react";

import "./Input.css";

const setValue = (state, action) => {
  switch (action.type) {
    case "CHANGE-INPUT": {
      return {
        ...state,
        value: action.value,
        isValid: true,
      };
    }

    default:
      state;
  }
};

export default function Input(props) {
  const [mainInput, dispatch] = useReducer(setValue, {
    value: "",
    isValid: false,
  });

  const { value } = mainInput;

  useEffect(() => {
    props.onValidHandler(props.id, value, mainInput.isValid);
  }, [value]);


  return (
    <input
      className="input"
      type="text"
      placeholder="Name"
      value={value}
      onChange={(e) => {
        dispatch({ type: "CHANGE-INPUT", value: e.target.value });
      }}
    />
  );
}
