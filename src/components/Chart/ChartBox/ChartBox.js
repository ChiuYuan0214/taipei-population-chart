import ChartBar from "./ChartBar";

import styles from "./ChartBox.module.css";

const ChartBox = ({ type, maxNum, maleNum, femaleNum }) => {
  const title = type === "ordinary" ? "共同生活戶" : "獨立生活戶";
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ChartBar type="left" maxNum={maxNum} num={maleNum} />
        <ChartBar type="right" maxNum={maxNum} num={femaleNum} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default ChartBox;
