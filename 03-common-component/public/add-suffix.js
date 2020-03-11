import {CharacterProcessing} from "./character-processing.js";

/**
 * 文字加工 末尾に「なのだよ」を追加する
 *
 * @class AddSuffix
 * @property {CharacterProcessing} _view ビュー
 */
export class AddSuffix {
  /**
   * コンストラクタ
   *
   * @constructor
   * @param {HTMLElement} root 本コンポネントをバインドするルート要素
   */
  constructor(root) {
    this._view = new CharacterProcessing({
      root: root,
      onSubmitClick: this._onSubmitClick.bind(this)
    })
  }

  /**
   * 実行ボタンをクリックした際のイベント
   *
   * @param value 入力内容
   * @private
   */
  _onSubmitClick(value) {
    const addSuffix = `${value} なのだよ`;
    this._view.update(addSuffix);
  }
}