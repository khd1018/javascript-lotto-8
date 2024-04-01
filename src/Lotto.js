class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
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
}

export default Lotto;
