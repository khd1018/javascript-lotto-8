import LottoProfit from "../src/LottoProfit";

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
});
