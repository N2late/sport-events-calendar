import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const contentWrap = css`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    min-height: 1220px;
  }
`;

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main css={contentWrap}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
