import {ReverseString} from "./reverse-string.js";
import {AddSuffix} from "./add-suffix.js";
import {EqualJudgement} from "./equal-judgement.js";

window.addEventListener('load', () => {
  const app = new App();
});

/**
 * アプリ全体を管理する
 *
 * @class App
 * @property {ReverseString} _reverseString 文字反転コンポネント
 * @property {AddSuffix} _addSuffix　末尾追加コンポネント
 * @property {EqualJudgment} _equalJudgement 加工結果が等しい場合に特殊メッセージを表示する
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
    this._addSuffix = new AddSuffix(body, this._onSuffixChange.bind(this));

    this._equalJudgement = new EqualJudgement(
      body,
      this._reverseString.notifier().resultChange$
    );
  }

  /**
   * 末尾追加結果が変更された際の処理
   *
   * @param suffix 変更された結果
   * @private
   */
  _onSuffixChange(suffix) {
    this._equalJudgement.onSuffixChange(suffix);
  }
}