import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Welcome2Props {}

const StyledLib2 = styled.div`
  color: pink;
`;

export function Welcome2(props: Welcome2Props) {
  return (
    <StyledLib2>
      <h1>Welcome to Lib2!</h1>
    </StyledLib2>
  );
}

export default Welcome2;
