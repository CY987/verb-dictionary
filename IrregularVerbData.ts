import { Tense } from "./Data.js";

export interface Irregular
{
    voc: string;
    obj: Partial<Record<Tense, string[]>>;
}
export const irregular: Irregular[] = [
    {
        voc: "abrazar", obj: {
            [ Tense.Subjunctivo ]: [ "abrace", "abraces", "abrace", "abracemos", "abracéis", "abracen" ],
            [ Tense.Pretérito ]: [ "abracé", "", "", "", "", "" ],
            [ Tense.Imperative ]: [ "", "no abraces", "abrace", "abracemos", "", "no abracéis", "abracen" ],
        }
    },
    {
        voc: "abrigar", obj: {
            [ Tense.Subjunctivo ]: [ "abrigue", "abrigues", "abrigue", "abriguemos", "abriguéis", "abriguen" ],
            [ Tense.Pretérito ]: [ "abrigué", "", "", "", "", "" ],
            [ Tense.Imperative ]: [ "", "no abrigues", "abrigue", "abriguemos", "", "no abriguéis", "abriguen" ],
        }
    },
    { voc: "abrir", obj: { [ Tense.PastParticiple ]: [ "abierto", ] } },
    {
        voc: "absolver", obj: {
            [ Tense.Present ]: [ "absuelvo", "absuelves", "absuelve", "", "", "absuelven" ],
            [ Tense.Subjunctivo ]: [ "absuelva", "absuelvas", "absuelva", "", "", "absuelvan" ],
            [ Tense.PastParticiple ]: [ "absuelto", ],
            [ Tense.Imperative ]: [ "absuelve", "no absuelvas", "absuelva", "", "", "", "absuelvan" ],
        }
    },
    {
        voc: "acertar", obj: {
            [ Tense.Present ]: [ "acierto", "aciertas", "acierta", "", "", "aciertan" ],
            [ Tense.Subjunctivo ]: [ "acierte", "aciertes", "acierte", "", "", "acierten" ],
            [ Tense.Imperative ]: [ "acierta", "no aciertes", "acierte", "", "", "", "acierten" ],
        }
    },
    {
        voc: "acordar", obj: {
            [ Tense.Present ]: [ "acuerdo", "acuerdas", "acuerda", "", "", "acuerdan" ],
            [ Tense.Subjunctivo ]: [ "acuerde", "acuerdes", "acuerde", "", "", "acuerden" ],
            [ Tense.Imperative ]: [ "acuerda", "no acuerdes", "acuerde", "", "", "", "acuerden" ],
        }
    },
    {
        voc: "adherir", obj: {
            [ Tense.Present ]: [ "adhiero", "adhieres", "adhiere", "", "", "adhieren" ],
            [ Tense.Subjunctivo ]: [ "adhiera", "adhieras", "adhiera", "adhiramos", "adhiráis", "adhieran" ],
            [ Tense.Pretérito ]: [ "", "", "adhirió", "", "", "adhirieron" ],
            [ Tense.ImperfectSubjunctiveRa ]: [ "adhiriera", "adhirieras", "adhiriera", "adhiriéramos", "adhirierais", "adhirieran" ],
            [ Tense.ImperfectSubjunctiveSe ]: [ "adhiriese", "adhirieses", "adhiriese", "adhiriésemos", "adhirieseis", "adhiriesen" ],
            [ Tense.Imperative ]: [ "adhiere", "no adhieras", "adhiera", "adhiramos", "", "no adhiráis", "adhieran" ],
            [ Tense.Gerund ]: [ "adhiriendo" ],
        }
    },
    {
        voc: "leer", obj: {
            [ Tense.Pretérito ]: [ "", "leíste", "leyó", "leímos", "leísteis", "leyeron" ],
            [ Tense.ImperfectSubjunctiveRa ]: [ "leyera", "leyeras", "leyera", "leyéramos", "leyerais", "leyeran" ],
            [ Tense.ImperfectSubjunctiveSe ]: [ "leyese", "leyeses", "leyese", "leyésemos", "leyeseis", "leyesen" ],
            [ Tense.Gerund ]: [ "leyendo" ],
            [ Tense.PastParticiple ]: [ "leído" ],
        }
    },
    {
        voc: "ser", obj: {
            [ Tense.Present ]: [ "soy", "eres", "es", "somos", "sois", "son" ],
            [ Tense.Subjunctivo ]: [ "sea", "seas", "sea", "seamos", "seáis", "sean" ],
            [ Tense.Pretérito ]: [ "fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron" ],
            [ Tense.Imperfect ]: [ "era", "eras", "era", "éramos", "erais", "eran" ],
            [ Tense.ImperfectSubjunctiveRa ]: [ "fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran" ],
            [ Tense.ImperfectSubjunctiveSe ]: [ "fuese", "fueses", "fuese", "fuésemos", "fueseis", "fuesen" ],
            [ Tense.Imperative ]: [ "sé", "no seas", "sea", "seamos", "", "no seáis", "sean" ],
        }
    },
]
