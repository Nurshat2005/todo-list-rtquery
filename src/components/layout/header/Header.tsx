import Link from 'next/link';
import scss from './Header.module.scss';
const Header = () => {
  return <header className={scss.Header}>
    <div className="container">
      <div className={scss.content}>
        <Link  href={"/"}>Home</Link>
        <Link href={"/TodoList"}>TodoList</Link>
        <Link href={"/About"}>About</Link>
      </div>
    </div>
  </header>;
};

export default Header;
