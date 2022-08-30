export default function createInt8TypedArray(length,position,value) {
    
    try {
    const typedArray = new Int8Array(length);
    typedArray[position] = value;
    return typedArray;
      } catch (e) {
        throw Error('Position outside range');
      }
}