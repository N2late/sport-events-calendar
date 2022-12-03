import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            text-decoration: none;
          }
          html,
          body {
            font-family: 'Arial', sans-serif;
            font-size: 16px;
            line-height: 1.4;
            display: flex;
            flex-direction: column;
            @media screen and (max-width: 600px) {
              position: absolute;
              min-height: 100vh;
            }
          }
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
