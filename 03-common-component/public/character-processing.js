/**
 * 文字加工 入力フォーム ビュー
 *
 * @class CharacterProcessing
 * @property {HTMLElement} _input 入力内容
 * @property {HTMLElement} _submit 実行ボタン
 * @property {HTMLElement} _result 反転した結果を表示する場所
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

    this._submit = dom.querySelector('.string-form__submit')  || document.createElement('button');
    this._submit.addEventListener('click', e => {
      const origin = this._input.value;
      onSubmitClick(origin);
    });

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
}