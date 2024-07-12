import {
  Box,
  Button,
  Dialog,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { getAllByAdmin } from "../../../services/TourServices";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import { formatDate } from "./../../../utils/resolveTime";
import SearchModal from "../../Search/SearchModal";

const ChooseTourDialog = (props) => {
  const { onClose, open, setOpen, checkInput } = props;
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(checkInput);
  const [search, setSearch] = useState("");

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

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
      const response = await getAllByAdmin();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const visibleData = useMemo(() => {
    if (search === "") return data;
    const dataSearch = data.filter((item) => {
      const content = `${item.name} - ${formatDate(item?.start_time)}`;
      return content.includes(search);
    });
    return dataSearch;
  }, [search, data]);

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md">
      <Box className="p-5">
        <Typography variant="h6">Danh sách tour</Typography>
        <div className="flex justify-end">
          <SearchModal onChange={handleChangeSearch} value={search} />
        </div>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {visibleData.map((elem, index) => {
            const labelId = `checkbox-list-label-${index}`;
            const currentIndex = checked.findIndex((value) => {
              return elem._id === value._id;
            });

            return (
              <ListItem
                key={elem._id}
                // secondaryAction={
                //   <IconButton edge="end" aria-label="comments">
                //     <VisibilityIcon />
                //   </IconButton>
                // }
                disablePadding
              >
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
                  <ListItemText
                    id={labelId}
                    primary={`${elem.name} - ${formatDate(elem?.start_time)}`}
                  />
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
  );
};
export default ChooseTourDialog;
