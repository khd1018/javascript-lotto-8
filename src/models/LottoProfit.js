class LottoProfit {
  #budget;
  #totalProfit;

  constructor(budget) {
    this.#validate(budget);
    this.#budget = budget;
    this.#totalProfit = 0;
  }

  #validate(budget) {
    if (budget % 1000 !== 0) {
      throw new Error("[ERROR] 구매금액은 1,000원 단위로 입력해주세요. ");
    }

    if (budget > 100000) {
      throw new Error("[ERROR] 구매금액은 100,000원 이하로 입력해주세요. ");
    }
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

  calculateProfitRate() {
    const profitRate = (this.#totalProfit / this.#budget) * 100;
    return profitRate.toFixed(1);
  }
}

export default LottoProfit;
