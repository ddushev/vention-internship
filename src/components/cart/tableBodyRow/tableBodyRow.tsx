import { MenuItem, Select } from "@mui/material";

import TableData from "@/elements/tableData/tableData";
import TableRow from "@/elements/tableRow/tableRow";

import { Game } from "@/types";
import createDate from "@/utils/createDate";

import style from "./tableBodyRow.module.scss";

export default function TableBodyRow({ game }: { game: Game }) {
  const currentDate = createDate();
  return (
    <TableRow>
      <TableData>{game.name}</TableData>
      <TableData>
        <Select className={style.muiSelect} value="pc">
          <MenuItem value="pc">PC</MenuItem>
          <MenuItem value="ps5">PS5</MenuItem>
          <MenuItem value="xbox">XBOX</MenuItem>
        </Select>
      </TableData>
      <TableData>{currentDate}</TableData>
      <TableData>1</TableData>
      <TableData>{game.price}</TableData>
    </TableRow>
  );
}
