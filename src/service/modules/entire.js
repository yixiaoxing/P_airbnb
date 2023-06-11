import PRequest from "../request";

export function getEntireRoomsData(offset = 0, size = 20) {
  return PRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
