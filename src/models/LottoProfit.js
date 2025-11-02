class LottoProfit {
  #totalProfit;

  constructor() {
    this.#totalProfit = 0;
  }

  addPrizeBy(rank) {
    const PRIZE_BY_RANK = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };

    this.#totalProfit += PRIZE_BY_RANK[rank];
  }

  calculateProfitRate(budget) {
    const profitRate = (this.#totalProfit / budget) * 100;
    return profitRate.toFixed(1);
  }
}

export default LottoProfit;
