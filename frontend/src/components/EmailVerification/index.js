import * as React from "react";

const EmailVerification = ({ email }) => {
  const [code, setCode] = React.useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  const handleSubmit = () => {
    const otp = code.one + code.two + code.three + code.four;
    console.log({ otp });
  };
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Xác thực Email</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>`Chúng tôi đã gửi mã đến email {email}`</p>
              </div>
            </div>

            <div>
              <div>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        value={code.one}
                        onChange={(event) =>
                          setCode((pre) => {
                            return {
                              ...pre,
                              one: event.target.value,
                            };
                          })
                        }
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        value={code.two}
                        onChange={(event) =>
                          setCode((pre) => {
                            return {
                              ...pre,
                              two: event.target.value,
                            };
                          })
                        }
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        value={code.three}
                        onChange={(event) =>
                          setCode((pre) => {
                            return {
                              ...pre,
                              three: event.target.value,
                            };
                          })
                        }
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        value={code.four}
                        onChange={(event) =>
                          setCode((pre) => {
                            return {
                              ...pre,
                              four: event.target.value,
                            };
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        onClick={() => handleSubmit()}
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Xác thực tài khoản
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Không nhận được mã?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gửi lại
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailVerification;
