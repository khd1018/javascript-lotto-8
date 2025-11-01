import Lotto from "../src/Lotto";
import LottoEvaluator from "../src/LottoEvaluator";

describe("LottoEvaluator 테스트", () => {
  test.each([
    [[1, 2, 3, 4, 5, 10], "second"],
    [[1, 2, 3, 10, 11, 22], "fifth"],
    [[1, 2, 3, 4, 5, 6], "first"],
  ])("로또의 등수를 구할 수 있다.", (numbers, rank) => {
    const bonusNumber = 10;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const lottoEvaluator = new LottoEvaluator(bonusNumber, winningNumbers);

    expect(lottoEvaluator.rateRank(new Lotto(numbers))).toBe(rank);
  });
});
