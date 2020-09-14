import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import PropTypes from "prop-types";

const ConfirmButton = styled(Button)`
  width: 21.875em;
  display: block;
  height: 3em;
  border-radius: 3em;
  border: none;
  background-color: #56b27b;
  padding-top: 0.9em;
  padding-bottom: 0.8em;
  text-align: center;
`;
const Text = styled.p`
  font-family: "Montserrat";
  font-size: 1.125em;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: 0;
`;
export default function SubmitButton(props) {
  const { handleSubmit, disabled, text } = props;
  return (
    <ConfirmButton onClick={handleSubmit} disabled={disabled}>
      <Text>{text}</Text>
    </ConfirmButton>
  );
}

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  margin: PropTypes.string,
};
