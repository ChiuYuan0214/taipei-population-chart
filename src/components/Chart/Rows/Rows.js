import styles from "./Rows.module.css";

const Rows = ({ numbers }) => {
  const numberList = numbers ? [...numbers, 0] : [];

  console.log("numberList:", numberList);
  return (
    <div className={styles.container}>
      {numberList.map((num) => (
        <div
          key={num}
          style={{ height: `${100 / numbers.length}%` }}
          className={styles.number}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default Rows;
