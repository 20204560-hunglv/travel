import DefaultLayout from "../../components/Layout/DefaultLayout";
import Banner from "./Banner";
import Sale from "./Sale";

const Home = () => {
  return (
    <DefaultLayout>
      <main>
        <Banner />
        <Sale />
      </main>
    </DefaultLayout>
  );
};

export default Home;
