import { ERROR_MESSAGE } from "../constants/messages";

class InputValidator {
  static checkEmpty(userInput) {
    if (!userInput) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  static checkNumber(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
  }
}

export default InputValidator;
