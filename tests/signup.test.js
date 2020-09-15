import React from "react";
import { render } from "@testing-library/react";
import Signup from "../pages/signup/signupForm";

describe("SignupForm component", () => {
  it("shows all required input fields with empty values", () => {
    const { getByTestId } = render(<Signup />);
    expect(getByTestId("full_name").value).toBe("");
    expect(getByTestId("email").value).toBe("");
    expect(getByTestId("password").value).toBe("");
    expect(getByTestId("repassword").value).toBe("");
  });
});
