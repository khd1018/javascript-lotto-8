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

  #validateCount(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 숫자 6개만 입력하셔야 합니다.");
    }
  }

  #validateBonusDuplication(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스번호는 당첨번호와 중복되지 않는 숫자를 입력하셔야 합니다.");
    }
  }

  #validateDuplication(winningNumbers) {
    if (new Set(winningNumbers).size < winningNumbers.length) {
      throw new Error("[ERROR] 당첨 번호는 서로 다른 숫자들을 입력하셔야 합니다.");
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
