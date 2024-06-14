// components/NavBar.js
import Link from 'next/link';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className = {styles.navbar}>

      <ul>
      <div className= {styles.logo}>
       <label>Moodic</label>
       <img src="/images/logo.png" alt="Logo" />
      </div>

        <div className= {styles.frontNavs}>
        <li>
          <Link href="#">
          Journal
          </Link>
        </li>
        <li>
          <Link href="#">
            Playist
          </Link>
        </li>
        <li>
          <Link href="#">
            Profile
          </Link>
        </li>
        </div>

      

      <div className = {styles.signIn}>
        <li>
          <Link href="#">
            Sign in
          </Link>
        </li>
        </div>

      </ul>


    </nav>
  );
};

export default NavBar;
