class LottoRankStats {
  #rankCounts;

  constructor() {
    this.#rankCounts = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  getStats() {
    return this.#rankCounts;
  }

  record(rank) {
    if (rank) {
      this.#rankCounts[rank]++;
    }
  }
}

export default LottoRankStats;
