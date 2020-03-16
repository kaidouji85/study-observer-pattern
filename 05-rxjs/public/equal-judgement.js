/**
 * 文字反転、末尾追加の結果が同じ場合に特殊なメッセージを表示する
 * ただし、空文字で一致してもメッセージは表示しない
 *
 * @class EqualJudgement
 * @property {HTMLElement} root 本コンポネントのルート要素
 * @property {String} _reverse 最新の反転文字結果
 * @property {String} _suffix 最新の末尾追加結果
 */
export class EqualJudgement {
  /**
   * コンストラクタ
   *
   * @constructor
   * @param root 本コンポネントをバインドするルート要素
   */
  constructor(root) {
    this._reverse = '';
    this._suffix = '';

    const dom = document.createElement('div');
    dom.innerHTML = `
      <span class="equal-judgement"></span>
    `;
    root.append(dom);

    this._root = dom.querySelector('.equal-judgement') || document.createElement('span');

    this._update();
  }

  /**
   * 文字反転結果が変更された際に呼ばれるメソッド
   *
   * @param result 変更された内容
   */
  onReverseChange(result) {
    this._reverse = result;
    this._update();
  }

  /**
   * 末尾追加結果が変更された際に呼ばれるメソッド
   *
   * @param result 変更された内容
   */
  onSuffixChange(result) {
    this._suffix = result;
    this._update();
  }

  /**
   * 本コンポネントの表示内容を更新する
   *
   * @private
   */
  _update() {
    const isEitherBlank = this._reverse === '' || this._suffix === '';
    const isEqual = (this._suffix === this._reverse);
    const message = !isEitherBlank && isEqual
      ? '変換結果が一致します'
      : '';
    this._root.innerText = message;
  }
}
