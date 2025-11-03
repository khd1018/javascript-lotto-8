import { ERROR_MESSAGE } from "../constants/messages";

class LottoValidator {
  static validateOutOfRange(number) {
    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }

  static validateCount(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_COUNTS);
    }
  }

  static validateBonusDuplication(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS);
    }
  }

  static validateDuplication(winningNumbers) {
    if (new Set(winningNumbers).size < winningNumbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBERS);
    }
  }
}

export default LottoValidator;
