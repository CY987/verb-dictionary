export var Type;
(function (Type) {
    Type["Er"] = "er";
    Type["Ar"] = "ar";
    Type["Ir"] = "ir";
    Type["Se"] = "se";
    Type["Le"] = "le";
})(Type || (Type = {}));
export var Tense;
(function (Tense) {
    Tense["Present"] = "Present(\u73FE\u5728\u5F0F)";
    Tense["Subjunctivo"] = "Subjunctivo(\u865B\u64EC\u5F0F)";
    Tense["Pret\u00E9rito"] = "Pret\u00E9rito(\u904E\u53BB\u5F0F)";
    Tense["Imperfect"] = "Imperfect";
    Tense["Futuro"] = "Futuro(\u672A\u4F86\u5F0F)";
    Tense["FutureSimple"] = "FutureSimple";
    Tense["Conditional"] = "Conditional(\u689D\u4EF6\u5F0F)";
    Tense["ImperfectSubjunctiveRa"] = "ImperfectSubjunctiveRa";
    Tense["ImperfectSubjunctiveSe"] = "ImperfectSubjunctiveSe";
    Tense["Imperative"] = "Imperative";
    Tense["Gerund"] = "Gerund";
    Tense["PastGerund"] = "PastGerund";
    Tense["Pret\u00E9ritoPerDeSub"] = "Pret\u00E9ritoPerfectoDeSubjuntivo";
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
    Tense.Futuro,
    Tense.FutureSimple,
    Tense.Imperfect,
    Tense.Pretérito,
    Tense.Subjunctivo,
    Tense.ImperfectSubjunctiveRa,
    Tense.ImperfectSubjunctiveSe,
    Tense.PretéritoPerDeSub,
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
