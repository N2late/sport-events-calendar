import { css } from '@emotion/react';
import { guideStyles } from './guideStyles';

export const addEventStyles = {
  container: css`
    width: 60%;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  `,

  btn: css`
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    border: none;
    font-size: ${guideStyles.fontSizes.large};
    color: ${guideStyles.colors.primary};
    font-weight: 700;
    background-color: ${guideStyles.colors.secondary};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
    :active {
      scale: 0.96;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
  `,
  formContainer: css`
    position: relative;
    background: ${guideStyles.colors.secondary};
    border: 1px solid ${guideStyles.colors.primary};
    padding: 2rem;
    margin: 1rem;
    border-radius: 12px;
    max-width: max-content;
  `,
  btnContainer: css`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    justify-content: flex-end;
  `,
  formWrapperTitle: css`
    text-align: center;
    margin: 0;
    margin-bottom: 2rem;
  `,
  formWrapperContainer: css`
    display: grid;
    gap: 1rem 0.5rem;
    justify-content: flex-start;
    grid-template-columns: auto minmax(auto, 400px);
    color: ${guideStyles.colors.primary};
    font-weight: 700;
  `,
};
