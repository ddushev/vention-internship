import style from "./tableHeading.module.scss";

export default function TableHeading({ children }: { children: string }) {
  return <th className={style.tableHeading}>{children}</th>;
}
