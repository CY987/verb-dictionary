import { Pronoun, Tense, TenseSynthesis, Type } from "./Data.js";
const EmptySuffix = {
    [Pronoun.Yo]: "",
    [Pronoun.Tú]: "",
    [Pronoun.ÉL]: "",
    [Pronoun.Nosotros]: "",
    [Pronoun.Vosotros]: "",
    [Pronoun.Ellos]: "",
};
const FutureSuffix = {
    [Pronoun.Yo]: "é",
    [Pronoun.Tú]: "ás",
    [Pronoun.ÉL]: "á",
    [Pronoun.Nosotros]: "emos",
    [Pronoun.Vosotros]: "éis",
    [Pronoun.Ellos]: "án",
};
const FutureSimpleHead = {
    [Pronoun.Yo]: "voy a ",
    [Pronoun.Tú]: "vas a ",
    [Pronoun.ÉL]: "va a ",
    [Pronoun.Nosotros]: "vamos a ",
    [Pronoun.Vosotros]: "vais a ",
    [Pronoun.Ellos]: "van a ",
};
const ConditionalSuffix = {
    [Pronoun.Yo]: "ía",
    [Pronoun.Tú]: "ías",
    [Pronoun.ÉL]: "ía",
    [Pronoun.Nosotros]: "íamos",
    [Pronoun.Vosotros]: "íais",
    [Pronoun.Ellos]: "ían",
};
const GerundArSuffix = {
    [Pronoun.Yo]: "ando",
    [Pronoun.Tú]: "ando",
    [Pronoun.ÉL]: "ando",
    [Pronoun.Nosotros]: "ando",
    [Pronoun.Vosotros]: "ando",
    [Pronoun.Ellos]: "ando",
};
const GerundErIrSuffix = {
    [Pronoun.Yo]: "iendo",
    [Pronoun.Tú]: "iendo",
    [Pronoun.ÉL]: "iendo",
    [Pronoun.Nosotros]: "iendo",
    [Pronoun.Vosotros]: "iendo",
    [Pronoun.Ellos]: "iendo",
};
const GerundSuffix = {
    [Type.Ar]: GerundArSuffix,
    [Type.Er]: GerundErIrSuffix,
    [Type.Ir]: GerundErIrSuffix,
    [Type.Se]: EmptySuffix,
    [Type.Le]: EmptySuffix,
};
const PastParticipleArSuffix = {
    [Pronoun.Yo]: "ado",
    [Pronoun.Tú]: "ado",
    [Pronoun.ÉL]: "ado",
    [Pronoun.Nosotros]: "ado",
    [Pronoun.Vosotros]: "ado",
    [Pronoun.Ellos]: "ado",
};
const PastParticipleErIrSuffix = {
    [Pronoun.Yo]: "ido",
    [Pronoun.Tú]: "ido",
    [Pronoun.ÉL]: "ido",
    [Pronoun.Nosotros]: "ido",
    [Pronoun.Vosotros]: "ido",
    [Pronoun.Ellos]: "ido",
};
const PastParticipleSuffix = {
    [Type.Ar]: PastParticipleArSuffix,
    [Type.Er]: PastParticipleErIrSuffix,
    [Type.Ir]: PastParticipleErIrSuffix,
    [Type.Se]: EmptySuffix,
    [Type.Le]: EmptySuffix,
};
export const ImperativeHead = {
    [Pronoun.Tú]: "",
    [Pronoun.TúNegativo]: "no ",
    [Pronoun.Usted]: "",
    [Pronoun.Nosotros]: "",
    [Pronoun.Vosotros]: "",
    [Pronoun.VosotrosNegativo]: "no ",
    [Pronoun.Ustedes]: "",
};
export const Morpheme = {
    [Tense.Present]: {
        [Type.Ar]: {
            [Pronoun.Yo]: "o",
            [Pronoun.Tú]: "as",
            [Pronoun.ÉL]: "a",
            [Pronoun.Nosotros]: "amos",
            [Pronoun.Vosotros]: "áis",
            [Pronoun.Ellos]: "an",
        },
        [Type.Er]: {
            [Pronoun.Yo]: "o",
            [Pronoun.Tú]: "es",
            [Pronoun.ÉL]: "e",
            [Pronoun.Nosotros]: "emos",
            [Pronoun.Vosotros]: "éis",
            [Pronoun.Ellos]: "en",
        },
        [Type.Ir]: {
            [Pronoun.Yo]: "o",
            [Pronoun.Tú]: "es",
            [Pronoun.ÉL]: "e",
            [Pronoun.Nosotros]: "imos",
            [Pronoun.Vosotros]: "ís",
            [Pronoun.Ellos]: "en",
        },
        [Type.Se]: {},
        [Type.Le]: {}
    },
    [Tense.Subjunctivo]: {
        [Type.Ar]: {
            [Pronoun.Yo]: "e",
            [Pronoun.Tú]: "es",
            [Pronoun.ÉL]: "e",
            [Pronoun.Nosotros]: "emos",
            [Pronoun.Vosotros]: "éis",
            [Pronoun.Ellos]: "en",
        },
        [Type.Er]: {
            [Pronoun.Yo]: "a",
            [Pronoun.Tú]: "as",
            [Pronoun.ÉL]: "a",
            [Pronoun.Nosotros]: "amos",
            [Pronoun.Vosotros]: "áis",
            [Pronoun.Ellos]: "an",
        },
        [Type.Ir]: {
            [Pronoun.Yo]: "a",
            [Pronoun.Tú]: "as",
            [Pronoun.ÉL]: "a",
            [Pronoun.Nosotros]: "amos",
            [Pronoun.Vosotros]: "áis",
            [Pronoun.Ellos]: "an",
        },
        [Type.Se]: {},
        [Type.Le]: {}
    },
    [Tense.Pretérito]: {
        [Type.Ar]: {
            [Pronoun.Yo]: "é",
            [Pronoun.Tú]: "aste",
            [Pronoun.ÉL]: "ó",
            [Pronoun.Nosotros]: "amos",
            [Pronoun.Vosotros]: "asteis",
            [Pronoun.Ellos]: "aron",
        },
        [Type.Er]: {
            [Pronoun.Yo]: "í",
            [Pronoun.Tú]: "iste",
            [Pronoun.ÉL]: "ió",
            [Pronoun.Nosotros]: "imos",
            [Pronoun.Vosotros]: "isteis",
            [Pronoun.Ellos]: "ieron",
        },
        [Type.Ir]: {
            [Pronoun.Yo]: "í",
            [Pronoun.Tú]: "iste",
            [Pronoun.ÉL]: "ió",
            [Pronoun.Nosotros]: "imos",
            [Pronoun.Vosotros]: "isteis",
            [Pronoun.Ellos]: "ieron",
        },
        [Type.Se]: {},
        [Type.Le]: {}
    },
    [Tense.Imperfect]: {
        [Type.Ar]: {
            [Pronoun.Yo]: "aba",
            [Pronoun.Tú]: "abas",
            [Pronoun.ÉL]: "aba",
            [Pronoun.Nosotros]: "ábamos",
            [Pronoun.Vosotros]: "abais",
            [Pronoun.Ellos]: "aban",
        },
        [Type.Er]: {
            [Pronoun.Yo]: "ía",
            [Pronoun.Tú]: "ías",
            [Pronoun.ÉL]: "ía",
            [Pronoun.Nosotros]: "íamos",
            [Pronoun.Vosotros]: "íais",
            [Pronoun.Ellos]: "ían",
        },
        [Type.Ir]: {
            [Pronoun.Yo]: "ía",
            [Pronoun.Tú]: "ías",
            [Pronoun.ÉL]: "ía",
            [Pronoun.Nosotros]: "íamos",
            [Pronoun.Vosotros]: "íais",
            [Pronoun.Ellos]: "ían",
        },
        [Type.Se]: {},
        [Type.Le]: {}
    },
    [Tense.Futuro]: {
        [Type.Ar]: FutureSuffix,
        [Type.Er]: FutureSuffix,
        [Type.Ir]: FutureSuffix,
        [Type.Se]: EmptySuffix,
        [Type.Le]: EmptySuffix,
    },
    [Tense.FutureSimple]: {
        [Type.Ar]: FutureSimpleHead,
        [Type.Er]: FutureSimpleHead,
        [Type.Ir]: FutureSimpleHead,
        [Type.Se]: FutureSimpleHead,
        [Type.Le]: FutureSimpleHead,
    },
    [Tense.Conditional]: {
        [Type.Ar]: ConditionalSuffix,
        [Type.Er]: ConditionalSuffix,
        [Type.Ir]: ConditionalSuffix,
        [Type.Se]: EmptySuffix,
        [Type.Le]: EmptySuffix,
    },
    [Tense.ImperfectSubjunctiveRa]: {
        [Type.Ar]: {
            [Pronoun.Yo]: "ara",
            [Pronoun.Tú]: "aras",
            [Pronoun.ÉL]: "ara",
            [Pronoun.Nosotros]: "áramos",
            [Pronoun.Vosotros]: "arais",
            [Pronoun.Ellos]: "aran",
        },
        [Type.Er]: {
            [Pronoun.Yo]: "iera",
            [Pronoun.Tú]: "ieras",
            [Pronoun.ÉL]: "iera",
            [Pronoun.Nosotros]: "iéramos",
            [Pronoun.Vosotros]: "ierais",
            [Pronoun.Ellos]: "ieran",
        },
        [Type.Ir]: {
            [Pronoun.Yo]: "iera",
            [Pronoun.Tú]: "ieras",
            [Pronoun.ÉL]: "iera",
            [Pronoun.Nosotros]: "iéramos",
            [Pronoun.Vosotros]: "ierais",
            [Pronoun.Ellos]: "ieran",
        },
        [Type.Se]: {},
        [Type.Le]: {}
    },
    [Tense.ImperfectSubjunctiveSe]: {
        [Type.Ar]: {
            [Pronoun.Yo]: "ase",
            [Pronoun.Tú]: "ases",
            [Pronoun.ÉL]: "ase",
            [Pronoun.Nosotros]: "ásemos",
            [Pronoun.Vosotros]: "aseis",
            [Pronoun.Ellos]: "asen",
        },
        [Type.Er]: {
            [Pronoun.Yo]: "iese",
            [Pronoun.Tú]: "ieses",
            [Pronoun.ÉL]: "iese",
            [Pronoun.Nosotros]: "iésemos",
            [Pronoun.Vosotros]: "ieseis",
            [Pronoun.Ellos]: "iesen",
        },
        [Type.Ir]: {
            [Pronoun.Yo]: "iese",
            [Pronoun.Tú]: "ieses",
            [Pronoun.ÉL]: "iese",
            [Pronoun.Nosotros]: "iésemos",
            [Pronoun.Vosotros]: "ieseis",
            [Pronoun.Ellos]: "iesen",
        },
        [Type.Se]: {},
        [Type.Le]: {}
    },
    [Tense.Gerund]: GerundSuffix,
    [TenseSynthesis.PastGerund]: GerundSuffix,
    [Tense.PastParticiple]: PastParticipleSuffix,
    [Tense.Imperative]: {
        [Type.Ar]: {
            [Pronoun.Tú]: "a",
            [Pronoun.TúNegativo]: "es",
            [Pronoun.Usted]: "e",
            [Pronoun.Nosotros]: "emos",
            [Pronoun.Vosotros]: "ad",
            [Pronoun.VosotrosNegativo]: "éis",
            [Pronoun.Ustedes]: "en",
        },
        [Type.Er]: {
            [Pronoun.Tú]: "e",
            [Pronoun.TúNegativo]: "as",
            [Pronoun.Usted]: "a",
            [Pronoun.Nosotros]: "amos",
            [Pronoun.Vosotros]: "ed",
            [Pronoun.VosotrosNegativo]: "áis",
            [Pronoun.Ustedes]: "an",
        },
        [Type.Ir]: {
            [Pronoun.Tú]: "e",
            [Pronoun.TúNegativo]: "as",
            [Pronoun.Usted]: "a",
            [Pronoun.Nosotros]: "amos",
            [Pronoun.Vosotros]: "id",
            [Pronoun.VosotrosNegativo]: "áis",
            [Pronoun.Ustedes]: "an",
        },
        [Type.Se]: {},
        [Type.Le]: {}
    },
};
