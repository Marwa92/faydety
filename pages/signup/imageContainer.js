import React from "react";
import styled from "styled-components";
// import group from "/images/group/group.png";

const Container = styled.div`
  border: 1px solid green;
  margin-left: 6.875em;
  width: 24.438em;
  object-fit: contain;
  justify-content: center;
`;

export default function ImageContainer() {
  return (
    <Container>
      <img
        src="/images/group/group.png"
        //         srcset="assets/images/group/group-6006@2x.png 2x,
        //   assets/images/group@3x.png 3x"
      />
    </Container>
  );
}
