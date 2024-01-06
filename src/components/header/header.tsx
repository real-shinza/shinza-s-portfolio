import Link from 'next/link';
import MenuButton from './menu-button';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link className="top-link" href="/">
          <div className="site-title">
            <div className="site-name">
              Shinza&#39;s Portfolio
            </div>
          </div>
        </Link>
      </div>
      <div className="header-right">
        <div className="menus">
          <MenuButton
            name="プロフィール"
            href="/#profile"
          />
          <MenuButton
            name="作品"
            href="/#work"
          />
          <MenuButton
            name="略歴"
            href="/#biography"
          />
          <MenuButton
            name="スキル"
            href="/#skill"
          />
          <MenuButton
            name="所有資格"
            href="/#license"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
