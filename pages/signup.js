import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import FormField from "../components/FormField";
import FormFooter from "../components/FormFooter";
import { handleChange } from "../services/services";
import { textReg, emailReg, passwordReg } from "../utils/Regex";

const Container = styled.div`
  flex-direction: row;
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

const Icon = styled.span`
  display: inline-flex;
  float: right;
`;

export default function Signup() {
  const [view, setView] = useState(false);
  const [review, setReview] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    //need to enhanced
    const user = {
      lang: "en",
      full_name: formInput.full_name.trim(),
      email: formInput.email.trim(),
      password: brandInput.password,
      repassword: brandInput.rexpassword,
    };
  };
  return (
    <>
      <Container>
        <Title>Create Account</Title>
        <Form className="flex-column">
          <GroupContainer>
            <FormField
              name="Full Name"
              id="full_name"
              type="text"
              value={formInput.full_name}
              onChange={(e) => {
                handleChange(e, textReg, setFormInput, setFormInputError);
                console.log("event:", e.target.value);
              }}
              isInvalid={formInputError.full_name}
            />
            <FormField
              name="Email"
              id="email"
              type="text"
              value={formInput.email}
              onChange={(e) =>
                handleChange(e, emailReg, setFormInput, setFormInputError)
              }
              isInvalid={formInputError.email}
            />
            <FormField
              name="Password"
              id="password"
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
              message="Passwords must be at least 8 characters and
            include a capital letter, number and symbol"
            />
            <FormField
              name="Re-enter Password"
              id="repassword"
              value={formInput.repassword}
              onChange={(e) =>
                handleChange(e, passwordReg, setFormInput, setFormInputError)
              }
              isInvalid={
                formInput.repassword.length && formInputError.repassword
              }
              icon={
                <Icon
                  onClick={() => {
                    setReview(!review);
                  }}
                >
                  {review ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </Icon>
              }
            />
          </GroupContainer>

          <FormFooter handleSubmit={handleSubmit} validateForm={validateForm} />
        </Form>
      </Container>
    </>
  );
}
