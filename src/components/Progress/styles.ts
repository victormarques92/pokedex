import { darken } from 'polished';
import styled from 'styled-components';
import { theme } from '../../theme';

interface ProgressBarProps {
  value: number;
}

export const ContainerProgress = styled.div`
  & + & {
    margin-top: 8px;
  }
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const BaseProgress = styled.div`
  background-color: ${theme.colors.shadow};
  border-radius: 20px;
  height: 12px;
  overflow: hidden;
  position: relative;
  width: 320px;
`;

export const ProgressBar = styled.span<ProgressBarProps>`
  background-color: ${theme.colors.primary};
  color: ${darken(0.25, theme.colors.primary)};
  font-size: 10px;
  font-weight: 500;
  height: 100%;
  position: absolute;
  text-align: center;
  width: ${({ value }) => `${value}%`};
`;
