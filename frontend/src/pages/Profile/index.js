import { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import getUserLocal from '../../utils/getUserLocal'

const Profile = () => {
  const storedUserDataString = getUserLocal()
  const navigate = useNavigate();
  const handleToPass = () => {
    navigate("/change-pass");
  };
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [address,setAddress] = useState('')
  const [gender, setGender] = useState('')
  const handleFullName = (event)=>{
    setFullName(event.target.value)
  }
  const handleEmail = (event)=>{
    setEmail(event.target.value)
  }
  const handleAddress = (event)=>{
    setAddress(event.target.value)
  }
  const handleGender = (event)=>{
    setGender(event.target.value)
  }
  const [user,setUser] = useState({
  });
  const handleSave = () => {
    console.log({fullName, email, address, gender})
  }
  useEffect(() => {
    if (storedUserDataString) {
      axios
        .get(`/api/v1/user/${storedUserDataString.username}`)
        .then((response) => {
          setUser(response.data)
          if(response.data.fullname) setFullName(response.data.fullname)
          if(response.data.email) setEmail(response.data.email)
          if(response.data.address) setAddress(response.data.address)
          if(response.data.gender) setGender(response.data.gender)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  return (
    <DefaultLayout>
      <div className="bg-gray-200 min-h-screen pt-2 font-mono">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-center text-gray-900">Thông tin tài khoản</h2>
            <div className="flex items-center justify-between mt-5">
              <p className="text-gray-900">{`Hello ${storedUserDataString.username}`}</p>
              <div>
                <button
                  onClick={handleToPass}
                  className="appearance-none px-2 py-1 shadow-sm border border-gray-400 rounded-md bg-blue-500 hover:bg-blue-700 text-white "
                >
                  Đổi mật khẩu
                </button>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-400 pt-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Họ và tên
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="text"
                    placeholder="Họ và tên"
                    value={fullName}
                    onChange={handleFullName}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Địa chỉ
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="text"
                    placeholder="Địa chỉ"
                    value={address}
                    onChange={handleAddress}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Giới tính
                  </label>
                  <div className="flex">
                    <div className="flex items-center mb-4">
                      <input
                        id="gender-radio-1"
                        type="radio"
                        value="nam"
                        name="gender-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        onChange={handleGender}
                        checked={gender === 'nam'}
                      />
                      <label
                        htmlFor="gender-radio-1"
                        className="ms-2 text-sm font-medium text-gray-900"
                      >
                        Nam
                      </label>
                    </div>
                    <div className="flex items-center mb-4 ml-4">
                      <input
                        id="gender-radio-2"
                        type="radio"
                        value="nu"
                        checked={gender === 'nu'}
                        onChange={handleGender}
                        name="gender-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="gender-radio-2"
                        className="ms-2 text-sm font-medium text-gray-900"
                      >
                        Nữ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="personal w-full border-t border-gray-400 pt-4">
                  <div className="flex justify-end">
                    <button 
                    onClick={() => handleSave()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Profile;
