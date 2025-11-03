import LottoFactory from "../factories/LottoFactory.js";
import LottoProfit from "../models/LottoProfit.js";
import LottoRankStats from "../models/LottoRankStats.js";
import Lottos from "../models/Lottos.js";
import PurchaseAmount from "../models/PurchaseAmount.js";
import InputValidator from "../validators/InputValidator.js";
import LottoValidator from "../validators/LottoValidator.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";

class LottoController {
  async init() {
    const { budget, lottoCount } = await this.#getUserBudget();
    const lottos = this.#createLottos(lottoCount);
    this.#printLottos(lottos.getLottos().map((lotto) => lotto.getNumbers()));
    const winningNumbers = await this.#getUserWinningNumbers();
    const bonusNumber = await this.#getUserBonusNumber(winningNumbers);
    const lottoRanks = this.#getRanks(bonusNumber, winningNumbers, lottos);

    this.#printLottoStats(lottoRanks);
    this.#printProfitRate(budget, lottoRanks);
  }

  async #getUserBudget() {
    while (true) {
      try {
        const userBudget = await InputView.askInput("구입금액을 입력해 주세요.\n");
        this.#validate(userBudget);

        const budget = Number(userBudget);
        const lottoCount = this.#getLottoCount(budget);
        return { budget, lottoCount };
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  #getLottoCount(budget) {
    const purchaseAmount = new PurchaseAmount(budget);
    return purchaseAmount.getLottoCount();
  }

  #createLottos(lottoCount) {
    const lottos = LottoFactory.createLottos(lottoCount);
    return new Lottos(lottos);
  }

  async #getUserWinningNumbers() {
    while (true) {
      try {
        const userWinningNumber = await InputView.askInput("당첨 번호를 입력해 주세요.\n");
        const winningNumbers = userWinningNumber.split(",").map((winningNumber) => Number(winningNumber));

        this.#validateWinningNumbers(winningNumbers);
        return winningNumbers;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #getUserBonusNumber(winningNumbers) {
    while (true) {
      try {
        const userBonusNumber = await InputView.askInput("보너스 번호를 입력해 주세요.\n");
        const bonusNumber = Number(userBonusNumber);

        this.#validateBonusNumber(bonusNumber, winningNumbers);
        return bonusNumber;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  #validate(userInput) {
    InputValidator.checkEmpty(userInput);
    InputValidator.checkNumber(userInput);
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    this.#validate(bonusNumber);
    LottoValidator.validateOutOfRange(bonusNumber);
    LottoValidator.validateBonusDuplication(bonusNumber, winningNumbers);
  }

  #validateWinningNumbers(winningNumbers) {
    winningNumbers.forEach((winningNumber) => {
      this.#validate(winningNumber);
      LottoValidator.validateOutOfRange(winningNumber);
    });
    LottoValidator.validateCount(winningNumbers);
    LottoValidator.validateDuplication(winningNumbers);
  }

  #printLottos(lottoNumbers) {
    OutputView.printNumbers(lottoNumbers);
  }

  #getRanks(bonusNumber, winningNumbers, lottos) {
    return lottos.getLottoRanks(bonusNumber, winningNumbers);
  }

  #getLottoStats(ranks) {
    const lottoRankStats = new LottoRankStats();
    lottoRankStats.record(ranks);
    return lottoRankStats.getStats();
  }

  #getProfitRate(budget, ranks) {
    const lottoProfit = new LottoProfit();
    lottoProfit.addPrizeBy(ranks);
    return lottoProfit.calculateProfitRate(budget);
  }

  #printLottoStats(ranks) {
    OutputView.printRankStats(this.#getLottoStats(ranks));
  }

  #printProfitRate(budget, ranks) {
    OutputView.printProfitRate(this.#getProfitRate(budget, ranks));
  }
}

export default LottoController;
