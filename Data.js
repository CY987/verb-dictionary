export var Type;
(function (Type) {
    Type["Er"] = "er";
    Type["Ar"] = "ar";
    Type["Ir"] = "ir";
})(Type || (Type = {}));
export var Tense;
(function (Tense) {
    Tense["Present"] = "Present";
    Tense["Subjunctive"] = "Subjunctive";
    Tense["Pret\u00E9rito"] = "Pret\u00E9rito";
    Tense["Imperfect"] = "Imperfect";
    Tense["Future"] = "Future";
    Tense["Conditional"] = "Conditional";
    Tense["ImperfectSubjunctiveRa"] = "ImperfectSubjunctiveRa";
    Tense["ImperfectSubjunctiveSe"] = "ImperfectSubjunctiveSe";
    Tense["Imperative"] = "Imperative";
    Tense["Gerund"] = "Gerund";
    Tense["PastParticiple"] = "PastParticiple";
})(Tense || (Tense = {}));
export const ALL_MAIN_TENSES = [
    Tense.Present,
    Tense.Conditional,
    Tense.Future,
    Tense.Imperfect,
    Tense.Pretérito,
    Tense.Subjunctive,
    Tense.Gerund,
    Tense.Imperative,
    Tense.ImperfectSubjunctiveRa,
    Tense.ImperfectSubjunctiveSe,
    Tense.PastParticiple,
];
const ErVerb = [
    { voc: "comer", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustededs"], regular: true },
    { voc: "aprender", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustededs"], regular: true }
];
const ArVerb = [
    { voc: "hablar", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustededs"], regular: true },
    { voc: "tomar", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustededs"], regular: true }
];
const IrVerb = [
    { voc: "vivir", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustededs"], regular: true },
    { voc: "escribir", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustededs"], regular: true }
];
export const WordDataMap = new Map();
WordDataMap.set(Type.Ar, ArVerb);
WordDataMap.set(Type.Er, ErVerb);
WordDataMap.set(Type.Ir, IrVerb);
