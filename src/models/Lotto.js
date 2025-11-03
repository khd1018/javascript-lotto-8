import { LOTTO_CONFIG } from "../constants/lottoConfigs.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplication(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_CONFIG.LOTTO_NUM_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_COUNTS);
    }
  }

  #validateDuplication(numbers) {
    if (new Set(numbers).size < numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBERS);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  countMatches(winningNumbers) {
    let matchCount = 0;

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchCount++;
      }
    });

    return matchCount;
  }

  contains(bonusNumber) {
    return this.#numbers.some((number) => number === bonusNumber);
  }
}

export default Lotto;
