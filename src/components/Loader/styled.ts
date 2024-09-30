import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background: radial-gradient(
    circle,
    rgba(190, 160, 138, 0.8716736694677871) 0%,
    rgba(174, 205, 231, 0.5579481792717087) 100%
  );

  z-index: 1000;
`;
