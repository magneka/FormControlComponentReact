import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const FormInput = ({
  name,
  inputType,
  value,
  onChange,
  error,
  children,
  messages,
  ...props
}) => {
  console.log("error", error);

  const showBorder = (error) => {
    console.log("ShowBorder:", error);
    if (error === undefined || error === "") return {};
    return { border: "2px solid red" };
  };

  return (
    <Form.Group controlId={name}>
      <label htmlFor={name}>{messages[name + "Label"]}</label>
      <input
        id={name}
        name={name}
        type={inputType}
        placeholder={messages[name + "Placeholder"]}
        onChange={onChange}
        value={value}
        error={error}
        style={showBorder(error)}
      />
      {error && <p>{error}</p>}
    </Form.Group>
  );
};

FormInput.defaultProps = {
  type: "text"
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputType: PropTypes.oneOf(["text", "number", "password"]),
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};
