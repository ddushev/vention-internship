import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

import TableData from "@/elements/tableData/tableData";
import TableRow from "@/elements/tableRow/tableRow";

import { Game } from "@/types";
import createDate from "@/utils/createDate";

import { useState } from "react";
import style from "./tableBodyRow.module.scss";

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
        <Select
          onChange={onSelectChange}
          className={style["MuiSelect-select"]}
          value={platform}
          sx={{
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": { border: "0" },
          }}
          MenuProps={{
            slotProps: {
              paper: {
                style: {
                  backgroundColor: "black",
                  color: "white",
                  width: "200px",
                },
              },
            },
          }}
        >
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
