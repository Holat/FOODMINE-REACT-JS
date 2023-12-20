import classes from "./input.module.css";
import React from "react";

import InputContainer from "../InputContainer/InputContainer";

const Input = React.forwardRef(
  ({ label, type, defaultValue, onChange, onBlur, name, error }, ref) => {
    const getErrorMessage = () => {
      if (!error) return;
      if (error.message) return error.message;
      // default
      switch (error.type) {
        case "required":
          return "This Field is Required";
        case "minLength":
          return "Field Is Too Short";
        default:
          return "*";
      }
    };

    return (
      <InputContainer label={label}>
        <input
          defaultValue={defaultValue}
          className={classes.input}
          type={type}
          placeholder={label}
          ref={ref}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <div className={classes.error}>{getErrorMessage()}</div>}
      </InputContainer>
    );
  }
);

export default Input;
