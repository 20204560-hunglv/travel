import {Box, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Search = ({ handleClose }) => {
  return (
    <div className="relative w-3/4">
      <input
        className="px-8 appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-1976D2 focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Tìm kiếm..."
      />
      <Box className="absolute right-0 inset-y-0 flex items-center">
        <IconButton onClick={() => handleClose()}>
          <CloseIcon />
        </IconButton>
      </Box>

      <div className="absolute left-0 inset-y-0 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};
export default Search;
