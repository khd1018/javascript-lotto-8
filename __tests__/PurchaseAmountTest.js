import PurchaseAmount from "../src/models/PurchaseAmount";

describe("LottoProfit 테스트", () => {
  test.each([[1], [300], [1001]])("구입금액이 1,000원 단위가 아니면 예외가 발생한다. ", (budget) => {
    expect(() => new PurchaseAmount(budget)).toThrow("[ERROR]");
  });

  test.each([[100001], [200000]])("구입금액이 100,000원을 초과하면 예외가 발생한다. ", (budget) => {
    expect(() => new PurchaseAmount(budget)).toThrow("[ERROR]");
  });

  test.each([
    [3000, 3],
    [5000, 5],
  ])("구매할 수 있는 로또의 개수를 구할 수 있다.", (budget, lottoCount) => {
    const purchaseAmount = new PurchaseAmount(budget);

    expect(purchaseAmount.getLottoCount()).toBe(lottoCount);
  });
});
