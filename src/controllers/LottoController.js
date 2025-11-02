import LottoFactory from "../factories/LottoFactory.js";
import PurchaseAmount from "../models/PurchaseAmount.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";

class LottoController {
  #lottos;

  async init() {
    await this.handleUserBudget();
  }

  async handleUserBudget() {
    try {
      const userBudget = await this.askUserBudget();
      const purchaseAmount = new PurchaseAmount(userBudget);
      this.#lottos = LottoFactory.createLottos(purchaseAmount.getLottoCount());
      this.printLottos(lottos.map((lotto) => lotto.getNumbers()));
    } catch (error) {
      OutputView.print(error.message);
      await this.askUserBudget();
    }
  }

  async handleUserBonusNumber() {}

  async askUserBudget() {
    return await InputView.askInput("구입금액을 입력해 주세요.\n");
  }

  async askUserWinningNumbers() {}

  async askUserBonusNumber() {}

  printLottos(lottoNumbers) {
    OutputView.printNumbers(lottoNumbers);
  }

  printLottoStats() {}

  printProfitRate() {}
}

export default LottoController;
