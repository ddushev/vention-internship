import { useEffect, useState } from "react";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import TableHeading from "@/elements/tableHeading/tableHeading";

import { Game } from "@/types";

import TableData from "@/elements/tableData/tableData";
import Button from "@/elements/button/button";
import style from "./cart.module.scss";
import TableBodyRow from "./tableBodyRow/tableBodyRow";

export default function Cart() {
  const [gamesInCart, setGamesInCart] = useState<Game[]>([]);

  useEffect(() => {
    const games = localStorage.getItem("cart");
    if (games) {
      setGamesInCart(JSON.parse(games));
    }
  }, []);
  const headings = [
    { heading: "Name" },
    { heading: "Platform" },
    { heading: "Order Date" },
    { heading: "Amount" },
    { heading: "Price($)" },
  ];
  const tdPlaceholders = [1, 2, 3, 4, 5];
  return (
    <Page title="Cart">
      <div className={style.cartPageContainer}>
        <SectionWrapper heading="Cart page">
          <table className={style.table}>
            <thead>
              <tr className={style.tableRowHeading}>
                {headings.map((th) => (
                  <TableHeading key={th.heading}>{th.heading}</TableHeading>
                ))}
              </tr>
            </thead>
            <tbody>
              {gamesInCart.map((game) => (
                <TableBodyRow key={game.id} game={game} />
              ))}
              <tr className={style.tableRowRemove}>
                {tdPlaceholders.map((key) => (
                  <TableData key={key} />
                ))}
                <TableData>
                  <Button>Remove</Button>
                </TableData>
              </tr>
            </tbody>
          </table>
        </SectionWrapper>
      </div>
    </Page>
  );
}
