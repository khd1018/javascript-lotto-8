class Lottos {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  getLottoRanks(bonusNumber, winningNumbers) {
    const RANK_MAP = {
      3: "fifth",
      4: "fourth",
      5: "third",
      6: "first",
    };

    return this.#lottos.map((lotto) => {
      const matchCount = lotto.countMatches(winningNumbers);
      const rank = RANK_MAP[matchCount];

      if (matchCount === 5 && lotto.contains(bonusNumber)) {
        return "second";
      }

      if (rank) {
        return rank;
      }
    });
  }
}

export default Lottos;
