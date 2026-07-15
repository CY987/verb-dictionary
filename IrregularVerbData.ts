import { Tense } from "./Data.js";

export interface Irregular
{
    voc: string;
    tag: Tense[];
    personal: string[];
    personalImperative: string[];
}
const irregular: Irregular[] = [
    { voc: "abrir", tag: [ Tense.presentPerfect ], personal: [ "yo", "tú", "él", "nosotros", "vosotros", "ellos" ], personalImperative: [ "tú", "túNegativo", "usted", "nosotros", "vosotros", "vosotrosNegativo", "ustedes" ] },
]
