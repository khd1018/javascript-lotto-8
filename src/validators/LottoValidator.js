class LottoValidator {
  static validateOutOfRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 1~45사이의 숫자를 입력하셔야 합니다.");
    }
  }

  static validateCount(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 숫자 6개만 입력하셔야 합니다.");
    }
  }

  static validateBonusDuplication(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스번호는 당첨번호와 중복되지 않는 숫자를 입력하셔야 합니다.");
    }
  }

  static validateDuplication(winningNumbers) {
    if (new Set(winningNumbers).size < winningNumbers.length) {
      throw new Error("[ERROR] 당첨 번호는 서로 다른 숫자들을 입력하셔야 합니다.");
    }
  }
}

export default LottoValidator;
