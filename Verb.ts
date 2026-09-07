import { Tense, TenseSynthesis, WordType } from "./Data.js";
import { WordDataMap } from "./RegularVerbData.js";
import { VerbFunction } from "./VerbFunction.js";
import { nonRegularVerbs, Irregular } from "./NewIrregularVerbData.js"
export class VerbConjugator
{
    public conjugate( selectWord: WordType ): string[]
    {
        const verbFunction = VerbFunction.Instance;
        const targetTable = WordDataMap.get( selectWord.type );
        if ( !targetTable )
        {
            console.warn( `找不到類型: ${selectWord.type} 的動詞庫` );
            return [];
        }
        const found = targetTable.find(
            item => item.voc === selectWord.word
        );

        if ( !found )
        {
            console.warn( `找不到動詞: ${selectWord.word} 或該動詞不支援時態: ${selectWord.tag}` );
            return [];
        }

        // 僅在動詞標記為不規則時，尋找目前時態的不規則結果
        let irrWord: string[] | undefined;
        let irregularData: Irregular;
        if ( !found.regular )
        {

            irregularData = nonRegularVerbs.find(
                item => item.voc === found.voc
            );

            irrWord = irregularData?.obj[ selectWord.tag ];
        }

        // 取得字根 (例如 "comer" -> "com")
        const stem = verbFunction.getStem( found.voc );

        const regularSynthesisHandlers = {
            [ TenseSynthesis.PluscuaDeSubRa ]: () => verbFunction.pluscuaDeSubTense( found, stem, selectWord ),
            [ TenseSynthesis.PrePerfecto ]: () => verbFunction.prePerfecto( found, stem, selectWord ),
            [ TenseSynthesis.PretéritoPlu ]: () => verbFunction.prePluscuamperfecto( found, stem, selectWord ),
            [ TenseSynthesis.PretéritoPluPoint ]: () => verbFunction.pretéritoPluPoint( found, stem, selectWord ),
            [ TenseSynthesis.FuturoPerfecto ]: () => verbFunction.futuroPerfecto( found, stem, selectWord ),
            [ TenseSynthesis.ConditionalPerfecto ]: () => verbFunction.conditionalPerfecto( found, stem, selectWord ),
            [ TenseSynthesis.PretéritoPerDeSub ]: () => verbFunction.pretéritoPerDeSub( found, stem, selectWord ),
        };
        const irregularSynthesisHandlers = {
            [ TenseSynthesis.PluscuaDeSubRa ]: () => verbFunction.irrPluscuaDeSubTense( found, irregularData ),
            [ TenseSynthesis.PrePerfecto ]: () => verbFunction.irrPrePerfecto( found, irregularData ),
            [ TenseSynthesis.PretéritoPlu ]: () => verbFunction.irrPrePluscuamperfecto( found, irregularData ),
            [ TenseSynthesis.PretéritoPluPoint ]: () => verbFunction.irrPretéritoPluPoint( found, irregularData ),
            [ TenseSynthesis.FuturoPerfecto ]: () => verbFunction.irrFuturoPerfecto( found, irregularData ),
            [ TenseSynthesis.ConditionalPerfecto ]: () => verbFunction.irrConditionalPerfecto( found, irregularData ),
            [ TenseSynthesis.PretéritoPerDeSub ]: () => verbFunction.irrpretéritoPerDeSub( found, irregularData ),
        };
        const synthesisHandler = irrWord
            ? irregularSynthesisHandlers[ selectWord.tag ]
            : regularSynthesisHandlers[ selectWord.tag ];
        if ( synthesisHandler )
        {
            return synthesisHandler();
        }
        // 根據指定的時態進行變位
        switch ( selectWord.tag )
        {
            case Tense.Present:
            case Tense.Subjunctivo:
            case Tense.Pretérito:
            case Tense.Imperfect:
            case Tense.ImperfectSubjunctiveRa:
            case Tense.ImperfectSubjunctiveSe:
                {
                    const regularResult = verbFunction.simpleTense( found, stem, selectWord );

                    return verbFunction.mergeIrregular( regularResult, irrWord );
                }
            case Tense.Futuro:
            case Tense.Conditional:
                {
                    const regularResult = verbFunction.simpleTense( found, found.voc, selectWord );

                    return verbFunction.mergeIrregular( regularResult, irrWord );
                }
            case Tense.FutureSimple:
                {
                    if ( irrWord )
                    {
                        return verbFunction.irrFutureSimpleTense( found, irrWord, selectWord )
                    }
                    return verbFunction.futureSimpleTense( found, found.voc, selectWord );
                }
            case Tense.Gerund:
                if ( found.voc === "estar" )
                {
                    return verbFunction.gerundEstar( found, irrWord );
                }
                else if ( irrWord )
                {
                    return verbFunction.irrGerundTense( found, irrWord );
                }
                return verbFunction.gerundTense( found, stem, selectWord );
            case Tense.Imperative:
                {
                    const regularResult = verbFunction.imperativeTense( found, stem, selectWord );

                    return verbFunction.mergeIrregular( regularResult, irrWord );
                }
            case TenseSynthesis.PastGerund:
                if ( found.voc === "estar" )
                {
                    return verbFunction.pastGerundEstar( found.voc );
                }
                else if ( irrWord )
                {
                    return verbFunction.irrPastGerundTense( found, irregularData );
                }
                return verbFunction.pastGerundTense( found, stem, selectWord );
            default:
                console.log( "進入 default:", selectWord.tag );
                return [];
        }
    }
}

