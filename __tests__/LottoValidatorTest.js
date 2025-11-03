import LottoValidator from "../src/validators/LottoValidator";

describe("LottoValidator 테스트", () => {
  test.each([[0], [46]])("보너스번호가 1~45사이가 아닌 경우 예외가 발생한다. ", (bonusNumber) => {
    expect(() => LottoValidator.validateOutOfRange(bonusNumber)).toThrow("[ERROR]");
  });

  test.each([[[1, 2, 3, 4, 5, 6, 7]], [[1, 2, 3, 4, 5]], [[1]]])("당첨번호가 6개가 아닌 경우 예외가 발생한다. ", (winningNumbers) => {
    expect(() => LottoValidator.validateCount(winningNumbers)).toThrow("[ERROR]");
  });

  test.each([
    [1, [1, 2, 3, 4, 5, 6]],
    [45, [1, 2, 3, 4, 45]],
    [25, [1, 2, 3, 4, 5, 25]],
  ])("당첨번호에 보너스번호와 같은 숫자가 있으면 예외가 발생한다. ", (bonusNumber, winningNumbers) => {
    expect(() => LottoValidator.validateBonusDuplication(bonusNumber, winningNumbers)).toThrow("[ERROR]");
  });

  test.each([[[1, 2, 3, 4, 6, 6]], [[1, 2, 3, 4, 4, 5]], [[1, 2, 3, 4, 5, 5]]])("당첨번호에 중복된 숫자가 있으면 예외가 발생한다. ", (winningNumbers) => {
    expect(() => LottoValidator.validateDuplication(winningNumbers)).toThrow("[ERROR]");
  });
});
