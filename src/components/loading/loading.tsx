import { memo } from "react";

import cx from "classnames";
import loading from "images/loading.svg";

import styles from "./loading.module.scss";

const Loading = memo(({ isLazyLoading }: { isLazyLoading?: boolean | undefined }) => (
  <div className={cx({ [styles.lazyLoading]: isLazyLoading })}>
    <img src={loading} alt="loading-img" />
  </div>
));

export default Loading;
