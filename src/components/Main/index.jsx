import Footer from "../Footer";
import styles from "../../components/Main/styles.module.css";

function Main() {
  return (
    <div className={styles.mainContainer}>
      <h1>LIFE IS WASTED ON THE LIVING</h1>
      <p>Sign in</p>
      <p>with</p>
      <Footer />
    </div>
  );
}

export default Main;
