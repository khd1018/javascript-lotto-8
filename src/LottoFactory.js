import { Random } from "@woowacourse/mission-utils";
import Lotto from "./models/Lotto.js";

class LottoFactory {
  static createLottos(lottoCount) {
    const lottos = [];

    for (let count = 0; count < lottoCount; count++) {
      const numbers = this.#generateNumbers();
      lottos.push(new Lotto(numbers));
    }

    return lottos;
  }

  static #generateNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoFactory;
