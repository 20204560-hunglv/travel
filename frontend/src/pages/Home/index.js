import DefaultLayout from "../../components/Layout/DefaultLayout";
import Banner from "./Banner";
import Sale from "./Sale";
import Favorite from "./Favorite";
import Premium from "./Premium";

const Home = () => {
  return (
    <DefaultLayout>
      <main style={{ overflowX: "hidden" }}>
        <Banner />
        <Premium />
        <Sale />
        <Favorite />
      </main>
    </DefaultLayout>
  );
};

export default Home;
