import cx from "classnames";
import { WUPRadioControl } from "web-ui-pack";

import BaseControl, { BaseControlProps } from "../baseControl";

import styles from "./radio.m.scss";

WUPRadioControl.$use(); // register control in the browser
// WUPSelectControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<string, WUPRadioControl, WUP.Radio.Options> {}

export default class RadioControl extends BaseControl<WUPRadioControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return <wup-radio {...props} class={cx(styles.ctrl, this.props.className)} />;
  }
}
