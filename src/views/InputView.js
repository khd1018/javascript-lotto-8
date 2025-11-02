import { Console } from "@woowacourse/mission-utils";

export const InputView = {
  async askInput(message) {
    return await Console.readLineAsync(message);
  },
};
