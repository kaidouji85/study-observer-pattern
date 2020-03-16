/**
 * イベントストリーム
 *
 * @typedef CharacterProcessingNotifier
 * @property {Observable<string>>} submit$ 実行ボタンを押した時のストリーム
 */


/**
 * 文字加工 入力フォーム ビュー
 *
 * @class CharacterProcessing
 * @property {HTMLElement} _input 入力内容
 * @property {HTMLElement} _submitButton 実行ボタン
 * @property {HTMLElement} _result 反転した結果を表示する場所
 * @property {Observable<string>} _submit$ ボタンをクリックした際のイベントストリーム
 */
export class CharacterProcessing {
  /**
   * コンストラクタ
   *
   * @param {HTMLElement} root 本コンポネントをバインドするHTML要素
   * @param {String} label 入力項目のラベル
   * @param {@function<String => void>>} onSubmitClick 実行ボタンがクリックされた際のイベント
   */
  constructor({root, label, onSubmitClick}) {
    const dom = document.createElement('div');
    dom.innerHTML = `
      <span class="string-form">
        <label class="string-form__label">${label}</label>
        <input class="string-form__input" type="text">
        <button type="button" class="string-form__submit">実行</button>
        <span class="string-form__result"></span>
      </span>
    `;
    root.append(dom);

    this._input = dom.querySelector('.string-form__input') || document.createElement('input');

    this._submitButton = dom.querySelector('.string-form__submit')  || document.createElement('button');
    this._submit$ = rxjs.fromEvent(this._submitButton, 'click').pipe(
      rxjs.operators.map(e => this._input.value)
    );

    this._result = dom.querySelector('.string-form__result') || document.createElement('span');
  }

  /**
   * モデルをビューに反映させる
   *
   * @param {String} result 文字加工結果
   */
  update(result) {
    return this._result.innerText = result
  }

  /**
   * イベント通知を取得する
   *
   * @return {CharacterProcessingNotifier}
   */
  notifier() {
    return {
      submit$: this._submit$
    };
  }
}