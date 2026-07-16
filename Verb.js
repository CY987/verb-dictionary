import { Tense } from "./Data.js";
import { WordDataMap } from "./RegularVerbData.js";
import { VerbFunction } from "./VerbFunction.js";
import { irregular } from "./IrregularVerbData.js";
export class VerbConjugator {
    constructor() { }
    conjugate(selectWord) {
        const targetTable = WordDataMap.get(selectWord.type);
        if (!targetTable) {
            console.warn(`找不到類型: ${selectWord.type} 的動詞庫`);
            return [];
        }
        const found = targetTable.find(item => item.voc === selectWord.word);
        if (!found) {
            console.warn(`找不到動詞: ${selectWord.word} 或該動詞不支援時態: ${selectWord.tag}`);
            return [];
        }
        // 僅在動詞標記為不規則時，尋找目前時態的不規則結果
        let irrWord;
        if (!found.regular) {
            const irregularData = irregular.find(item => item.voc === found.voc);
            irrWord = irregularData?.obj[selectWord.tag];
        }
        // 取得字根 (例如 "comer" -> "com")
        const stem = VerbFunction.Instance.getStem(found.voc);
        // 根據指定的時態進行變位
        switch (selectWord.tag) {
            case Tense.Present:
                {
                    const regularResult = VerbFunction.Instance.presentTense(found, stem, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.Subjunctive:
                {
                    const regularResult = VerbFunction.Instance.subjunctiveTense(found, stem, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.Pretérito:
                {
                    const regularResult = VerbFunction.Instance.pretéritoTense(found, stem, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.Imperfect:
                {
                    const regularResult = VerbFunction.Instance.imperfectTense(found, stem, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.Future:
                {
                    const regularResult = VerbFunction.Instance.futureTense(found, found.voc, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.FutureSimple:
                {
                    const regularResult = VerbFunction.Instance.futureSimpleTense(found, found.voc, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.Conditional:
                {
                    const regularResult = VerbFunction.Instance.conditionalTense(found, found.voc, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.ImperfectSubjunctiveRa:
                {
                    const regularResult = VerbFunction.Instance.impSubRaTense(found, stem, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.ImperfectSubjunctiveSe:
                {
                    const regularResult = VerbFunction.Instance.impSubSeTense(found, stem, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.Gerund:
                if (irrWord) {
                    return VerbFunction.Instance.irrGerundTense(found, irrWord);
                }
                return VerbFunction.Instance.gerundTense(found, stem, selectWord);
            case Tense.PastGerund:
                if (irrWord) {
                    return VerbFunction.Instance.irrPastGerundTense(found, irrWord);
                }
                return VerbFunction.Instance.pastGerundTense(found, stem, selectWord);
            case Tense.PretéritoPerDeSub:
                if (irrWord) {
                    return VerbFunction.Instance.irrPretéritoPerDeSubTense(found, irrWord);
                }
                return VerbFunction.Instance.pretéritoPerDeSubTense(found, stem, selectWord);
            case Tense.Imperative:
                {
                    const regularResult = VerbFunction.Instance.imperativeTense(found, stem, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            // return VerbFunction.Instance.imperativeTense( found, stem, selectWord );
            default:
                console.log("進入 default:", selectWord.tag);
                return [];
        }
    }
}
