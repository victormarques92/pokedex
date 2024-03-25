import styled from 'styled-components';

export const ContainerLayout = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding-inline: 24px;
  width: 100%;
`;

export const ContainerHome = styled.div`
  .infinite-scroll-component {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding-block: 24px;

    &__outerdiv {
      margin: 0 auto;
      max-width: 1440px;
      width: 100%;
    }
  }
`;
