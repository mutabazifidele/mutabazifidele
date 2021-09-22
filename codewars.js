function twoSort(s) {
  let sortedArr = s.sort();
  let firstStringArr = sortedArr[0].split('');
  let result = firstStringArr[0];
  for(let i=1;i<firstStringArr.length;i++){
      result = result+'***'+firstStringArr[i];
  }
  return result;
}

