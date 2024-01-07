import DefaultLayout from "../../components/Layout/DefaultLayout";
import Filter from "./Filter";
import Result from "./Result";

const Search = () => {
  return (
    <DefaultLayout>
      <div className='flex min-h-screen'>
        <div className='bg-gray-100 w- grow pt-12'>
          <Filter />
        </div>
        <div className='max-w-6xl'>
          <Result />
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Search;
