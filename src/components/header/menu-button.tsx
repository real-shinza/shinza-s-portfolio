import Link from 'next/link';

function MenuButton(button: MenuButton) {
  return (
    <div className="menu">
      <Link className="menu-link" href={button.href}>
        <div className="menu-name">
          {button.name}
        </div>
      </Link>
    </div>
  );
}

export default MenuButton;
