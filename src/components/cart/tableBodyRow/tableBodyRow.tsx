import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

import TableData from "@/elements/tableData/tableData";
import TableRow from "@/elements/tableRow/tableRow";

import { Game } from "@/types";
import createDate from "@/utils/createDate";

import { useState } from "react";

const selectStyles = {
  width: "200px",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  border: "1px solid white",
  textAlign: "left",
  "& .MuiSelect-select": { padding: "10px" },
  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
};

const menuProps = {
  slotProps: {
    paper: {
      style: {
        width: "200px",
        color: "white",
        backgroundColor: "black",
      },
    },
  },
};

export default function TableBodyRow({ game }: { game: Game }) {
  const [platform, setPlatform] = useState(game.platforms[0]);
  const onSelectChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };
  const currentDate = createDate();
  return (
    <TableRow>
      <TableData>{game.name}</TableData>
      <TableData>
        <Select onChange={onSelectChange} value={platform} sx={selectStyles} MenuProps={menuProps}>
          {game.platforms.map((p) => (
            <MenuItem key={p} value={p}>
              {p.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </TableData>
      <TableData>{currentDate}</TableData>
      <TableData>1</TableData>
      <TableData>{game.price}</TableData>
    </TableRow>
  );
}
