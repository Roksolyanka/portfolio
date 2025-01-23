import styled from 'styled-components';
import { fadeIn } from '../../ui';

export const ProjectsSection = styled.section`
  display: flex;
  gap: 10px;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    padding: 0 25px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[4]}) {
    padding: 0 100px;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  -webkit-overflow-scrolling: touch;
  padding: 0px;
  flex-direction: column;
  animation: ${fadeIn} 1s ease-out forwards;

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    height: 400px;
    flex-direction: row;
    overflow-x: auto;
    padding: 40px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 5px;
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #337912;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 5px #337912;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[4]}) {
    height: 500px;
  }
`;
