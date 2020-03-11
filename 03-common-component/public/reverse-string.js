import {CharacterProcessing} from "./character-processing.js";

/**
 * 文字加工 反転
 *
 * @class ReverseString
 * @property {CharacterProcessing} _view ビュー
 */
export class ReverseString {
  /**
   * コンストラクタ
   *
   * @constructor
   * @param root 本コンポネントをバインドするルート要素
   */
  constructor(root) {
    this._view = new CharacterProcessing({
      root: root,
      label: '文字反転',
      onSubmitClick: this._onSubmitClick.bind(this)
    });
  }

  /**
   * 実行ボタンがクリックされた際のイベント
   *
   * @param value 入力内容
   * @private
   */
  _onSubmitClick(value) {
    const reverse = value.split('')
      .reverse()
      .join('');
    this._view.update(reverse);
  }
}