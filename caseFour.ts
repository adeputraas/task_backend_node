class StringUtility {
  static sortString(strArray: string[]): string {
    let i = 0;
    let j = 0;
    let stringResult = "";
    while (i < strArray.length) {
      j = i + 1;
      while (j < strArray.length) {
        if (strArray[j] < strArray[i]) {
          let tempStr = strArray[i];
          strArray[i] = strArray[j];
          strArray[j] = tempStr;
        }
        j++;
      }
      stringResult = stringResult.concat(strArray[i]);
      i++;
    }
    return stringResult;
  }
}

class Anagram {
  constructor(private _arrayString: string[]) {
    this._arrayString = _arrayString;
  }

  checkResult() {
    // set objects by key unique by sorting string
    const objItems: Record<string, string[]> = {};
    for (let i = 0; i < this._arrayString.length; i++) {
      // sorting string ascending and insert into object
      let items = this._arrayString[i];
      const sortString = StringUtility.sortString(items.split(""));
      if (!objItems[sortString]) {
        // initialize key value
        objItems[sortString] = [items];
      } else {
        // insert into array based on key value
        objItems[sortString].push(items);
      }
    }

    // displaying final data
    const finalResult: string[][] = [];
    for (const key in objItems) {
      finalResult.push(objItems[key]);
    }

    console.log(finalResult, "ini final result");
  }
}

const anagram = new Anagram(["kita", "atik", "tika", "aku", "kia", "makan", "kua"]);
anagram.checkResult();

// Expected Result => [
// ["kita", "atik", "tika"],
// ["aku", "kua"],
// ["makan"],
// ["kia"]
// ]
