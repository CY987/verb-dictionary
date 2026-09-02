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
    tag: Tense | TenseSyn,
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
    Present = "Present:現在式",
    Subjunctivo = "Subjunctivo:虛擬式",
    Pretérito = "Pretérito:過去式",
    Imperfect = "Imperfecto:未完成式",
    Futuro = "Futuro:未來式",
    FutureSimple = "FutureSimple:未來簡單式",
    Conditional = "Conditional:條件式",
    ImperfectSubjunctiveRa = "未完成虛擬式Ra",
    ImperfectSubjunctiveSe = "未完成虛擬式Se",
    Imperative = "Imperative:祈使式",
    Gerund = "現在進行式:estar現在式+現在分詞",
    PastParticiple = "過去分詞",

}
export enum TenseSyn
{
    PastGerund = "過去進行式:estar過去式+現在分詞",
    PretéritoPerDeSub = "過去完成虛擬式:haber未完成虛擬式+過去分詞",
    PrePerfecto = "現在完成式:haber現在式+過去分詞",
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
    Tense.PastParticiple,
    Tense.Gerund,
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