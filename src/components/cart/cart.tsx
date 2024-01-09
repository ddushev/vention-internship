import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import TableRow from "@/elements/tableRow/tableRow";

import TableHeading from "@/elements/tableHeading/tableHeading";
import style from "./cart.module.scss";

export default function Cart() {
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
              <TableRow>
                <td>Counter-Strike</td>
                <td>PC</td>
                <td>01/09/24</td>
                <td>1</td>
                <td>10</td>
              </TableRow>
              <TableRow>
                <td>Minecraft</td>
                <td>PC</td>
                <td>01/09/24</td>
                <td>1</td>
                <td>25.99</td>
              </TableRow>
            </tbody>
          </table>
        </SectionWrapper>
      </div>
    </Page>
  );
}
