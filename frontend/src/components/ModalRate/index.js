import {useState} from "react";
import StarRatings from "react-star-ratings";

function ModalRate({ message, onDialog, nameProduct, rated, setRating }) {
  const [rate, setRate] = useState(rated ? parseInt(rated) : 0);
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center"
      onClick={() => onDialog(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center justify-around bg-white w-1/5 h-1/4 rounded-md"
      >
        <h3 className="text-lg font-medium text-gray-900">{message}</h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">{nameProduct}</p>
        </div>
        <div>
          <StarRatings
            rating={rate}
            starRatedColor="yellow"
            starHoverColor="yellow"
            changeRating={(res) => setRate(res)}
            numberOfStars={5}
            name="rating"
            starDimension="30px"
          />
        </div>
        <div className="flex items-center justify-center mt-2 w-full">
          <button
            onClick={() => {
              // console.log(rate)
              setRating(rate);
              onDialog(rate);
            }}
            className="mr-1 rounded-md border border-transparent px-4 py-2 bg-green-600 text-base font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150  sm:text-sm sm:leading-5"
          >
            Đánh giá
          </button>
          <button
            onClick={() => onDialog(false)}
            className="ml-1 rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalRate;
