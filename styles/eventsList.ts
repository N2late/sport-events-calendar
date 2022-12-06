import { css } from '@emotion/react';
import { guideStyles } from './guideStyles';

export const eventsListStyles = {
  container: css`
    width: 100%;
    margin-top: 2rem;
    padding: 1rem 1rem;
  `,
  titleContainer: css`
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;
  `,

  noEvents: css`
    width: 100%;
    text-align: center;
    font-size: ${guideStyles.fontSizes.large};
    color: ${guideStyles.colors.primary};
    font-weight: 700;
  `,
  title: css`
    display: flex;
    color: ${guideStyles.colors.primary};
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${guideStyles.colors.secondary};
  `,

  filterEvents: css`
    color: ${guideStyles.colors.primary};
    font-size: 1.2rem;
    font-weight: 200;
    text-align: end;
    margin-right: 2rem;
    select {
      margin-left: 1rem;
      padding: 0.5rem;
      border-radius: 12px;
      border: 1px solid ${guideStyles.colors.primary};
    }
  `,

  innerContainer: css`
    padding-left: 1rem;
  `,
  event: css`
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    background-color: ${guideStyles.colors.secondary};
    border-radius: 12px;
  `,
  teamName: css`
    font-weight: 700;
  `,
  eventInfo: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
};
