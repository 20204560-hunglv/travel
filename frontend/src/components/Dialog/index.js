function Dialog({ message, onDialog, nameProduct }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={() => onDialog(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {message}
        </h3>
        <div className="mt-2">
          <p className="text-sm leading-5 text-gray-500">{nameProduct}</p>
        </div>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onDialog(true)}
            className="mr-1 inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Có
          </button>
          <button
            onClick={() => onDialog(false)}
            className="ml-1 inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Không
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
