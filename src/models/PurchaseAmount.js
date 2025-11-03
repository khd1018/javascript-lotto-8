import { ERROR_MESSAGE } from "../constants/messages";

class PurchaseAmount {
  #budget;

  constructor(budget) {
    this.#validate(budget);
    this.#budget = budget;
  }

  #validate(budget) {
    if (budget % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_UNIT);
    }

    if (budget > 100000) {
      throw new Error(ERROR_MESSAGE.TOO_MUCH_BUDGET);
    }
  }

  getLottoCount() {
    return this.#budget / 1000;
  }
}

export default PurchaseAmount;
