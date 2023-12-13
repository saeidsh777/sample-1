import React, { useReducer } from "react";

const validHandler = (state, action) => {
  switch (action.type) {
    case "GET-VALUE": {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputID]: {
            value: action.inputValue,
            isValidInput: action.isValid,
          },
        },
        isValidForm: true,
      };
    }
  }
};

export const useForm = (initInputs, initValid)=> {
  const [formState, dispatch] = useReducer(validHandler, {
    inputs: initInputs,
    isValidForm: initValid,
  });

  const onValidHandler = (inputID, inputValue, isValid) => {
    dispatch({ type: "GET-VALUE", inputID, inputValue, isValid });
  };

  return [formState, onValidHandler];
}
