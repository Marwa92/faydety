import { Flex as Base } from "rebass";
import styled from "styled-components";

const Flex = styled(Base)`
  flex-direction: row;
  border: 1px solid red;
  padding-top: 4em;
  ${(props) => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : null)}
  ${(props) => (props.height ? `height: ${props.height};` : null)}
 
    ${(
    props
  ) => (props.border ? `border: ${props.border};` : null)}
`;

export default (props) => <Flex {...props}>{props.children}</Flex>;
