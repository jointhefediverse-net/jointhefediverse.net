export default (arr, key, desc) => {
  if (desc) {
    arr.sort((a, b) => (a[key] < b[key] ? 1 : -1));
  } else {
    arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
  return arr;
};
