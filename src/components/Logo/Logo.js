import logoSrc from "../../image/taipeilogo.png";

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <header className={styles.logo}>
      <img src={logoSrc} alt="taipei logo" className={styles.image} />
      <h1>109年人口戶數及性別</h1>
    </header>
  );
};

export default Logo;