const ERROR_PREFIX = "[ERROR]";

export const MESSAGE = Object.freeze({
  ASK_BUDGET: "구입금액을 입력해 주세요.\n",
  ASK_WINNING_NUM: "당첨 번호를 입력해 주세요.\n",
  ASK_BONUS_NUM: "보너스 번호를 입력해 주세요.\n",
  WINNING_RESULT: "당첨 통계\n---",
});

export const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: `${ERROR_PREFIX} 값을 입력해주세요.`,
  NOT_A_NUMBER: `${ERROR_PREFIX} 숫자를 입력해주세요.`,
  DUPLICATE_NUMBERS: `${ERROR_PREFIX} 당첨 번호는 서로 다른 숫자들을 입력하셔야 합니다. `,
  DUPLICATE_BONUS: `${ERROR_PREFIX}  보너스번호는 당첨번호와 중복되지 않는 숫자를 입력하셔야 합니다. `,
  INVALID_COUNTS: `${ERROR_PREFIX} 당첨 번호는 숫자 6개만 입력하셔야 합니다.`,
  OUT_OF_RANGE: `${ERROR_PREFIX} 1~45사이의 숫자를 입력하셔야 합니다.`,
  INVALID_UNIT: `${ERROR_PREFIX}  구매금액은 1,000원 단위로 입력해주세요.`,
  TOO_MUCH_BUDGET: `${ERROR_PREFIX}  구매금액은 100,000원 이하로 입력해주세요.`,
});
