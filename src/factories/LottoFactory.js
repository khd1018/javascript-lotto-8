import { Random } from "@woowacourse/mission-utils";
import Lotto from "./models/Lotto.js";

class LottoFactory {
  static createLottos(lottoCount) {
    const lottos = [];

    for (let count = 0; count < lottoCount; count++) {
      const numbers = this.#generateNumbers();
      lottos.push(new Lotto(numbers.sort()));
    }

    return lottos;
  }

  static #generateNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoFactory;
