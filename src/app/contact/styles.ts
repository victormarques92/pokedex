import { darken } from 'polished';
import styled from 'styled-components';
import { theme } from '../../theme';

export const ContainerContact = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 32px;
  justify-content: center;
  margin: 40px auto;
  max-width: 1440px;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  box-shadow: ${theme.colors.shadow} 0px 4px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  width: 540px;
`;

export const Button = styled.button`
  background-color: ${theme.colors.primary};
  border-radius: 12px;
  color: ${darken(0.25, theme.colors.primary)};
  display: table;
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto;
  padding: 12px 24px;
  text-transform: uppercase;
`;
