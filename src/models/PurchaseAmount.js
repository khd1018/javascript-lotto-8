import { LOTTO_CONFIG } from "../constants/lottoConfigs.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

class PurchaseAmount {
  #budget;

  constructor(budget) {
    this.#validate(budget);
    this.#budget = budget;
  }

  #validate(budget) {
    if (budget % LOTTO_CONFIG.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_UNIT);
    }

    if (budget > LOTTO_CONFIG.MAX_BUDGET) {
      throw new Error(ERROR_MESSAGE.TOO_MUCH_BUDGET);
    }
  }

  getLottoCount() {
    return this.#budget / 1000;
  }
}

export default PurchaseAmount;
