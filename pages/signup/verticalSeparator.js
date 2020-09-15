import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 3.375em;
  flex-direction: column;
  text-align: center;
  height: 21.344em;
`;
const Separator = styled.div`
  border-left: 2px solid #ced4da;
  height: 10em;
`;
const Text = styled.p`
  width: 1.75em;
  font-family: "Montserrat";
  font-size: 1.125em;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: left;
  color: #104f67;
`;
export default function VerticalSeparator() {
  return (
    <Container>
      <Separator></Separator>
      <Text>OR</Text>
      <Separator></Separator>
    </Container>
  );
}
