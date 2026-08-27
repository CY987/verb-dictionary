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
    Tense["Imperfect"] = "Imperfecto(\u672A\u5B8C\u6210\u5F0F)";
    Tense["Futuro"] = "Futuro(\u672A\u4F86\u5F0F)";
    Tense["FutureSimple"] = "FutureSimple(\u672A\u4F86\u7C21\u55AE\u5F0F)";
    Tense["Conditional"] = "Conditional(\u689D\u4EF6\u5F0F)";
    Tense["ImperfectSubjunctiveRa"] = "\u672A\u5B8C\u6210\u865B\u64EC\u5F0FRa";
    Tense["ImperfectSubjunctiveSe"] = "\u672A\u5B8C\u6210\u865B\u64EC\u5F0FSe";
    Tense["Imperative"] = "Imperative(\u7948\u4F7F\u5F0F)";
    Tense["Gerund"] = "\u73FE\u5728\u9032\u884C(estar\u73FE\u5728\u5F0F+\u73FE\u5728\u5206\u8A5E)";
    Tense["PastGerund"] = "\u904E\u53BB\u9032\u884C(estar\u904E\u53BB\u5F0F+\u73FE\u5728\u5206\u8A5E)";
    Tense["Pret\u00E9ritoPerDeSub"] = "\u904E\u53BB\u5B8C\u6210\u865B\u64EC\u5F0F";
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
