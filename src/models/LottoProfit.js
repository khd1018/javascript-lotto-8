import { LOTTO_CONFIG, PRIZE_BY_RANK } from "../constants/lottoConfigs.js";

class LottoProfit {
  #totalProfit;

  constructor() {
    this.#totalProfit = 0;
  }

  addPrizeBy(lottoRanks) {
    lottoRanks.forEach((lottoRank) => {
      if (lottoRank) {
        this.#totalProfit += PRIZE_BY_RANK[lottoRank];
      }
    });
  }

  calculateProfitRate(budget) {
    const profitRate = (this.#totalProfit / budget) * 100;
    return profitRate.toFixed(LOTTO_CONFIG.DECIMAL_PLACE);
  }
}

export default LottoProfit;
