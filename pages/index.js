import Flex from "../components/Flex";
import SignupForm from "./signup/signupForm";
import VerticalSeparator from "./signup/verticalSeparator";
import Signup from "./signup";
import React from "react";

export default function App() {
  return (
    <Flex center height="100vh">
      <Signup />
    </Flex>
  );
}
