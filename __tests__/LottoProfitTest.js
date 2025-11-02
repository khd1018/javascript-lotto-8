import LottoPrize from "../src/LottoPrize";

describe("LottoPrize 테스트", () => {
  test.each([
    [["fourth", "fifth"], "687.5"],
    [["fifth"], "62.5"],
    [[], "0.0"],
  ])("구매한 로또의 총 수익률을 구할 수 있다.", (ranks, totalProfitRate) => {
    const budget = 8000;
    const lottoPrize = new LottoPrize(budget);

    ranks.forEach((rank) => lottoPrize.sumAllProfits(rank));

    expect(lottoPrize.calculateProfitRate()).toBe(totalProfitRate);
  });
});
