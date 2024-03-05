import cx from "classnames";
import loading from "images/loading.svg";

import styles from "./loading.module.scss";

export default function Loading({ isLazyLoading }: { isLazyLoading?: boolean | undefined }) {
  return (
    <div className={cx({ [styles.lazyLoading]: isLazyLoading })}>
      <img src={loading} alt="loading-img" />
    </div>
  );
}
