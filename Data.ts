export interface VerbForm
{
    voc: string;
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
    Conditional = "Conditional",
    ImperfectSubjunctiveRa = "ImperfectSubjunctiveRa",
    ImperfectSubjunctiveSe = "ImperfectSubjunctiveSe",
    Imperative = "Imperative",
    Gerund = "Gerund",
    PastParticiple = "PastParticiple",
}
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

const ErVerb: VerbForm[] =
    [
        { voc: "comer", tag: ALL_MAIN_TENSES, personal: [ "yo", "tú", "él", "nosotros", "vosotros", "ellos" ], personalImperative: [ "tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes" ], regular: true },
        { voc: "aprender", tag: ALL_MAIN_TENSES, personal: [ "yo", "tú", "él", "nosotros", "vosotros", "ellos" ], personalImperative: [ "tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes" ], regular: true }
    ]

const ArVerb: VerbForm[] =
    [
        { voc: "hablar", tag: ALL_MAIN_TENSES, personal: [ "yo", "tú", "él", "nosotros", "vosotros", "ellos" ], personalImperative: [ "tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes" ], regular: true },
        { voc: "tomar", tag: ALL_MAIN_TENSES, personal: [ "yo", "tú", "él", "nosotros", "vosotros", "ellos" ], personalImperative: [ "tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes" ], regular: true }
    ]
const IrVerb: VerbForm[] =
    [
        { voc: "vivir", tag: ALL_MAIN_TENSES, personal: [ "yo", "tú", "él", "nosotros", "vosotros", "ellos" ], personalImperative: [ "tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes" ], regular: true },
        { voc: "escribir", tag: ALL_MAIN_TENSES, personal: [ "yo", "tú", "él", "nosotros", "vosotros", "ellos" ], personalImperative: [ "tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes" ], regular: true }
    ]
export const WordDataMap: Map<Type, VerbForm[]> = new Map();
WordDataMap.set( Type.Ar, ArVerb );
WordDataMap.set( Type.Er, ErVerb );
WordDataMap.set( Type.Ir, IrVerb );