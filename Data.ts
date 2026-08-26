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
    Se = "se",
    Le = "le",
}
export enum Tense
{
    Present = "Present(現在式)",
    Subjunctivo = "Subjunctivo(虛擬式)",
    Pretérito = "Pretérito(過去式)",
    Imperfect = "Imperfect",
    Futuro = "Futuro(未來式)",
    FutureSimple = "FutureSimple",
    Conditional = "Conditional(條件式)",
    ImperfectSubjunctiveRa = "ImperfectSubjunctiveRa",
    ImperfectSubjunctiveSe = "ImperfectSubjunctiveSe",
    Imperative = "Imperative",
    Gerund = "Gerund",
    PastGerund = "PastGerund",
    PretéritoPerDeSub = "PretéritoPerfectoDeSubjuntivo",
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