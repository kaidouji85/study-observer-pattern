import {ReverseString} from "./reverse-string.js";
import {AddSuffix} from "./add-suffix.js";

window.addEventListener('load', () => {
  const app = new App();
});

/**
 * アプリ全体を管理する
 *
 * @class App
 * @property {ReverseString} _reverseString 文字反転コンポネント
 * @property {AddSuffix} _addSuffix　末尾追加コンポネント
 */
class App {
  /**
   * コンストラクタ
   *
   * @constructor
   */
  constructor() {
    const body = window.document.body || document.createElement('body');
    this._reverseString = new ReverseString(body);
    this._addSuffix = new AddSuffix(body);
  }
}