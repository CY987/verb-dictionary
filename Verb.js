import { Tense, TenseSynthesis } from "./Data.js";
import { WordDataMap } from "./RegularVerbData.js";
import { VerbFunction } from "./VerbFunction.js";
import { nonRegularVerbs } from "./NewIrregularVerbData.js";
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
        let irregularData;
        if (!found.regular) {
            // const irregularData = irregular.find(
            //     item => item.voc === found.voc
            // );
            irregularData = nonRegularVerbs.find(item => item.voc === found.voc);
            irrWord = irregularData?.obj[selectWord.tag];
        }
        // 取得字根 (例如 "comer" -> "com")
        const stem = VerbFunction.Instance.getStem(found.voc);
        console.log("selectWord.tag =", selectWord.tag);
        console.log("TenseSynthesis.PretéritoPerDeSub =", TenseSynthesis.PretéritoPerDeSub);
        console.log("是否相等 =", selectWord.tag === TenseSynthesis.PretéritoPerDeSub);
        // 根據指定的時態進行變位
        switch (selectWord.tag) {
            case Tense.Present:
                {
                    const regularResult = VerbFunction.Instance.presentTense(found, stem, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.Subjunctivo:
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
            case Tense.Futuro:
                {
                    const regularResult = VerbFunction.Instance.futureTense(found, found.voc, selectWord);
                    return VerbFunction.Instance.mergeIrregular(regularResult, irrWord);
                }
            case Tense.FutureSimple:
                {
                    if (irrWord) {
                        return VerbFunction.Instance.irrFutureSimpleTense(found, irrWord, selectWord);
                    }
                    return VerbFunction.Instance.futureSimpleTense(found, found.voc, selectWord);
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
                if (found.voc === "estar") {
                    return VerbFunction.Instance.gerundEstar(found, irrWord);
                }
                else if (irrWord) {
                    return VerbFunction.Instance.irrGerundTense(found, irrWord);
                }
                return VerbFunction.Instance.gerundTense(found, stem, selectWord);
            case TenseSynthesis.PastGerund:
                if (found.voc === "estar") {
                    return VerbFunction.Instance.pastGerundEstar(found.voc);
                }
                else if (irrWord) {
                    return VerbFunction.Instance.irrPastGerundTense(found, irregularData);
                }
                return VerbFunction.Instance.pastGerundTense(found, stem, selectWord);
            case TenseSynthesis.PretéritoPerDeSub:
                if (irrWord) {
                    return VerbFunction.Instance.irrPretéritoPerDeSubTense(found, irregularData);
                }
                return VerbFunction.Instance.pretéritoPerDeSubTense(found, stem, selectWord);
            case TenseSynthesis.PrePerfecto:
                if (irrWord) {
                    return VerbFunction.Instance.irrPretéritoPerDeSubTense(found, irregularData);
                }
                return VerbFunction.Instance.prePerfecto(found, stem, selectWord);
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
