import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import PropTypes from "prop-types";
import SubmitButton from "../SubmitButton";

const FormCheck = styled(Form.Check)`
  font-size: 1em;
  width: 19.75em;
  height: 1.188em;
  margin-bottom: 1.5em;
  cursor: pointer;
  user-select: none;
  font-family: "Roboto";
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #757a7e;
`;
const Login = styled.a`
  text-align: center;
  text-align: center;
  font-family: "Roboto";
  font-size: 1em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #56b27b;
  :hover {
    color: #034047;
  }
`;
const LoginAsk = styled.p`
  margin-top: 0.75em;
  text-align: center;
  font-family: "Roboto";
  font-size: 1em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #757a7e;
`;
export default function FormFooter(props) {
  const { handleSubmit, validateForm } = props;
  return (
    <Fragment>
      <FormCheck
        type="checkbox"
        label="I have read and agree the terms & conditions"
      />
      <SubmitButton
        handleSubmit={handleSubmit}
        disabled={!validateForm() || !check}
        text="Create my Free Account"
      />
      <LoginAsk>
        Already have account? <Login href="/">Login</Login>
      </LoginAsk>
    </Fragment>
  );
}

FormFooter.propTypes = {
  handleSubmit: PropTypes.func,
  validateForm: PropTypes.func,
};
