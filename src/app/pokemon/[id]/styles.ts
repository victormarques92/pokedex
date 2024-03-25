import Link from 'next/link';
import { darken } from 'polished';
import styled from 'styled-components';
import { theme } from '../../../theme';

export const ContainerPokeDetail = styled.div`
  align-items: flex-start;
  background-color: ${theme.colors.white};
  border-radius: 12px;
  box-shadow: ${theme.colors.shadow} 0px 4px 12px;
  display: flex;
  gap: 32px;
  margin: 40px auto;
  padding: 32px;
  width: fit-content;
`;

export const Image = styled.img`
  filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.3));
  width: 400px;
`;

export const Name = styled.h2`
  font-size: 32px;
  margin-bottom: 8px;
  text-transform: capitalize;
`;

export const BoxTypes = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Chip = styled.div`
  background-color: ${theme.colors.shadow};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  text-transform: uppercase;
`;

export const Button = styled(Link)`
  background-color: ${theme.colors.primary};
  border-radius: 12px;
  color: ${darken(0.25, theme.colors.primary)};
  display: table;
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto 40px;
  padding: 12px 24px;
  text-transform: uppercase;
`;

export const ButtonOutlined = styled(Link)`
  background-color: transparent;
  border: 2px solid ${darken(0.25, theme.colors.primary)};
  border-radius: 12px;
  color: ${darken(0.25, theme.colors.primary)};
  display: table;
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto 40px;
  padding: 12px 24px;
  text-transform: uppercase;
`;
