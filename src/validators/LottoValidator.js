import { LOTTO_CONFIG } from "../constants/lottoConfigs.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

class LottoValidator {
  static validateOutOfRange(number) {
    if (number < LOTTO_CONFIG.MIN_LOTTO_NUM || number > LOTTO_CONFIG.MAX_LOTTO_NUM) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }

  static validateCount(winningNumbers) {
    if (winningNumbers.length !== LOTTO_CONFIG.LOTTO_NUM_COUNT) {
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
