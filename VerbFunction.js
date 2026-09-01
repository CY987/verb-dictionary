import { Tense } from "./Data.js";
import { ImperativeHead, Morpheme, } from "./RegularVerbEnding.js";
import { nonRegularVerbs } from "./NewIrregularVerbData.js";
export class VerbFunction {
    constructor() {
        this._estarPresent = this.getWord("estar", Tense.Present);
        this._estarPretérito = this.getWord("estar", Tense.Pretérito);
        this._haberPresent = this.getWord("haber", Tense.Present);
        this._haberSubjunctivoRa = this.getWord("haber", Tense.ImperfectSubjunctiveRa);
    }
    static get Instance() {
        if (!VerbFunction._instance) {
            VerbFunction._instance = new VerbFunction();
        }
        return VerbFunction._instance;
    }
    getWord(voc, tense) {
        const irregularData = nonRegularVerbs.find(item => item.voc === voc);
        return irregularData.obj[tense];
    }
    getElement(tense, type) {
        return Morpheme[tense][type];
    }
    getStem(found) {
        return found.slice(0, -2);
    }
    presentTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => Item + table[p]);
    }
    subjunctiveTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => Item + table[p]);
    }
    pretéritoTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => Item + table[p]);
    }
    imperfectTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => Item + table[p]);
    }
    futureTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => Item + table[p]);
    }
    futureSimpleTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => table[p] + Item);
    }
    conditionalTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => Item + table[p]);
    }
    impSubRaTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => Item + table[p]);
    }
    impSubSeTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map(p => Item + table[p]);
    }
    gerundTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map((p, index) => this._estarPresent[index] + " " + Item + table[p]);
        // return found.personal.map( p => EstarPresentHead[ p ] + Item + table[ p ] );
    }
    pastGerundTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map((p, index) => this._estarPretérito[index] + " " + Item + table[p]);
    }
    pretéritoPerDeSubTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        // return found.personal.map( p => Item + table[ p ] );
        return found.personal.map((p, index) => this._haberSubjunctivoRa[index] + " " + Item + table[p]);
    }
    imperativeTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        // return found.personalImperative.map( p => Item + table[ p ] );
        return found.personalImperative.map(p => ImperativeHead[p] + Item + table[p]);
    }
    gerundEstar(found, Item) {
        return found.personal.map(p => Item[0]);
    }
    prePerfecto(found, Item) {
        return found.personal.map((p, index) => this._haberPresent[index] + " " + Item[0]);
    }
    // irregular-----------------------------
    irrFutureSimpleTense(found, Item, word) {
        const table = this.getElement(word.tag, word.type);
        return found.personal.map((p, index) => table[p] + Item[index]);
    }
    irrPretéritoPerDeSubTense(found, Item) {
        // return found.personal.map( p => Item[ 0 ] );
        return found.personal.map((p, index) => this._haberSubjunctivoRa[index] + " " + Item[0]);
    }
    irrGerundTense(found, Item) {
        // return found.personal.map( p => Item[ 0 ] );
        return found.personal.map((p, index) => this._estarPresent[index] + " " + Item[0]);
    }
    irrPastGerundTense(found, Item) {
        // return found.personal.map( p => Item[ 0 ] );
        return found.personal.map((p, index) => this._estarPretérito[index] + " " + Item[0]);
    }
    mergeIrregular(regularResult, irregularResult) {
        if (!irregularResult) {
            return regularResult;
        }
        return regularResult.map((regularValue, index) => {
            return irregularResult[index] !== undefined
                ? irregularResult[index]
                : regularValue;
        }
        // irregularResult[ index ] || regularValue
        );
    }
    merge(irregularResult) {
        return;
    }
}
