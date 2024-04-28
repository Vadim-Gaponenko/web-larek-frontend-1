import { ensureElement } from "../utils/utils";
import { Component } from "./base/Component";

interface ISuccess {
  total: number;
}

interface ISuccessActions {
	onClick: () => void;
}

export class Success extends Component<ISuccess> {
  protected _close: HTMLElement;
  protected _total: HTMLElement;

  constructor(container: HTMLElement, actions?: ISuccessActions) {
    super(container);

    this._close = ensureElement<HTMLElement>('.order-success__close', container);
    this._total = ensureElement<HTMLElement>('.order-success__description', container);

    if (actions?.onClick) {
      this._close.addEventListener('click', actions.onClick);
    }
  }

  set total(total: number | string) {
    this.setText(this._total, `Списано ${total} синапсов`)
  }
}