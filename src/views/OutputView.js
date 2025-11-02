import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
  RANK_STRING: {
    first: "6개 일치",
    second: "5개 일치, 보너스 볼 일치",
    third: "5개 일치 (1,500,000원)",
    fourth: "4개 일치 (50,000원)",
    fifth: "3개 일치 (5,000원)",
  },

  print(message) {
    Console.print(message);
  },

  printNumbers(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.\n`);

    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  },

  printRankStats(rankStats) {
    Console.print("당첨 통계\n---");

    Object.keys(this.RANK_STRING).forEach((rank) => {
      Console.print(`${this.RANK_STRING[rank]} - ${rankStats[rank]}개\n`);
    });
  },

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },
};
