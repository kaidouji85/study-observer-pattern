import {CharacterProcessing} from "./character-processing.js";

/**
 * 文字加工 末尾に「なのだよ」を追加する
 *
 * @class AddSuffix
 * @property {CharacterProcessing} _view ビュー
 * @property {String => void} _onResultChange 文字加工結果が変更された場合に呼ばれるコールバック関数
 */
export class AddSuffix {
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
      label: '末尾追加',
      onSubmitClick: this._onSubmitClick.bind(this)
    });
    this._onResultChange = onResultChange;
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
    this._onResultChange(addSuffix);
  }
}