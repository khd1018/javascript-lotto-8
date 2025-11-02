class LottoEvaluator {
  #bonusNumber;
  #winningNumbers;

  constructor(bonusNumber, winningNumbers) {
    this.#validate(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
    this.#winningNumbers = winningNumbers;
  }

  #validate(bonusNumber, winningNumbers) {
    winningNumbers.forEach((winningNumber) => {
      this.#validateOutOfRange(winningNumber);
    });
    this.#validateOutOfRange(bonusNumber);
    this.#validateCount(winningNumbers);
    this.#validateBonusDuplication(bonusNumber, winningNumbers);
    this.#validateDuplication(winningNumbers);
  }

  #validateOutOfRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 1~45사이의 숫자를 입력하셔야 합니다.");
    }
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
