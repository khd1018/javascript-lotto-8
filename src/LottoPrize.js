class LottoPrize {
  #budget;
  #totalProfit;

  constructor(budget) {
    this.#budget = budget;
    this.#totalProfit = 0;
  }

  sumAllProfits(rank) {
    const PRIZE_BY_RANK = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };

    this.#totalProfit += PRIZE_BY_RANK[rank];
  }

  calculateProfitRate() {}
}
