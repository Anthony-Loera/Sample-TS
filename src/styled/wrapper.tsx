import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export default Wrapper;
