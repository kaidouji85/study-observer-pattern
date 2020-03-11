import {CharacterProcessing} from './character-processing.js';

window.addEventListener('load', () => {
  const app = new App();
});

/**
 * アプリ全体を管理する
 *
 * @class App
 * @property {CharacterProcessing} _reverseString 文字反転コンポネントのビュー
 */
class App {
  /**
   * コンストラクタ
   *
   * @constructor
   */
  constructor() {
    const body = window.document.body || document.createElement('body');
    this._reverseString = new CharacterProcessing({
      root: body,
      onSubmitClick: this._onReverseSubmitClick.bind(this)
    });
  }

  /**
   * 文字反転の実行ボタンがクリックされた際のイベント
   *
   * @param value 入力内容
   * @private
   */
  _onReverseSubmitClick(value) {
    const reverse = value.split('')
      .reverse()
      .join('');
    this._reverseString.update(reverse);
  }
}