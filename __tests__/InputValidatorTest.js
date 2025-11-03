import InputValidator from "../src/validators/InputValidator";

describe("InputValidator 테스트", () => {
  test("입력 문자열이 빈 문자열이면 예외가 발생한다. ", () => {
    const userInput = "";
    expect(() => InputValidator.checkEmpty(userInput)).toThrow("[ERROR]");
  });

  test("입력 문자열이 숫자가 아니라면 예외가 발생한다.", () => {
    const userInput = "messi";

    expect(() => InputValidator.checkNumber(userInput)).toThrow("[ERROR]");
  });
});
