import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import TableRow from "@/elements/tableRow/tableRow";
import TableHeading from "@/elements/tableHeading/tableHeading";
import TableData from "@/elements/tableData/tableData";

import { MenuItem, Select } from "@mui/material";
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
                <TableData>Counter-Strike</TableData>
                <TableData>
                  <Select className={style.muiSelect} value="pc">
                    <MenuItem value="pc">PC</MenuItem>
                    <MenuItem value="ps5">PS5</MenuItem>
                    <MenuItem value="xbox">XBOX</MenuItem>
                  </Select>
                </TableData>
                <TableData>01/09/24</TableData>
                <TableData>1</TableData>
                <TableData>10</TableData>
              </TableRow>
              <TableRow>
                <TableData>Minecraft</TableData>
                <TableData>
                  <Select className={style.muiSelect} value="pc">
                    <MenuItem value="pc">PC</MenuItem>
                    <MenuItem value="ps5">PS5</MenuItem>
                    <MenuItem value="xbox">XBOX</MenuItem>
                  </Select>
                </TableData>
                <TableData>01/09/24</TableData>
                <TableData>1</TableData>
                <TableData>25.99</TableData>
              </TableRow>
            </tbody>
          </table>
        </SectionWrapper>
      </div>
    </Page>
  );
}
