import { Tense } from "./Data.js";
import { ImperativeHead, Morpheme, } from "./RegularVerbEnding.js";
import { nonRegularVerbs } from "./NewIrregularVerbData.js";
export class VerbFunction {
    constructor() {
        this._estarPresent = this.getWord("estar", Tense.Present);
        this._estarPretérito = this.getWord("estar", Tense.Pretérito);
        this._haberPresent = this.getWord("haber", Tense.Present);
        this._haberPretérito = this.getWord("haber", Tense.Pretérito);
        this._haberImperfect = this.getWord("haber", Tense.Imperfect);
        this._haberFuturo = this.getWord("haber", Tense.Futuro);
        this._haberConditional = this.getWord("haber", Tense.Conditional);
        this._haberSubjunctivo = this.getWord("haber", Tense.Subjunctivo);
        this._haberImSubjunctivoRa = this.getWord("haber", Tense.ImperfectSubjunctiveRa);
    }
    static get Instance() {
        if (!VerbFunction._instance) {
            VerbFunction._instance = new VerbFunction();
        }
        return VerbFunction._instance;
    }
    getWord(voc, tense) {
        const irregularData = nonRegularVerbs.find(item => item.voc === voc);
        console.log("getWord:", voc, tense, irregularData);
        return irregularData.obj[tense];
    }
    getElement(tense, type) {
        return Morpheme[tense][type];
    }
    getStem(found) {
        return found.slice(0, -2);
    }
    simpleTense(found, item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => item + table[p]);
    }
    perfectTense(found, item, word, haber) {
        const table = this.getElement(Tense.PastParticiple, word.type);
        return found.personal.map((p, index) => haber[index] + " " + item + table[p]);
    }
    irregularPerfectTense(found, word, haber) {
        const item = this.getWord(word.voc, Tense.PastParticiple);
        return found.personal.map((_, index) => haber[index] + " " + item[0]);
    }
    futureSimpleTense(found, item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => table[p] + item);
    }
    gerundTense(found, item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map((p, index) => this._estarPresent[index] + " " + item + table[p]);
    }
    pastGerundTense(found, item, word) {
        const table = this.getElement(Tense.Gerund, word.type);
        return found.personal.map((p, index) => this._estarPretérito[index] + " " + item + table[p]);
    }
    imperativeTense(found, item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personalImperative.map(p => ImperativeHead[p] + item + table[p]);
    }
    gerundEstar(found, item) {
        return found.personal.map(() => item[0]);
    }
    pastGerundEstar(item) {
        return this.getWord(item, Tense.Gerund);
    }
    prePerfecto(found, item, word) {
        return this.perfectTense(found, item, word, this._haberPresent);
    }
    prePluscuamperfecto(found, item, word) {
        return this.perfectTense(found, item, word, this._haberImperfect);
    }
    pretéritoPluPoint(found, item, word) {
        return this.perfectTense(found, item, word, this._haberPretérito);
    }
    futuroPerfecto(found, item, word) {
        return this.perfectTense(found, item, word, this._haberFuturo);
    }
    conditionalPerfecto(found, item, word) {
        return this.perfectTense(found, item, word, this._haberConditional);
    }
    pretéritoPerDeSub(found, item, word) {
        return this.perfectTense(found, item, word, this._haberSubjunctivo);
    }
    pluscuaDeSubTense(found, item, word) {
        return this.perfectTense(found, item, word, this._haberImSubjunctivoRa);
    }
    pretéritoPluDeSubRa(found, item, word) {
        const table = this.getElement(Tense.PastParticiple, word.type);
        return found.personal.map((p, index) => this._haberSubjunctivo[index] + " " + item + table[p]);
    }
    // irregular-----------------------------
    irrFutureSimpleTense(found, item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map((p, index) => {
            if ((found.voc === "llover" || found.voc === "nevar") && index !== 2) {
                return "";
            }
            return table[p] + item[index];
        });
    }
    irrGerundTense(found, item) {
        return found.personal.map((p, index) => this._estarPresent[index] + " " + item[0]);
    }
    irrPastGerundTense(found, word) {
        const item = this.getWord(word.voc, Tense.Gerund);
        return found.personal.map((p, index) => this._estarPretérito[index] + " " + item[0]);
    }
    irrPluscuaDeSubTense(found, word) {
        return this.irregularPerfectTense(found, word, this._haberImSubjunctivoRa);
    }
    irrPrePerfecto(found, word) {
        return this.irregularPerfectTense(found, word, this._haberPresent);
    }
    irrPrePluscuamperfecto(found, word) {
        return this.irregularPerfectTense(found, word, this._haberImperfect);
    }
    irrPretéritoPluPoint(found, word) {
        return this.irregularPerfectTense(found, word, this._haberPretérito);
    }
    irrFuturoPerfecto(found, word) {
        return this.irregularPerfectTense(found, word, this._haberFuturo);
    }
    irrConditionalPerfecto(found, word) {
        return this.irregularPerfectTense(found, word, this._haberConditional);
    }
    irrpretéritoPerDeSub(found, word) {
        return this.irregularPerfectTense(found, word, this._haberSubjunctivo);
    }
    mergeIrregular(regularResult, irregularResult) {
        if (!irregularResult) {
            return regularResult;
        }
        return regularResult.map((regularValue, index) => irregularResult[index] ??
            regularValue
        // {
        // return irregularResult[ index ] !== undefined
        //     ? irregularResult[ index ]
        //     : regularValue;
        // }
        );
    }
}
