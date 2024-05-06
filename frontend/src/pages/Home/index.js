import DefaultLayout from "../../components/Layout/DefaultLayout";
import Banner from "./Banner";
import Favorite from "./Favorite";
import Premium from "./Premium";

const Home = () => {
  return (
    <DefaultLayout>
      <div>
        <Banner />
        <Premium />
        <Favorite />
      </div>
    </DefaultLayout>
  );
};

export default Home;
