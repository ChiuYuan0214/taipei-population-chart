import styles from "./Filter.module.css";

const Filter = ({ changeTarget, target }) => {
  const selectHandler = (e) => {
    changeTarget(e.target.value);
  };
  
  return (
    <section className={styles.filter}>
      <label htmlFor="district">地區</label>
      <select id="disctric" value={target} onChange={selectHandler}>
        <option value="中正區">中正區</option>
        <option value="大同區">大同區</option>
        <option value="中山區">中山區</option>
        <option value="松山區">松山區</option>
        <option value="大安區">大安區</option>
        <option value="萬華區">萬華區</option>
        <option value="信義區">信義區</option>
        <option value="士林區">士林區</option>
        <option value="北投區">北投區</option>
        <option value="內湖區">內湖區</option>
        <option value="南港區">南港區</option>
        <option value="文山區">文山區</option>
      </select>
    </section>
  );
};

export default Filter;
