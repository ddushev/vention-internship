import cx from "classnames";
import { WUPTextControl } from "web-ui-pack";

import BaseControl, { BaseControlProps } from "./baseControl";

import styles from "./textWithLabel.module.scss";

WUPTextControl.$use(); // register control in the browser
// WUPTextControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<string, WUPTextControl, WUP.Text.Options> {}

export default class TextControlWithLabel extends BaseControl<WUPTextControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return (
      <div className={styles.controlWrapper}>
        <label className={styles.labelText}>{this.props.label}</label>
        <wup-text {...props} class={cx(styles.ctrl, this.props.className)} />
      </div>
    );
  }
}
