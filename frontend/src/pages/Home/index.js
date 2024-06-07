import DefaultLayout from "../../components/Layout/DefaultLayout";
import Banner from "./Banner";
import Favorite from "./Favorite";
import TopTour from "./TopTour";

const Home = () => {
    return (
        <DefaultLayout>
            <div>
                <Banner/>
                <TopTour/>
                <Favorite/>
            </div>
        </DefaultLayout>
    );
};

export default Home;
