import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../theme';

export interface PokeloaderProps {
  fullScreen?: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ContainerPokeball = styled.div<PokeloaderProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 24px;
  width: 100%;

  ${({ fullScreen }) =>
    fullScreen &&
    css`
      height: 100vh;
    `}
`;

export const Pokeball = styled.div`
  animation: ${rotate} 0.8s linear 0s infinite;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  border: 3px solid;
  height: 60px;
  overflow: hidden;
  position: relative;
  width: 60px;

  &:after {
    background-color: red;
    border-bottom: 4px solid;
    content: '';
    height: 30px;
    position: absolute;
    top: -4px;
    width: 60px;
  }

  &:before {
    background-color: ${theme.colors.white};
    border-radius: 50%;
    border: 4px solid;
    bottom: 18px;
    content: '';
    height: 10px;
    position: absolute;
    right: 18px;
    width: 10px;
    z-index: 1;
  }
`;
