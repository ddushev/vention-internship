import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";

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
  borderRadius: "0",
  "& .MuiSelect-select": { padding: "10px" },
  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
  "& .MuiSelect-icon": { color: "white" },
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

const numberInputSlotProps = {
  input: {
    style: {
      maxWidth: "100px",
      padding: "10px",
      border: "1px solid white",
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  },
  decrementButton: {
    style: {
      display: "none",
    },
  },
  incrementButton: {
    style: {
      display: "none",
    },
  },
};

export default function TableBodyRow({ game }: { game: Game }) {
  const [platform, setPlatform] = useState(game.platforms[0]);
  const [amount, setAmount] = useState(1);
  const onSelectChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };
  const onNumberInputChange = (
    _event: React.FocusEvent<HTMLInputElement, Element> | React.PointerEvent<Element> | React.KeyboardEvent<Element>,
    value: number | undefined,
  ) => {
    setAmount(value || 1);
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
      <TableData>
        <NumberInput onChange={onNumberInputChange} value={amount} slotProps={numberInputSlotProps} />
      </TableData>
      <TableData>{game.price}</TableData>
    </TableRow>
  );
}
