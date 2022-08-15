export default function appendToEachArrayValue(array, appendString) {
     const tab = [];
    for (var str of array) {
      
        tab.push(appendString + str);
    }
  
    return tab;
  }