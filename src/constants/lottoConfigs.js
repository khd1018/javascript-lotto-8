export const LOTTO_CONFIG = Object.freeze({
  SEPERATOR: ",",
  DELIMITER: ", ",
  MIN_LOTTO_NUM: 1,
  MAX_LOTTO_NUM: 45,
  LOTTO_NUM_COUNT: 6,
  LOTTO_PRICE: 1000,
  MAX_BUDGET: 100000,
  SECOND_MATCH_COUNT: 5,
  SECOND_RANK: "second",
  DECIMAL_PLACE: 1,
});

export const RANK_MAP = Object.freeze({
  3: "fifth",
  4: "fourth",
  5: "third",
  6: "first",
});

export const PRIZE_BY_RANK = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};
