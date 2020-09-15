import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 6.875em;
  width: 24.438em;
  object-fit: contain;
  justify-content: center;
`;

export default function ImageContainer() {
  return (
    <Container>
      <img src="/images/group/group.png" />
    </Container>
  );
}
