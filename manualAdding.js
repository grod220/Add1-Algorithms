export function add1(numArr, base) {
  numArr[numArr.length-1]++;
  let currIndex = numArr.length-1;
  while(numArr[currIndex] === base) {
    numArr[currIndex] = 0;
    currIndex--;
    if (currIndex>=0) {
      numArr[currIndex]++;
    }
  }
  if (!numArr[currIndex]) {
    numArr.unshift(1);
  }
  return numArr;
}
