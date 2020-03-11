import {ReverseString} from './reverse-string.js';

window.addEventListener('load', () => {
  const app = new App();
});

/**
 *
 * @class App
 * @property {ReverseString} _reverseString 文字反転コンポネント
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
  }
}