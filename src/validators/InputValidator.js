class InputValidator {
  static checkEmpty(userInput) {
    if (!userInput) {
      throw new Error("값을 입력해주세요.");
    }
  }

  static checkNumber(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
  }
}

export default InputValidator;
