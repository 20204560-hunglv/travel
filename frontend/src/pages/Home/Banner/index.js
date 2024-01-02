import { useState } from "react";
import styles from "./style.module.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const Banner = () => {
  const handleToSearch = () => {
    window.location.href = "/search";
  };
  const [date, onChange] = useState(new Date());
  return (
    <div className={styles.search}>
      <div className={styles.searchPic}></div>
      <div className={styles.searchChoose}>
        <nav>
          <ul className={styles.searchChooseNav}>
            <li
              className={`${styles.searchChooseNavLi} ${styles.searchChooseNavLiChoose}`}
            >
              Tour du lịch
            </li>
            <li className={styles.searchChooseNavLi}>Khách sạn</li>
            <li className={styles.searchChooseNavLi}>Tra cứu booking</li>
          </ul>
        </nav>
        <div className={styles.searchChooseContent}>
          <p className={styles.searchChooseP}>Tìm kiếm tour phù hợp</p>
          <div className={styles.searchChooseFilter}>
            <div className=" flex items-center justify-around py-1 px-5 border-4 border-yellow-200 rounded-2xl h-20">
              <i className="fa-solid fa-location-dot mr-2"></i>
              {/* <div>
                  <span>Điểm đi</span>
                  <p>TP. Hồ Chí Minh</p>
                </div> */}
              <div>
                <label for="countriesFrom" class=" ml-4 mb-2 text-sm font-medium">
                  Điểm đi
                </label>
                <select
                  id="countriesFrom"
                  class="bg-gray-50 outline-none border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <i className={`fa-solid fa-right-left ${styles.faRightLeft}`}></i>
            <div className=" flex items-center justify-between py-1 px-7 border-4 border-yellow-200 rounded-2xl h-20">
              <i className="fa-solid fa-location-dot mr-2"></i>
              <div>
                <label
                  for="countriesTo"
                  class="mb-2 ml-4 text-sm font-medium"
                >
                  Điểm đến
                </label>
                <select
                  id="countriesTo"
                  class="bg-gray-50 outline-none border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className="py-1 px-7 border-4 border-yellow-200 rounded-2xl h-20">
              <div>
                <span>Ngày đi</span>
              </div>
              <div>
                <DatePicker onChange={onChange} value={date} />
              </div>
            </div>
            <div
              className=" flex items-center justify-around py-1 px-7 border-4 border-yellow-200 rounded-2xl h-20"
            >
              <div>
                <label
                  for="number-input"
                  className="mb-2 text-sm font-medium text-gray-900"
                >
                  Số ngày
                </label>
                <input
                  type="number"
                  id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5"
                  placeholder="0"
                  min={0}
                />
              </div>
            </div>
            <i
              onClick={handleToSearch}
              className={`fa-solid fa-right-long ${styles.faRightLong}`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
