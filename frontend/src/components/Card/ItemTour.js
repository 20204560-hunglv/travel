import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { truncateString } from "../../utils/shortenString";
import FavoriteIcon from "@mui/icons-material/Favorite";
import currencyVnd from "../../utils/currencyVnd";
import { formatDate } from "../../utils/resolveTime";

export default function ItemTour({ item }) {
  const navigate = useNavigate();

  const handleToBooking = () => {
    navigate(`/tour/${item._id}`);
  };

  return (
    <Card className="h-80 flex flex-col">
      <CardMedia
        component="img"
        sx={{
          height: "50%",
        }}
        image={item.main_image_url}
        alt={item.main_image_url}
      />
      <div onClick={() => handleToBooking()} className="cursor-pointer">
        <CardContent className="h-28">
          <Typography variant="h6" component="div">
            {truncateString(item.name)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatDate(item.start_time)}
          </Typography>
        </CardContent>
      </div>
      <CardActions className="flex justify-between">
        <Typography>{`${item.favorites || 0} lượt thích`}</Typography>
        <Typography className="text-red-500" variant="h6" component="p">
          {currencyVnd(item.prices)}
        </Typography>
      </CardActions>
    </Card>
  );
}
