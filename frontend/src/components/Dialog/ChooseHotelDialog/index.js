import {
  Box,
  Button,
  Dialog,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { get as getAll } from "../../../services/HotelServices";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import CardHotel from "../../Card/CardHotel";

const ChooseHotelDialog = (props) => {
  const { onClose, open, setOpen, checkInput } = props;
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(checkInput);

  const handleToggle = (value) => () => {
    const currentIndex = checked.findIndex((elem) => {
      return elem._id === value._id;
    });
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await getAll();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <Dialog
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        open={open}
      >
        <Box className="p-5">
          <Typography variant="h6">Danh sách khách sạn</Typography>
          <List
            sx={{
              width: "100%",
              // maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            {data.map((elem, index) => {
              const labelId = `checkbox-list-label-${index}`;
              const currentIndex = checked.findIndex((value) => {
                return elem._id === value._id;
              });

              return (
                <ListItem key={elem._id} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(elem)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={currentIndex !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    {/* <ListItemText
                    id={labelId}
                    primary={`${elem.fullName} - ${elem?.email}`}
                  /> */}
                    <CardHotel input={elem} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <div className="flex justify-end">
            <Button
              onClick={() => {
                onClose(checked);
                setOpen(false);
              }}
            >
              Thêm
            </Button>
          </div>
        </Box>
      </Dialog>
    </div>
  );
};
export default ChooseHotelDialog;
