import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import currencyVnd from "../../utils/currencyVnd";

export default function CardHotel({ input }) {
  const theme = useTheme();
  const singleRoom = input?.singleRoom;
  const doubleRoom = input?.doubleRoom;

  return (
    <Card className="w-full" sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {input?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            className="py-3"
          >
            {input?.address}
          </Typography>
          <div className="flex space-x-24 w-full">
            <div>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {`Phòng đơn tối đa: ${singleRoom?.totalRooms || 0}`}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {`Phòng đơn còn trống: ${singleRoom?.roomsAvailable || 0}`}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {`Giá phòng đơn: ${currencyVnd(singleRoom?.price || 0)}`}
              </Typography>
            </div>
            <div>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {`Phòng đôi tối đa: ${doubleRoom?.totalRooms || 0}`}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {`Phòng đôi còn trống: ${doubleRoom?.roomsAvailable || 0}`}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {`Giá phòng đôi: ${currencyVnd(doubleRoom?.price || 0)}`}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={input?.image}
        alt="Live from space album cover"
      />
    </Card>
  );
}
