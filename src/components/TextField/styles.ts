import styled from 'styled-components';
import { theme } from '../../theme';

interface Props {
  error?: boolean;
}

export const ContainerTextField = styled.div`
  height: 74px;
`;

export const Label = styled.label<Props>`
  font-size: 12px;
  margin-bottom: 4px;
  padding-left: 12px;
  color: ${({ error }) =>
    error ? theme.colors.error : theme.colors.text};
`;

export const Input = styled.input<Props>`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  border: 1px solid
    ${({ error }) =>
      error ? theme.colors.error : theme.colors.gray};
  color: ${({ error }) =>
    error ? theme.colors.error : theme.colors.gray};
  display: block;
  font-family: ${theme.fontFamily};
  font-size: 16px;
  outline: none;
  padding: 8px 12px;
  width: 100%;
`;

export const Error = styled.p`
  color: ${theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
  padding-left: 12px;
`;
