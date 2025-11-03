import { LOTTO_CONFIG, RANK_MAP } from "../constants/lottoConfigs.js";

class Lottos {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  getLottoRanks(bonusNumber, winningNumbers) {
    return this.#lottos.map((lotto) => {
      const matchCount = lotto.countMatches(winningNumbers);
      const rank = RANK_MAP[matchCount];

      if (matchCount === LOTTO_CONFIG.SECOND_MATCH_COUNT && lotto.contains(bonusNumber)) {
        return LOTTO_CONFIG.SECOND_RANK;
      }

      if (rank) {
        return rank;
      }
    });
  }
}

export default Lottos;
