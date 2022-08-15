export default function appendToEachArrayValue(array, appendString) {
  const tab = [];
  for (const str of array) {
    tab.push(appendString + str);
  }

  return tab;
}
