import styles from "./ChartBar.module.css";

const ChartBar = ({ type, maxNum, num }) => {
  const classes = type === 'left' ? styles.leftBar : styles.rightBar;
  return (
    <div className={`${styles.container} ${classes}`}>
      <div
        className={styles.bar}
        style={{ height: `${(num / maxNum) * 100}%` }}
      >
        <span>{num}</span>
      </div>
    </div>
  );
};

export default ChartBar;
