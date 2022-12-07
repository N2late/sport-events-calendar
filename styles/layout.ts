import { css } from '@emotion/react';
import { guideStyles } from './guideStyles';

export const layoutStyles = {
  header: css`
    width: 100%;
  `,
  container: css`
    background-color: ${guideStyles.colors.primary};
    display: flex;
    height: 60px;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
      padding: 1rem;
      gap: 0.5rem;
      width: 100vw;
    }
  `,
  logoContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  logo: css`
    margin-left: 25px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
      margin-left: 0;
    }
  `,
  siteName: css`
    color: ${guideStyles.colors.bright};
    font-size: ${guideStyles.fontSizes.medium};
    font-family: ${guideStyles.typography};
    margin-left: 10px;
  `,
  nav: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    @media screen and (max-width: 600px) {
      padding-left: 1rem;
      justify-content: center;
    }
  `,
  navList: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    margin-right: 25px;
  `,
  navItem: css`
    list-style: none;
    a {
      color: ${guideStyles.colors.bright};
      font-size: ${guideStyles.fontSizes.small};
    }
  `,
  footer: css`
    background-color: ${guideStyles.colors.primary};
  `,
  footerContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
  `,
  copyright: css`
    color: ${guideStyles.colors.bright};
    font-size: ${guideStyles.fontSizes.verySmall};
    text-align: right;
    margin-right: 25px;
  `,
};
