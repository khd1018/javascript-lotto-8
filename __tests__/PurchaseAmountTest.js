import PurchaseAmount from "../src/models/PurchaseAmount";

describe("LottoProfit 테스트", () => {
  test.each([[1], [300], [1001]])("구입금액이 1,000원 단위가 아니면 예외가 발생한다. ", (budget) => {
    expect(() => new PurchaseAmount(budget)).toThrow("[ERROR]");
  });

  test.each([[100001], [200000]])("구입금액이 100,000원을 초과하면 예외가 발생한다. ", (budget) => {
    expect(() => new PurchaseAmount(budget)).toThrow("[ERROR]");
  });
});
