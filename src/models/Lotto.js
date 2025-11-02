class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplication(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplication(numbers) {
    if (new Set(numbers).size < numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자들이 있습니다.");
    }
  }

  countMatches(winningNumbers) {
    let matchCount = 0;

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchCount++;
      }
    });

    return matchCount;
  }

  contains(bonusNumber) {
    return this.#numbers.some((number) => number === bonusNumber);
  }
}

export default Lotto;
