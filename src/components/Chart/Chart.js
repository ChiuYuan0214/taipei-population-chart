import Rows from "./Rows/Rows";
import Background from "./Background/Background";
import ChartBox from "./ChartBox/ChartBox";

import styles from "./Chart.module.css";

const Chart = ({ data }) => {
  const numbers = [];
  const rowsNum = [];
  let maxNum = 0;
  if (data) {
    for (const key in data) {
      numbers.push(data[key]);
    }
    maxNum = Math.max(...numbers);
    for (let i = 9; i > 0; i--) {
      rowsNum.push(Math.floor((i * maxNum) / 9));
    }
  }

  const [o_m, o_f, s_m, s_f] = numbers;

  return (
    <section className={styles.chart}>
      <Rows numbers={rowsNum} />
      <div className={styles.main}>
        <Background rowNum={rowsNum.length} />
        <ChartBox
          type="ordinary"
          maxNum={maxNum}
          maleNum={o_m}
          femaleNum={o_f}
        />
        <ChartBox
          type="single"
          maxNum={maxNum}
          maleNum={s_m}
          femaleNum={s_f}
        />
      </div>
    </section>
  );
};

export default Chart;
