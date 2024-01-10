import { useEffect, useState } from "react";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import TableRow from "@/elements/tableRow/tableRow";
import TableHeading from "@/elements/tableHeading/tableHeading";

import { Game } from "@/types";

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
  return (
    <Page title="Cart">
      <div className={style.cartPageContainer}>
        <SectionWrapper heading="Cart page">
          <table className={style.table}>
            <thead>
              <TableRow>
                {headings.map((th) => (
                  <TableHeading key={th.heading}>{th.heading}</TableHeading>
                ))}
              </TableRow>
            </thead>
            <tbody>
              {gamesInCart.map((game) => (
                <TableBodyRow key={game.id} game={game} />
              ))}
            </tbody>
          </table>
        </SectionWrapper>
      </div>
    </Page>
  );
}
