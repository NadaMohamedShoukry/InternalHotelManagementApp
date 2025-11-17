import styled, { css } from "styled-components";

// const test = css`
//   css is important beacuse of the logic added in the component.
//     text-align: center;
//     ${10>5}
// `
// Taged template literals.
// H1 => react component so start with Upprcase
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
    `}
     ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
     ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
  line-height:1.4
`;
export default Heading;
