import DefaultLayout from "../../components/Layout/DefaultLayout";
import Filter from "./Filter";
import Result from "./Result";
import styles from "./style.module.css";
const Search = () => {
  return (
    <DefaultLayout>
      <div className={styles.contain}>
        <div className={styles.filter}>
          <Filter />
        </div>
        <div className={styles.result}>
          <Result />
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Search;
