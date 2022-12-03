import Image from 'next/image';
import { layoutStyles } from '../../styles/layout';

export default function Header() {
  return (
    <header css={layoutStyles.header}>
      <div css={layoutStyles.container}>
        <div css={layoutStyles.logoContainer}>
          <a css={layoutStyles.logo} href="/">
            <Image src="/logoSport.png" alt="logo" width={40} height={40} />
            <h1 css={layoutStyles.siteName}>SPORTCAL</h1>
          </a>
        </div>
        <nav css={layoutStyles.nav}>
          <ul css={layoutStyles.navList}>
            <li css={layoutStyles.navItem}>
              <a href="#">Teams</a>
            </li>
            <li css={layoutStyles.navItem}>
              <a href="#">Sports</a>
            </li>
            <li css={layoutStyles.navItem}>
              <a href="#">Competitions</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
