import { Tense } from "./Data.js";
export const irregular = [
    {
        voc: "abrazar", obj: {
            [Tense.Subjunctive]: ["abrace", "abraces", "abrace", "abracemos", "abracéis", "abracen"],
            [Tense.Pretérito]: ["abracé", "", "", "", "", ""],
            [Tense.Imperative]: ["", "no abraces", "abrace", "abracemos", "", "no abracéis", "abracen"],
        }
    },
    {
        voc: "abrigar", obj: {
            [Tense.Subjunctive]: ["abrigue", "abrigues", "abrigue", "abriguemos", "abriguéis", "abriguen"],
            [Tense.Pretérito]: ["abrigué", "", "", "", "", ""],
            [Tense.Imperative]: ["", "no abrigues", "abrigue", "abriguemos", "", "no abriguéis", "abriguen"],
        }
    },
    { voc: "abrir", obj: { [Tense.PretéritoPerDeSub]: ["abierto",] } },
    {
        voc: "leer", obj: {
            [Tense.Pretérito]: ["", "leíste", "leyó", "leímos", "leísteis", "leyeron"],
            [Tense.ImperfectSubjunctiveRa]: ["leyera", "leyeras", "leyera", "leyéramos", "leyerais", "leyeran"],
            [Tense.ImperfectSubjunctiveSe]: ["leyese", "leyeses", "leyese", "leyésemos", "leyeseis", "leyesen"],
            [Tense.Gerund]: ["leyendo"],
            [Tense.PastGerund]: ["leyendo"],
            [Tense.PretéritoPerDeSub]: ["leído"],
        }
    },
    {
        voc: "ser", obj: {
            [Tense.Present]: ["soy", "eres", "es", "somos", "sois", "son"],
            [Tense.Subjunctive]: ["sea", "seas", "sea", "seamos", "seáis", "sean"],
            [Tense.Pretérito]: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
            [Tense.Imperfect]: ["era", "eras", "era", "éramos", "erais", "eran"],
            [Tense.ImperfectSubjunctiveRa]: ["fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran"],
            [Tense.ImperfectSubjunctiveSe]: ["fuese", "fueses", "fuese", "fuésemos", "fueseis", "fuesen"],
            [Tense.Imperative]: ["sé", "no seas", "sea", "seamos", "", "no seáis", "sean"],
        }
    },
];
