import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled(Form.Label)`
  display: block;
  font-size: 1.125em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: left;
  color: #104f67;
  justify-content: space-between;
  margin-bottom: 0.5em;
  margin-top: 1.313em;
`;
const FormControl = styled(Form.Control)`
  height: 2.8em;
  width: 21.875em;
  border-radius: 3px;
  border: solid 1px grey;
  background-color: #ffffff;
  :focus {
    border-radius: 3px;
    border: solid 0.0416em #104f67;
    background-color: #ffffff;
  }
`;
const Message = styled.p`
  width: 20em;
  font-family: "Roboto";
  font-size: 1em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  display: block;
  color: #6c757d;
`;
export default function FormField(props) {
  const { name, type, value, isInvalid, icon, message } = props;
  return (
    <>
      <Form.Group className="form-label-group">
        <Label className="label">
          {name}
          {icon}
        </Label>
        <FormControl
          required
          className="input"
          type={type}
          value={value}
          isInvalid={isInvalid}
          {...props}
        />
        <Message>{message}</Message>
      </Form.Group>
    </>
  );
}
FormField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  isInvalid: PropTypes.any,
  icon: PropTypes.any,
  message: PropTypes.any,
};
