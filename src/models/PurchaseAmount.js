class PurchaseAmount {
  #budget;

  constructor(budget) {
    this.#validate(budget);
    this.#budget = budget;
  }

  #validate(budget) {
    if (budget % 1000 !== 0) {
      throw new Error("[ERROR] 구매금액은 1,000원 단위로 입력해주세요. ");
    }

    if (budget > 100000) {
      throw new Error("[ERROR] 구매금액은 100,000원 이하로 입력해주세요. ");
    }
  }
}

export default PurchaseAmount;
