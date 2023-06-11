export function tabNamesFn(data) {
  const tabNames = data?.map((item) => item.name);

  return tabNames;
}

export function isEmptyO(obj) {
  return !!Object.keys(obj).length;
}
