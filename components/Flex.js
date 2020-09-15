import { Flex as Base } from "rebass";
import styled from "styled-components";

const Flex = styled(Base)`
  flex-direction: row;
  overflow: hidden;
  padding-top: 6.25em;
  padding-bottom: 5.625em;
  ${(props) => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : null)}
  ${(props) => (props.height ? `height: ${props.height};` : null)}
    ${(
    props
  ) =>
    props.center
      ? `justify-content: center; align-items: center;`
      : null}
    ${(props) =>
    props.border ? `border: ${props.border};` : null}
`;

export default (props) => <Flex {...props}>{props.children}</Flex>;
