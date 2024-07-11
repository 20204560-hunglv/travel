import { TextField } from "@mui/material";

export default function SearchModal({ value = "", onChange = () => {} }) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder="Tìm kiếm"
      size="small"
    />
  );
}
