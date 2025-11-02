import LottoProfit from "../src/models/LottoProfit";

describe("LottoProfit 테스트", () => {
  test.each([
    [["fourth", "fifth"], "687.5"],
    [["fifth"], "62.5"],
    [[], "0.0"],
  ])("구매한 로또의 총 수익률을 구할 수 있다.", (ranks, totalProfitRate) => {
    const budget = 8000;
    const lottoProfit = new LottoProfit(budget);

    ranks.forEach((rank) => lottoProfit.sumAllProfits(rank));

    expect(lottoProfit.calculateProfitRate()).toBe(totalProfitRate);
  });

  test.each([[1], [300], [1001]])("구입금액이 1,000원 단위가 아니면 예외가 발생한다. ", (budget) => {
    expect(() => new LottoProfit(budget)).toThrow("[ERROR]");
  });

  test.each([[100001], [200000]])("구입금액이 100,000원을 초과하면 예외가 발생한다. ", (budget) => {
    expect(() => new LottoProfit(budget)).toThrow("[ERROR]");
  });
});
