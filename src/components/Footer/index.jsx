import Apple from "../../assets/Subtract.svg";
import Google from "../../assets/Subtract copy.svg";
import X from "../../assets/Subtract copy 2.svg";
import styles from "../../components/Footer/styles.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <img src={Apple} />
      <img src={Google} />
      <img src={X} />
    </div>
  );
}

export default Footer;
