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
    Tense.ImperfectSubjunctiveRa,
    Tense.ImperfectSubjunctiveSe,
    Tense.PastParticiple,
    Tense.Gerund,
    Tense.Imperative,
];
const ErVerb = [
    { voc: "aprender", meaning: "to learn", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "barrer", meaning: "to sweep", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "beber", meaning: "to drink", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "comer", meaning: "to eat", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "correr", meaning: "to run", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "deber", meaning: "should", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "meter", meaning: "to put in", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "prender", meaning: "to catch", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "temer", meaning: "to fear", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "toser", meaning: "to cough", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "vender", meaning: "to sell", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
];
const ArVerb = [
    { voc: "amar", meaning: "to love", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "ayudar", meaning: "to help", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "bailar", meaning: "to dancce", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "cambiar", meaning: "to change", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "cantar", meaning: "to sing", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "dejar", meaning: "to leave", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "entrar", meaning: "to enter", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "esperar", meaning: "to wait, hope", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "expresar", meaning: "to express", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "ganar", meaning: "to win, earn", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "gastar", meaning: "to spend, waste", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "hablar", meaning: "to speak", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "lavar", meaning: "to wash", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "limpair", meaning: "to clean", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "llevar", meaning: "to take, to wear", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "mandar", meaning: "to order, ask for", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "marchar", meaning: "to walk, work a machime", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "mirar", meaning: "to watch", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "montar", meaning: "to climb, go up", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "nadar", meaning: "to swim", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "olvidar", meaning: "to forget, omit", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "parar", meaning: "to stop", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "preparar", meaning: "to prepare", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "quedar", meaning: "to stay", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "tirar", meaning: "to pull; to throw", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "tomar", meaning: "to take, drink", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "trabajar", meaning: "to work", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "viajar", meaning: "to travel", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
];
const IrVerb = [
    { voc: "añadir", meaning: "to add", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "asistir", meaning: "to attend", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "describir", meaning: "to describe", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "discutir", meaning: "to discuss", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "escribir", meaning: "to write", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "interrumpir", meaning: "to interrupt", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "ocurrir", meaning: "to occur", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "partir", meaning: "to leave", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "recibir", meaning: "to receive", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "subir", meaning: "to go up, climb", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "sufrir", meaning: "to suffer", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
    { voc: "vivir", meaning: "to live", tag: ALL_MAIN_TENSES, personal: ["yo", "tú", "él", "nosotros", "vosotros", "ellos"], personalImperative: ["tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes"], regular: true },
];
export const WordDataMap = new Map();
WordDataMap.set(Type.Ar, ArVerb);
WordDataMap.set(Type.Er, ErVerb);
WordDataMap.set(Type.Ir, IrVerb);
