import Image from 'next/image';
import { layoutStyles } from '../../styles/layout';

export default function Footer() {
  return (
    <footer css={layoutStyles.footer}>
      <div css={layoutStyles.footerContainer}>
        <div>
          <a href="/" css={layoutStyles.logo}>
            <Image src="/logoSport.png" alt="logo" width={50} height={50} />
            <h1 css={layoutStyles.siteName}>SPORTCAL</h1>
          </a>
        </div>
        <nav css={layoutStyles.nav}>
          <ul css={layoutStyles.navList}>
            <li css={layoutStyles.navItem}>
              <a href="#">About us</a>
            </li>
            <li css={layoutStyles.navItem}>
              <a href="#">Sports</a>
            </li>
            <li css={layoutStyles.navItem}>
              <a href="#">Career</a>
            </li>
          </ul>
        </nav>
      </div>
      <p css={layoutStyles.copyright}>copyright &copy; 2022 </p>
    </footer>
  );
}
