import { Tense } from "./Data.js";

export interface Irregular
{
    voc: string;
    obj: Partial<Record<Tense, string[]>>;
}
export const irregular: Irregular[] = [
    { voc: "abrir", obj: { [ Tense.PretéritoPerDeSub ]: [ "abierto", ] } },
    {
        voc: "leer", obj: {
            [ Tense.Pretérito ]: [ "", "leíste", "leyó", "leímos", "leísteis", "leyeron" ],
            [ Tense.ImperfectSubjunctiveRa ]: [ "leyera", "leyeras", "leyera", "leyéramos", "leyerais", "leyeran" ],
            [ Tense.ImperfectSubjunctiveSe ]: [ "leyese", "leyeses", "leyese", "leyésemos", "leyeseis", "leyesen" ],
            [ Tense.Gerund ]: [ "leyendo" ],
            [ Tense.PastGerund ]: [ "leyendo" ],
            [ Tense.PretéritoPerDeSub ]: [ "leído" ],
        }
    }
]
