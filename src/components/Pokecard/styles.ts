import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../theme';

export const ContainerPokecard = styled(Link)`
  align-items: flex-start;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.shadow};
  border-radius: 12px;
  display: flex;
  gap: 4px;
  padding: 24px 12px;
  transition: 0.2s ease-in-out;
  width: 330px;

  &:hover {
    box-shadow: ${theme.colors.shadow} 0px 4px 12px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  text-transform: capitalize;
`;

export const Text = styled.p`
  color: ${theme.colors.gray};
  font-size: 16px;

  & > strong {
    color: ${theme.colors.text};
    font-weight: 600;
  }
`;
