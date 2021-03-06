import {CharacterProcessing} from "./character-processing.js";

/**
 * 文字加工 反転
 *
 * @class ReverseString
 * @property {CharacterProcessing} _view ビュー
 * @property {String => void} _onResultChange 文字加工結果が変更された場合に呼ばれるコールバック関数
 */
export class ReverseString {
  /**
   * コンストラクタ
   *
   * @constructor
   * @param {HTMLElement} root 本コンポネントをバインドするルート要素
   * @param {String => value} onResultChange 文字加工結果が変更された場合に呼ばれるコールバック関数
   */
  constructor(root, onResultChange) {
    this._view = new CharacterProcessing({
      root: root,
      label: '文字反転',
      onSubmitClick: this._onSubmitClick.bind(this)
    });
    this._onResultChange = onResultChange;
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
    this._onResultChange(reverse);
  }
}