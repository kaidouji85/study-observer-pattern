import {CharacterProcessing} from "./character-processing.js";

/**
 * 文字加工 末尾追加 イベント通知
 *
 * @typedef AddSuffixNotifier
 * @param {Observable<String>} resultChange$ 加工結果変更のイベントストリーム
 */

/**
 * 文字加工 末尾に「なのだよ」を追加する
 *
 * @class AddSuffix
 * @property {CharacterProcessing} _view ビュー
 * @property {Observable<String>} _resultChange$ 加工結果変更のイベントストリーム
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
      label: '末尾追加'
    });
    this._resultChange$ = this._view.notifier().submit$.pipe(
      rxjs.operators.map(v => this._addSuffix(v)),
      rxjs.operators.tap(v => {
        this._view.update(v);
      })
    );
  }

  /**
   * イベント通知を取得する
   *
   * @return {AddSuffixNotifier} イベント通知
   */
  notifier() {
    return {
      resultChange$: this._resultChange$
    };
  }

  /**
   * 指定した文字列に末尾を追加する
   *
   * @param origin 加工する文字
   * @return {string} 加工結果
   * @private
   */
  _addSuffix(origin) {
    return `${origin} なのだよ`;
  }
}