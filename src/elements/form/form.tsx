import { WUPFormElement } from "web-ui-pack";
import BaseWUP from "../baseWUP";
import styles from "./form.m.scss";

WUPFormElement.$use(); // register control in the browser
// WUPFormElement.$defaults.autoStore = true;

interface Props extends React.PropsWithChildren<Partial<WUP.Form.Options>> {
  className?: string;
  initModel?: WUPFormElement["$initModel"];
  model?: WUPFormElement["$model"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit?: (model: any, ev: WUP.Form.EventMap["$submit"]) => Promise<any>;
}

export default class Form extends BaseWUP<WUPFormElement, Props> {
  /* Apply React props for $options */
  updateOptions(nextProps: Props, isInit: boolean): void {
    super.updateOptions(nextProps, isInit);

    this.domEl.$onSubmit = (e) => nextProps.onSubmit?.call(this.domEl, e.detail.model, e);
    if (isInit || nextProps.model !== this.props.model) {
      this.domEl.$model = nextProps.model!; // update only if value changed
    }
    if (isInit || nextProps.initModel !== this.props.initModel) {
      this.domEl.$initModel = nextProps.initModel; // update only if value changed
    }
  }

  goRender(props: Record<string, unknown>): JSX.Element {
    return (
      <wup-form {...props} class={`${styles.form} ${props.className}`.trim()}>
        {this.props.children}
      </wup-form>
    );
  }
}
