import PRequest from "../request";

export function getHomeGoodPriceData() {
  return PRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHightScoreData() {
  return PRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return PRequest.get({
    url: "/home/discount",
  });
}

export function getHotRecommendData() {
  return PRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getLongForData() {
  return PRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return PRequest.get({
    url: "/home/plus",
  });
}
