export interface VerbForm
{
    voc: string;
    meaning: string;
    tag: Tense[];
    personal: string[];
    personalImperative: string[];
    regular: boolean;
}
export interface WordType
{
    word: string,
    tag: Tense,
    type: Type,
}
export enum Type
{
    Er = "er",
    Ar = "ar",
    Ir = "ir",
}
export enum Tense
{
    Present = "Present",
    Subjunctive = "Subjunctive",
    Pretérito = "Pretérito",
    Imperfect = "Imperfect",
    Future = "Future",
    FutureSimple = "FutureSimple",
    Conditional = "Conditional",
    ImperfectSubjunctiveRa = "ImperfectSubjunctiveRa",
    ImperfectSubjunctiveSe = "ImperfectSubjunctiveSe",
    Imperative = "Imperative",
    Gerund = "Gerund",
    PastGerund = "PastGerund",
    presentPerfect = "presentPerfect",
}
export enum Pronoun
{
    Yo = "yo",
    Tú = "tú",
    ÉL = "él",
    Nosotros = "nosotros",
    Vosotros = "vosotros",
    Ellos = "ellos",
    TúNegativo = "túNegativo",
    Usted = "usted",
    VosotrosNegativo = "vosotrosNegativo",
    Ustedes = "ustedes",
}
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