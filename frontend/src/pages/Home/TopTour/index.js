import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getTopTour} from "../../../services/TourServices";

const TopTour = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const tours = await getTopTour(3);
            setData(tours.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="pt-20 m-auto w-11/12">
            <h3 className="font-bold text-3xl text-185a9d">Tour mới nhất</h3>
            <div className="w-full overflow-x-hidden mt-3">
                <div className="flex justify-between relative left-0 duration-500">
                    {data.map((item) => (
                        <div
                            onClick={() => {
                                navigate(`/tour/${item._id}`);
                            }}
                            key={item._id}
                            className="w-1div3 cursor-pointer"
                        >
                            <img
                                className="rounded-xl  h-72"
                                src={item.main_image_url}
                                alt="img"
                            />
                            <p className="mt-2 font-bold text-center text-3a7bd5">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TopTour;
