/**
 * 入力した文字を反転させる
 *
 * @class ReverseString
 * @property {HTMLElement} _input 入力内容
 * @property {HTMLElement} _submit 実行ボタン
 * @property {HTMLElement} _result 反転した結果を表示する場所
 */
export class ReverseString {
  /**
   * コンストラクタ
   *
   * @param {HTMLElement} root 本コンポネントをバインドするHTML要素
   */
  constructor(root) {
    const dom = document.createElement('div');
    dom.innerHTML = `
      <span class="string-form">
        <input class="string-form__input" type="text">
        <button type="button" class="string-form__submit">実行</button>
        <span class="string-form__result"></span>
      </span>
    `;
    root.append(dom);

    this._input = dom.querySelector('.string-form__input') || document.createElement('input');

    this._submit = dom.querySelector('.string-form__submit')  || document.createElement('button');
    this._submit.addEventListener('click', this._onSubmitClick.bind(this));

    this._result = dom.querySelector('.string-form__result') || document.createElement('span');
  }

  /**
   * 実行ボタンがクリックされた時のイベント
   *
   * @param {Event} e イベント
   * @private
   */
  _onSubmitClick(e) {
    const origin = this._input.value;
    const reverse = origin.split('')
      .reverse()
      .join('');
    this._result.innerText = reverse;
  }
}