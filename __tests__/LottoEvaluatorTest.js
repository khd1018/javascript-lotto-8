import Lotto from "../src/models/Lotto";
import LottoEvaluator from "../src/models/LottoEvaluator";

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

  test.each([
    [0, [1, 2, 3, 4, 5, 6]],
    [46, [1, 2, 3, 4, 5, 6]],
    [25, [1, 2, 3, 4, 5, 60]],
  ])("숫자가 1~45사이가 아닌 경우 예외가 발생한다. ", (bonusNumber, winningNumbers) => {
    expect(() => new LottoEvaluator(bonusNumber, winningNumbers)).toThrow("[ERROR]");
  });

  test.each([
    [1, [1, 2, 3, 4, 5, 6, 7]],
    [45, [1, 2, 3, 4, 5]],
    [25, [1]],
  ])("당첨번호가 6개가 아닌 경우 예외가 발생한다. ", (bonusNumber, winningNumbers) => {
    expect(() => new LottoEvaluator(bonusNumber, winningNumbers)).toThrow("[ERROR]");
  });

  test.each([
    [1, [1, 2, 3, 4, 5, 6]],
    [45, [1, 2, 3, 4, 45]],
    [25, [1, 2, 3, 4, 5, 25]],
  ])("당첨번호에 보너스번호와 같은 숫자가 있으면 예외가 발생한다. ", (bonusNumber, winningNumbers) => {
    expect(() => new LottoEvaluator(bonusNumber, winningNumbers)).toThrow("[ERROR]");
  });

  test.each([
    [1, [1, 2, 3, 4, 6, 6]],
    [45, [1, 2, 3, 4, 4, 5]],
    [25, [1, 2, 3, 4, 5, 5]],
  ])("당첨번호에 중복된 숫자가 있으면 예외가 발생한다. ", (bonusNumber, winningNumbers) => {
    expect(() => new LottoEvaluator(bonusNumber, winningNumbers)).toThrow("[ERROR]");
  });
});
