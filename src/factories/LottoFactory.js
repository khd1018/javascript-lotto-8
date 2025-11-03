import { Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";
import { LOTTO_CONFIG } from "../constants/lottoConfigs.js";

class LottoFactory {
  static createLottos(lottoCount) {
    const lottos = [];

    for (let count = 0; count < lottoCount; count++) {
      const numbers = this.#generateNumbers();
      lottos.push(new Lotto(numbers.sort((a, b) => a - b)));
    }

    return lottos;
  }

  static #generateNumbers() {
    const number = Random.pickUniqueNumbersInRange(LOTTO_CONFIG.MIN_LOTTO_NUM, LOTTO_CONFIG.MAX_LOTTO_NUM, LOTTO_CONFIG.LOTTO_NUM_COUNT);
    return number;
  }
}

export default LottoFactory;
