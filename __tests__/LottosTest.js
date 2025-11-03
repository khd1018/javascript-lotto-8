import LottoFactory from "../src/factories/LottoFactory";
import Lottos from "../src/models/Lottos";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("Lottos 클래스 테스트", () => {
  test.each([
    [
      2,
      [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 7],
      ],
      ["first", "second"],
    ],
    [1, [[10, 11, 21, 22, 23, 24]], [undefined]],
  ])("구매한 로또들의 당첨 등수를 알 수 있다.", (lottoCount, lottoNumbers, results) => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    mockRandoms(lottoNumbers);

    const issuedLottos = LottoFactory.createLottos(lottoCount);

    const lottos = new Lottos(issuedLottos);
    expect(lottos.getLottoRanks(bonusNumber, winningNumbers)).toStrictEqual(results);
  });
});
