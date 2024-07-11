import { Typography } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export default function NotFound() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <PriorityHighIcon color="error" fontSize="large" />
      <Typography color={"Highlight"} variant="h4">Không tìm thấy</Typography>
    </div>
  );
}
