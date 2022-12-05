import { ReactNode } from 'react';
import { addEventStyles } from '../../styles/addEvent';

type FormWrapperProps = {
  children: ReactNode;
  title: string;
};

export default function FormWrapper({ children, title }: FormWrapperProps) {
  return (
    <>
      <h2 css={addEventStyles.formWrapperTitle}>{title}</h2>
      <div css={addEventStyles.formWrapperContainer}>{children}</div>
    </>
  );
}
