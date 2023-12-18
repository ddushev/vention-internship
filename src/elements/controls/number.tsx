import { WUPNumberControl } from "web-ui-pack";

import BaseControl, { BaseControlProps } from "./baseControl";

import styles from "./text.m.scss";

WUPNumberControl.$use(); // register control in the browser
// WUPNumberControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<string, WUPNumberControl, WUP.Number.Options> {}

export default class NumberControl extends BaseControl<WUPNumberControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return <wup-num {...props} class={`${styles.ctrl} ${props.className}`.trim()} />;
  }
}
