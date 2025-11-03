import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, RANK_MESSAGE } from "../constants/messages.js";
import { LOTTO_CONFIG } from "../constants/lottoConfigs.js";

export const OutputView = {
  print(message) {
    Console.print(message);
  },

  printNumbers(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(LOTTO_CONFIG.DELIMITER)}]`);
    });
  },

  printRankStats(rankStats) {
    Console.print(MESSAGE.WINNING_RESULT);

    Object.keys(RANK_MESSAGE).forEach((rank) => {
      Console.print(`${RANK_MESSAGE[rank]} - ${rankStats[rank]}개`);
    });
  },

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },
};
