export const removeObjPropImmutably = (obj, prop) => {
  const res = { ...obj };
  delete res[prop];
  return res;
};

export const addTwo = (num) => {
  return num + 2;
}
