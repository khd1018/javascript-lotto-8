class LottoEvaluator {
  #bonusNumber;
  #winningNumbers;

  constructor(bonusNumber, winningNumbers) {
    this.#bonusNumber = bonusNumber;
    this.#winningNumbers = winningNumbers;
  }

  rateRank(lotto) {
    const matchCount = lotto.countMatches(this.#winningNumbers);
    const RANK_MAP = {
      3: "fifth",
      4: "fourth",
      5: "third",
      6: "first",
    };

    if (matchCount === 5 && lotto.contains(this.#bonusNumber)) {
      return "second";
    }

    return RANK_MAP[matchCount];
  }
}

export default LottoEvaluator;
