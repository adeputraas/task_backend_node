// find string inside bracket
class FindFirstString {
  private static findStringInBracket(str: string) {
    let results = "";
    // check string length
    if (str.length <= 2) {
      return results;
    }

    // must check has bracket or not
    const indexAfterFirstBracket = str.indexOf("(") + 1; //always +1 because startIndex in substring always including the first character

    // incase index after first bracket not found
    if (indexAfterFirstBracket === 0) {
      return results;
    }

    const indexLastBracket = str.indexOf(")"); // 4

    // incase index last index not found
    if (indexLastBracket === -1) {
      return results;
    }

    // substring the results
    results = str.substring(indexAfterFirstBracket, indexLastBracket);

    return results;
  }

  static checkResults(stringWords: string): void {
    const finalResult = this.findStringInBracket(stringWords);
    console.log(finalResult, "ini final results;");
  }
}

// Personal List Cases
// =================
// ()()()()()()
// asdasdasd
// a(a)
// ()
// (1)
// (zz..)

const word = FindFirstString.checkResults("()()()()()()");
