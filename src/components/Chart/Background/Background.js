import styles from "./Background.module.css";

const Background = ({ rowNum }) => {
  const background = [];
  for (let i = rowNum; i > 0; i--) {
    background.push(
      <div
        key={i}
        className={`${styles.row} ${i === 1 ? styles.lastRow : ""}`}
        style={{ height: `${100 / rowNum}%` }}
      ></div>
    );
  }

  return <div className={styles.container}>{background}</div>;
};

export default Background;
