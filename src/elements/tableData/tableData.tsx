import style from "./tableData.module.scss";

export default function TableData({ children }: { children?: string | React.ReactNode }) {
  return <td className={style.tableData}>{children}</td>;
}
