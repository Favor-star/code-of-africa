const arrayMap = (array, target) => {
  let computedSum = 0; //First I decrale the variable to store the computed sum
  let currentValueIndex = 0; //this holds the value of previous index

  //ITERATION THROUGH THE WHOLE ARRAY
  for (let i = 0; i < array.length; i++) {
    //ADDTION OF CURRENT ITERATION TO COMPUTE THE SUM, WHICH IS STORED IN computedSum VARIABLE.
    computedSum += array[i];

    //THIS WHILE LOOP CHECKS WHETHER THE COMPUTED SUM EXCEED THE TARGETED SUM,
    //IF YES IT REMOVES THE CURRENT ITERATION'S VALUE FROM THE COUMPUTED SUM, AND CONTINUE TO THE NEXT ITERATION.
    while (computedSum > target) {
      computedSum -= array[currentValueIndex];
      currentValueIndex++;
    }
    //HOWEVER, IF THE TARGET EQUALS THE COMPUTED SUM, IT DIRECTLY RETURN TRUE AND EXIT THE ITERATION LOOP
    if (target === computedSum) {
      return true;
    }
  }
  //OTHERWISE, IF THE ITERATION FINISHES WITHOUT FINDING THE SUM, IT RETURN FALSE AND EXIT THE PROGRAM
  return false;
};
