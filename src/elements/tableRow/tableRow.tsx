import style from "./tableRow.module.scss";

export default function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className={style.tableRow}>{children}</tr>;
}
