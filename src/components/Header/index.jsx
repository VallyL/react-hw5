import Logo from "../../assets/g10.svg";
import styles from "../../components/Header/styles.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={Logo} />
    </div>
  );
}

export default Header;
