import DefaultLayout from "../../components/Layout/DefaultLayout";
import Banner from "./Banner";
import Favorite from "./Favorite";
import Premium from "./Premium";

const Home = () => {
  return (
    <DefaultLayout>
      <main>
        <Banner />
        <Premium />
        <Favorite />
      </main>
    </DefaultLayout>
  );
};

export default Home;
