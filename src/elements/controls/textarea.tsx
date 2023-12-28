import cx from "classnames";

import { WUPTextareaControl } from "web-ui-pack";

import BaseControl, { BaseControlProps } from "./baseControl";

import styles from "./text.m.scss";

WUPTextareaControl.$use(); // register control in the browser
// WUPTextareaControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<string, WUPTextareaControl, WUP.Textarea.Options> {}

export default class TextareaControl extends BaseControl<WUPTextareaControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return <wup-textarea {...props} class={cx(styles.ctrl, this.props.className)} />;
  }
}
