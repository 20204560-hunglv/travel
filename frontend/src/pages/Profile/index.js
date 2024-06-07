import {useEffect, useState} from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import {getUserLocal} from "../../utils/LocalStorage";
import {ReactNotifications} from "react-notifications-component";
import {handleNotify} from "../../components/Notification/index";
import {
    get as getProfile,
    save as saveProfile,
} from "../../services/ProfileServices";
import {DatePicker} from "@mui/x-date-pickers";
import {
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import dayjs from "dayjs";

const Profile = () => {
    const userData = getUserLocal();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [numberPhone, setNumberPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState(null);

    const handleFullName = (event) => {
        setFullName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleNumberPhone = (event) => {
        setNumberPhone(event.target.value);
    };
    const handleAddress = (event) => {
        setAddress(event.target.value);
    };
    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const handleSave = async () => {
        await saveProfile(userData._id, {
            fullName,
            email,
            numberPhone,
            address,
            gender,
            birthDate: birthDate ? birthDate.format() : birthDate,
        })
            .then(() => {
                handleNotify("success", "Thành công", "Lưu thông tin thành công!");
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getProfile(userData._id)
            .then((response) => {
                if (response.data.fullName) setFullName(response.data.fullName);
                if (response.data.email) setEmail(response.data.email);
                if (response.data.numberPhone)
                    setNumberPhone(response.data.numberPhone);
                if (response.data.address) setAddress(response.data.address);
                if (response.data.gender) setGender(response.data.gender);
                if (response.data.birthDate)
                    setBirthDate(dayjs(response.data.birthDate));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [userData._id]);

    return (
        <DefaultLayout>
            <ReactNotifications/>
            <div className="min-h-screen py-5 font-mono bg-slate-200">
                <div className="max-w-2xl mx-auto bg-white rounded-xl">
                    <div className="inputs w-full p-6 mx-auto">
                        <h2 className="text-2xl text-center text-gray-900">
                            Thông tin tài khoản
                        </h2>
                        <div className="mt-6 pt-4">
                            <div className="flex flex-wrap mx-3 mb-6">
                                <div className="w-full md:w-full px-3 mb-6 grid grid-cols-4 gap-4">
                                    <p className="block uppercase tracking-wide text-gray-700 text-xs content-center text-end">
                                        Tên tài khoản
                                    </p>
                                    <p className="col-span-3  block w-5/6 bg-white text-gray-900  rounded-md py-3 leading-tight focus:outline-none  focus:border-gray-500">
                                        {userData.username}
                                    </p>
                                </div>
                                <div className="w-full md:w-full px-3 mb-6 grid grid-cols-4 gap-4">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs content-center text-end"
                                        htmlFor="full-name"
                                    >
                                        Họ và tên
                                    </label>
                                    <TextField
                                        className="col-span-3 w-5/6"
                                        id="full-name"
                                        variant="outlined"
                                        type="text"
                                        placeholder="Họ và tên"
                                        value={fullName}
                                        onChange={handleFullName}
                                    />
                                </div>
                                <div className="w-full md:w-full px-3 mb-6 grid grid-cols-4 gap-4">
                                    <label
                                        className="content-center text-end block uppercase tracking-wide text-gray-700 text-xs"
                                        htmlFor="email-input"
                                    >
                                        Email
                                    </label>
                                    <TextField
                                        className="col-span-3 w-5/6"
                                        id="email-input"
                                        variant="outlined"
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleEmail}
                                    />
                                </div>
                                <div className="w-full md:w-full px-3 mb-6 grid grid-cols-4 gap-4">
                                    <label
                                        className="content-center text-end block uppercase tracking-wide text-gray-700 text-xs"
                                        htmlFor="phone-input"
                                    >
                                        SĐT
                                    </label>
                                    <TextField
                                        className="col-span-3 w-5/6"
                                        id="phone-input"
                                        variant="outlined"
                                        type="text"
                                        placeholder="Số điện thoại"
                                        value={numberPhone}
                                        onChange={handleNumberPhone}
                                    />
                                </div>
                                <div className="w-full md:w-full px-3 mb-6 grid grid-cols-4 gap-4">
                                    <label
                                        className="block content-center text-end uppercase tracking-wide text-gray-700 text-xs"
                                        htmlFor="address-input"
                                    >
                                        Địa chỉ
                                    </label>
                                    <TextField
                                        className="col-span-3 w-5/6"
                                        id="address-input"
                                        variant="outlined"
                                        type="text"
                                        placeholder="Địa chỉ"
                                        value={address}
                                        onChange={handleAddress}
                                    />
                                </div>
                                <div className="w-full md:w-full px-3 grid grid-cols-4 gap-4">
                                    <p className="content-center text-end block uppercase tracking-wide text-gray-700 text-xs">
                                        Giới tính
                                    </p>
                                    <div className="flex col-span-3">
                                        <RadioGroup
                                            id="radio-buttons-gender"
                                            row
                                            aria-labelledby="radio-buttons-gender"
                                            name="gender-radio-buttons-group"
                                            value={gender}
                                            onChange={handleGender}
                                        >
                                            <FormControlLabel
                                                value="nu"
                                                control={<Radio/>}
                                                label="Nữ"
                                            />
                                            <FormControlLabel
                                                value="nam"
                                                control={<Radio/>}
                                                label="Nam"
                                            />
                                            <FormControlLabel
                                                value="khac"
                                                control={<Radio/>}
                                                label="Khác"
                                            />
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="w-full md:w-full mt-4 px-3 grid grid-cols-4 gap-4">
                                    <div className="content-center text-end">
                                        <p className="uppercase tracking-wide text-gray-700 text-xs">
                                            Ngày sinh
                                        </p>
                                    </div>
                                    <div className="content-center h-10 text-404040 col-span-3">
                                        <DatePicker
                                            format="DD/MM/YYYY"
                                            value={birthDate}
                                            onChange={(newDate) => setBirthDate(newDate)}
                                        />
                                    </div>
                                </div>
                                <div className="personal w-full  pt-4">
                                    <div className="flex justify-end">
                                        <Button
                                            sx={{
                                                py: 2,
                                                px: 4,
                                            }}
                                            variant="contained"
                                            onClick={() => handleSave()}
                                        >
                                            Lưu
                                        </Button>
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
