import { useState } from "react";
import { Checkbox, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";

import { setCartState } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import createDate from "@/utils/createDate";

import TableData from "@/elements/tableData/tableData";
import TableRow from "@/elements/tableRow/tableRow";

import { Game } from "@/types";
import { checkBoxStyles, selectStyles } from "@/mui/muiStyles";
import { menuProps, numberInputSlotProps } from "@/mui/muiProps";

export default function TableBodyRow({
  game,
  setSelectedGames,
}: {
  game: Game;
  setSelectedGames: React.Dispatch<React.SetStateAction<Game[]>>;
}) {
  const [platform, setPlatform] = useState(game.platforms[0]);
  const [amount, setAmount] = useState(1);
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
  const gamesInCart = useAppSelector((state) => state.cartReduxState);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };
  const handleNumberInputChange = (
    _event: React.FocusEvent<HTMLInputElement, Element> | React.PointerEvent<Element> | React.KeyboardEvent<Element>,
    value: number | undefined,
  ) => {
    if (value !== amount) {
      const updatedGamesInCart = gamesInCart.map((gameInCartState) =>
        gameInCartState.name === game.name ? { ...game, amount: value || 1 } : gameInCartState,
      );
      dispatch(setCartState(updatedGamesInCart));
    }

    setAmount(value || 1);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setSelectedGames((state) => [...state, game]);
    } else {
      setSelectedGames((state) => state.filter((gameInSelectState) => gameInSelectState.name !== game.name));
    }
  };

  const currentDate = createDate();
  return (
    <TableRow>
      <TableData>{game.name}</TableData>
      <TableData>
        <Select onChange={handleSelectChange} value={platform} sx={selectStyles} MenuProps={menuProps}>
          {game.platforms.map((p) => (
            <MenuItem key={p} value={p}>
              {p.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </TableData>
      <TableData>{currentDate}</TableData>
      <TableData>
        <NumberInput onChange={handleNumberInputChange} value={amount} slotProps={numberInputSlotProps} min={1} max={10} />
      </TableData>
      <TableData>{game.price}</TableData>
      <TableData>
        <Checkbox onChange={handleCheckboxChange} checked={checked} sx={checkBoxStyles} />
      </TableData>
    </TableRow>
  );
}
