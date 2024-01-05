import pc from "images/categories/computer.svg";
import ps5 from "images/categories/playstation.svg";
import xbox from "images/categories/xbox.svg";

import { Link } from "react-router-dom";

import PATHS from "@/utils/paths";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";

import styles from "./categories.module.scss";

export default function Categories() {
  return (
    <SectionWrapper heading="Categories">
      {[
        { path: PATHS.PC, src: pc, alt: "pc", text: "PC" },
        { path: PATHS.PS5, src: ps5, alt: "ps5", text: "Playstation 5" },
        { path: PATHS.XBOX, src: xbox, alt: "xbox", text: "XBox One" },
      ].map((link) => (
        <Link className={styles.categoriesLink} to={link.path}>
          <li className={styles.categoryCardBox}>
            <img className={styles.categoryIcon} src={link.src} alt={link.alt} />
            <h4 className={styles.categoryTitle}>{link.text}</h4>
          </li>
        </Link>
      ))}
    </SectionWrapper>
  );
}
