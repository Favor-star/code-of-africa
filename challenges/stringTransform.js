function stringTransform(string) {
  //I FIRST OF ALL SPLITTED THE STRING AND CONVERTED IT INTO ARRAY, TO EASE THE PROCESS OF ITERATION AND SO ON.
  const splittedString = string.split("");

  //AFTER THAT, I COMPUTED THE LENGTH OF THE STRING, AND STORES IT THE THE VARIABLE.
  const stringLength = splittedString.length;

  //AFTER THAT I COMBINED BOTH CONDITIONS, SO THAT THEY HAVE TO BE CHECKED BEFORE GOING TO THE SINGLE CONDITION ALONE.
  if (stringLength % 3 === 0 && stringLength % 3 === 0) {
    //THE SPLITTED STRING IS REVERSED, THEN JOINED AND THEN WHHITE SPACES ARE FILTERED OUT. RESULTS ARE STORED IN newString;
    const newString = splittedString.reverse().join("").match(/\w/g);

    //I  THEN RETURN ASCII CODES EQUIVALENT TO THE REVERSED CHARACTEERS IN THE REVERESED STRING.
    return newString
      .map((char, index) => newString.join("").charCodeAt(index))
      .join(" ");
  }
  //IF THE ABOVE CONDITION IS NOT TRUE, I MOVE TO CHECK THE STANDALONE CONDITIONS

  //I THEN CHECKED IF STRING LENGTH IS DIVISIBLE BY 3, BY USING MODULUS AND THEN CHECKS WHETHER THE REMAINDER IS 0
  if (stringLength % 3 === 0) {
    //IF THE CONDITION IS TRUE, I REVERSE THE STRING AND JOIN IT
    const newString = splittedString.reverse().join("");
    //THIS REMOVES WHITESPACES AND RETURNS THE REVERSED STRINGS
    return newString.match(/\w/g).join("");
  }

  //AT LAST I CHECK WHETHER THE STRING  LENGTH IS DIVISIBLE BY 5,
  //BY USING THE SAME PRINCIPLE AND IF SO, I RETURN  ASCII CODES EQUIVALENT TO EACH LETTER.

  if (stringLength % 5 === 0) {
    return splittedString
      .map((char, index) => splittedString.join("").charCodeAt(index))
      .join(" ");
  }

  //THIS RETURN STATMENTS HANDLES THE CONDITIONS WHETHER THE VALUE IS NOT STRING OR IS NOT DIVISIBLE BY 3 OR 5.
  // AND RETURN APPROPRIATE MESSAGE
  return typeof string !== "string"
    ? "I'm sorry, but the function expects strings only."
    : "Ther string length is neither divisible by 3, nor 5.";
}
console.log(stringTransform("SWEET POTATO"));
