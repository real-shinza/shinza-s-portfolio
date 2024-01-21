import Link from 'next/link';

export default function MenuButton(button: MenuButton) {
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
