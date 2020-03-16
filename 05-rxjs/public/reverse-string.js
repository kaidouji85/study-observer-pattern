import {CharacterProcessing} from "./character-processing.js";

/**
 * 文字加工 反転 イベント通知
 *
 * @typedef ReverseStringNotifier
 * @property {Observable<String>} resultChange$ 加工結果変更のイベントストリーム
 */

/**
 * 文字加工 反転
 *
 * @class ReverseString
 * @property {CharacterProcessing} _view ビュー
 * @property {Observable<String>} _resultChange$ 加工結果変更のイベントストリーム
 */
export class ReverseString {
  /**
   * コンストラクタ
   *
   * @constructor
   * @param {HTMLElement} root 本コンポネントをバインドするルート要素
   */
  constructor(root) {
    this._view = new CharacterProcessing({
      root: root,
      label: '文字反転',
    });
    this._resultChange$ = this._view.notifier().submit$.pipe(
      rxjs.operators.map(v => this._reverse(v)),
      rxjs.operators.tap(v => {
        this._view.update(v)
      })
    );
  }

  /**
   * イベント通知を取得する
   *
   * @return {ReverseStringNotifier} イベント通知
   */
  notifier() {
    return {
      resultChange$: this._resultChange$
    };
  }

  /**
   * 指定した文字列を反転される
   *
   * @param origin 加工する文字
   * @return {string} 加工結果
   * @private
   */
  _reverse(origin) {
    return origin.split('')
      .reverse()
      .join('');
  }
}