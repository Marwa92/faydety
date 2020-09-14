import React, { useReducer, useContext, useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import FormField from "../components/FormField";

const Container = styled.div`
  flex-direction: row;
  border: 1px solid blue;
`;
const Title = styled.h1`
  object-fit: contain;
  font-family: "Montserrat";
  font-size: 2.5em;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #104f67;
`;
const GroupContainer = styled.div``;
const FormLabel = styled(Form.Label)`
  font-size: 1.125em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: left;
  color: #104f67;
  justify-content: space-between;
  display: flex;
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
const Icon = styled.span`
  display: inline-flex;
`;

export default function Signup() {
  const [view, setView] = useState(false);
  function validateForm() {
    return (
      formInput.full_name.length > 0 &&
      !formInputError.full_name &&
      formInput.email.length > 0 &&
      !formInputError.email &&
      formInput.password.length > 0 &&
      !formInputError.password &&
      formInput.repassword.length > 0 &&
      !formInputError.repassword
    );
  }

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      full_name: "",
      email: "",
      password: "",
      repassword: "",
    }
  );

  const [formInputError, setFormInputError] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      full_name: false,
      email: false,
      password: false,
      repassword: false,
    }
  );

  return (
    <Container>
      <Title>Create Account</Title>
      <Form className="flex-column">
        <GroupContainer>
          <FormField
            name="Full Name"
            type="text"
            value={formInput.full_name}
            onChange={(e) =>
              handleChange(e, textReg, setFormInput, setFormInputError)
            }
            isInvalid={formInputError.full_name}
          />
          <FormField
            name="Email"
            type="text"
            value={formInput.email}
            onChange={(e) =>
              handleChange(e, emailReg, setFormInput, setFormInputError)
            }
            isInvalid={formInputError.email}
          />
          <FormField
            name="Password"
            value={formInput.password}
            onChange={(e) =>
              handleChange(e, passwordReg, setFormInput, setFormInputError)
            }
            isInvalid={formInput.password.length && formInputError.password}
            icon={
              <Icon
                onClick={() => {
                  setView(!view);
                }}
              >
                {view ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </Icon>
            }
          />
          <FormField
            name="Re-Password"
            value={formInput.repassword}
            onChange={(e) =>
              handleChange(e, passwordReg, setFormInput, setFormInputError)
            }
            isInvalid={formInput.repassword.length && formInputError.repassword}
            icon={
              <Icon
                onClick={() => {
                  setView(!view);
                }}
              >
                {view ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </Icon>
            }
          />
        </GroupContainer>

        {/* <FormFooter handleSubmit={handleSubmit} validateForm={validateForm} /> */}
      </Form>
    </Container>
  );
}
