// components/NavBar.js
import Link from 'next/link';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className = {styles.navbar}>

      <ul>
        <div className= {styles.frontNavs}>
        <li>
          <Link href="/">
          Journal
          </Link>
        </li>
        <li>
          <Link href="/about">
            Playist
          </Link>
        </li>
        <li>
          <Link href="/about">
            Profile
          </Link>
        </li>
        </div>

      <div className= {styles.logo}>
       <img src="/images/logo.png" alt="Logo" />
      </div>

      <div className = {styles.signIn}>
        <li>
          <Link href="/about">
            Sign in
          </Link>
        </li>
        </div>

      </ul>


    </nav>
  );
};

export default NavBar;
