// find string inside bracket
class StringsUtility {
    static findStringInBracket(str:string){
        let results = '';
        // check string length
        if(str.length > 0){
            // must check has bracket or not 
            const hasBracket:boolean = /[(.*)]/.test(str);
            if(hasBracket){
                // if has bracket find the first ( and the last bracket ) 
                const findFirstBracket = str.indexOf('(');
                const findLastBracket = str.indexOf(')');
                const indexFirstBracket = findFirstBracket +1; //always +1 because startIndex in substring always including the first character
                results = str.substring(indexFirstBracket, findLastBracket);
            } 
        }
        return results;
    } 
}


class Word {
    constructor(private _stringWords:string){
        this._stringWords = _stringWords;
    }

   checkResults():void {
        const finalResult = StringsUtility.findStringInBracket(this._stringWords);
        console.log(finalResult,'ini final results;')
   }
}

const word = new Word('(ade,asd.as.das)()()()');
const word2 = new Word('ade');
const word3 = new Word('()()(ade)())');
const word4 = new Word('');
word.checkResults();
word2.checkResults();
word3.checkResults();
word4.checkResults();