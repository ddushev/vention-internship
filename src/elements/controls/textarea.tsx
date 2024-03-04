import cx from "classnames";

import { WUPTextareaControl } from "web-ui-pack";

import BaseControl, { BaseControlProps } from "./baseControl";

import styles from "./controls.m.scss";
import InlineLabel from "../inlineLabel/inlineLabel";

WUPTextareaControl.$use(); // register control in the browser
// WUPTextareaControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<string, WUPTextareaControl, WUP.Textarea.Options> {}

export default class TextareaControl extends BaseControl<WUPTextareaControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    if (this.props.inlineLabelText) {
      return (
        <InlineLabel label={this.props.inlineLabelText}>
          <wup-textarea {...props} class={cx(styles.ctrl, this.props.className)} />
        </InlineLabel>
      );
    }
    return <wup-textarea {...props} class={cx(styles.ctrl, this.props.className)} />;
  }
}
