import { Tense, WordDataMap } from "./Data.js";
import { VerbFunction } from "./VerbFunction.js";
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
        // 取得字根 (例如 "comer" -> "com")
        const stem = VerbFunction.Instance.getStem(found.voc);
        // 根據指定的時態進行變位
        switch (selectWord.tag) {
            case Tense.Present:
                return VerbFunction.Instance.presentTense(found, stem, selectWord.type);
            case Tense.Subjunctive:
                return VerbFunction.Instance.subjunctiveTense(found, stem, selectWord.type);
            case Tense.Pretérito:
                return VerbFunction.Instance.pretéritoTense(found, stem, selectWord.type);
            case Tense.Imperfect:
                return VerbFunction.Instance.imperfectTense(found, stem, selectWord.type);
            case Tense.Future:
                return VerbFunction.Instance.futureTense(found, found.voc, selectWord.type);
            case Tense.Conditional:
                return VerbFunction.Instance.conditionalTense(found, found.voc, selectWord.type);
            case Tense.ImperfectSubjunctiveRa:
                return VerbFunction.Instance.impSubRaTense(found, stem, selectWord.type);
            case Tense.ImperfectSubjunctiveSe:
                return VerbFunction.Instance.impSubSeTense(found, stem, selectWord.type);
            case Tense.Gerund:
                return VerbFunction.Instance.gerundTense(found, stem, selectWord.type);
            case Tense.PastGerund:
                return VerbFunction.Instance.pastGerundTense(found, stem, selectWord.type);
            case Tense.presentPerfect:
                return VerbFunction.Instance.presentPerfectTense(found, stem, selectWord.type);
            case Tense.Imperative:
                return VerbFunction.Instance.imperativeTense(found, stem, selectWord.type);
            default:
                console.log("進入 default:", selectWord.tag);
                return [];
        }
    }
}
