//Creates a random number based on the length of an array

export function createRandomNum(passedArray) {
    let randNum = Math.floor(Math.random() * passedArray.length);
    return randNum;
  }
  