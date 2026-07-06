import { Tense, VerbForm, WordDataMap, WordType } from "./Data";
import { VerbFfunction } from "./VerbFfunction";

export class VerbConjugator
{
    constructor()
    { }
    public conjugate( selectWord: WordType ): string[]
    {

        const targetTable = WordDataMap.get( selectWord.type );
        if ( !targetTable )
        {
            console.warn( `找不到類型: ${selectWord.type} 的動詞庫` );
            return [];
        }
        const found = targetTable.find(
            item => item.voc === selectWord.word && item.tag.includes( selectWord.tag )
        );

        if ( !found )
        {
            console.warn( `找不到動詞: ${selectWord.word} 或該動詞不支援時態: ${selectWord.tag}` );
            return [];
        }

        // 取得字根 (例如 "comer" -> "com")
        const stem = VerbFfunction.Instance.getStem( found.voc );

        // 根據指定的時態進行變位
        switch ( selectWord.tag )
        {
            case Tense.Present:
                return VerbFfunction.Instance.presentTense( found, stem, selectWord.type );
            case Tense.Future:
            // 未來可以輕鬆在這邊擴充其他時態的 method
            // return this.getFutureTense(found.personal, found.voc); 
            default:
                return [];
        }
    }


    private presentTense( found: VerbForm, Item: string ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case "yo":
                    combination = Item + "o";
                    break;
                case "tú":
                    combination = Item + "es";
                    break;
                case "él":
                    combination = Item + "e";
                    break;
                case "nosotros":
                    combination = Item + "emos";
                    break;
                case "vosotros":
                    combination = Item + "éis";
                    break;
                case "ellos":
                    combination = Item + "en";
                    break;
            }

            result.push( combination );
        }

        return result;
    }

}



function ErVerbAll( word: VerbForm[], selectWord: WordType, tense: Tense )
{
    let wordArray: string[] = [];
    let Item: string = '';
    let result: string[] = [];
    let found = word.find( item => item.voc === selectWord.word )
    if ( !found )
    {
        return;
    }

    for ( let i = 0; i < found.voc.length - 2; i++ )
    {
        wordArray.push( found.voc[ i ] );
    }
    Item = wordArray.join( "" );
    switch ( tense )
    {
        case "Present":
            result = Present( found, Item );
            break;
    }

}

function Present( found: VerbForm, Item: string )
{
    let result: string[] = [];
    for ( let i = 0; i < found.personal.length; i++ )
    {
        let combination: string = "";
        switch ( found.personal[ i ] )
        {
            case "yo":
                combination = Item + "o";
                break;
            case "tú":
                combination = Item + "es";
                break;
            case "él":
                combination = Item + "e";
                break;
            case "nosotros":
                combination = Item + "emos";
                break;
            case "vosotros":
                combination = Item + "éis";
                break;
            case "ellos":
                combination = Item + "en";
                break;
        }

        result.push( combination );
    }

    return result;
}