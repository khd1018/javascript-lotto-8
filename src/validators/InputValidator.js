class InputValidator {
  static checkEmpty(userInput) {
    if (!userInput) {
      throw new Error("[ERROR]값을 입력해주세요.");
    }
  }

  static checkNumber(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new Error("[ERROR]숫자를 입력해주세요.");
    }
  }
}

export default InputValidator;
