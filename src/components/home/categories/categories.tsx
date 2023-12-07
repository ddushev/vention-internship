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
      <Link className={styles.categoriesLink} to={`${PATHS.PRODUCTS}/pc`}>
        <li className={styles.categoryCardBox}>
          <img src={pc} alt="pc" />
          <h4 className={styles.categoryTitle}>PC</h4>
        </li>
      </Link>
      <Link className={styles.categoriesLink} to={`${PATHS.PRODUCTS}/ps5`}>
        <li className={styles.categoryCardBox}>
          <img src={ps5} alt="ps5" />
          <h4 className={styles.categoryTitle}>Playstation 5</h4>
        </li>
      </Link>
      <Link className={styles.categoriesLink} to={`${PATHS.PRODUCTS}/xbox`}>
        <li className={styles.categoryCardBox}>
          <img src={xbox} alt="xbox" />
          <h4 className={styles.categoryTitle}>XBox One 5</h4>
        </li>
      </Link>
    </SectionWrapper>
  );
}
