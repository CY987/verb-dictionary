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
    Tense["FutureSimple"] = "FutureSimple";
    Tense["Conditional"] = "Conditional";
    Tense["ImperfectSubjunctiveRa"] = "ImperfectSubjunctiveRa";
    Tense["ImperfectSubjunctiveSe"] = "ImperfectSubjunctiveSe";
    Tense["Imperative"] = "Imperative";
    Tense["Gerund"] = "Gerund";
    Tense["PastGerund"] = "PastGerund";
    Tense["presentPerfect"] = "presentPerfect";
})(Tense || (Tense = {}));
export var Pronoun;
(function (Pronoun) {
    Pronoun["Yo"] = "yo";
    Pronoun["T\u00FA"] = "t\u00FA";
    Pronoun["\u00C9L"] = "\u00E9l";
    Pronoun["Nosotros"] = "nosotros";
    Pronoun["Vosotros"] = "vosotros";
    Pronoun["Ellos"] = "ellos";
    Pronoun["T\u00FANegativo"] = "t\u00FANegativo";
    Pronoun["Usted"] = "usted";
    Pronoun["VosotrosNegativo"] = "vosotrosNegativo";
    Pronoun["Ustedes"] = "ustedes";
})(Pronoun || (Pronoun = {}));
export const ALL_MAIN_TENSES = [
    Tense.Present,
    Tense.Conditional,
    Tense.Future,
    Tense.FutureSimple,
    Tense.Imperfect,
    Tense.Pretérito,
    Tense.Subjunctive,
    Tense.ImperfectSubjunctiveRa,
    Tense.ImperfectSubjunctiveSe,
    Tense.presentPerfect,
    Tense.Gerund,
    Tense.PastGerund,
    Tense.Imperative,
];
export const DEFAULT_PERSONAL = [
    Pronoun.Yo,
    Pronoun.Tú,
    Pronoun.ÉL,
    Pronoun.Nosotros,
    Pronoun.Vosotros,
    Pronoun.Ellos,
];
export const DEFAULT_IMPERATIVE_PERSONAL = [
    Pronoun.Tú,
    Pronoun.TúNegativo,
    Pronoun.Usted,
    Pronoun.Nosotros,
    Pronoun.Vosotros,
    Pronoun.VosotrosNegativo,
    Pronoun.Ustedes,
];
