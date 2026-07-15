import { Pronoun, Type } from "./Data.js";
export const Ending = {
    Present: {
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
    },
    Preterite: {},
    Imperfect: {},
    Future: {},
};
