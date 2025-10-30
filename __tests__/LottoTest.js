import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test.each([
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 3, 4, 7, 8, 9], 3],
    [[8, 10, 12, 13, 14, 15], 0],
  ])("로또 번호 중에 당첨 번호와 일치하는 숫자가 몇 개 있는지 알 수 있다.", (numbers, matchCount) => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    const lotto = new Lotto(numbers);
    expect(lotto.countMatches(winningNumbers)).toBe(matchCount);
  });
});
