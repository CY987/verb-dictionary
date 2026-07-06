import { Type, VerbForm } from "./Data";

export class VerbFunction
{
    private static _instance: VerbFunction;
    private constructor() { }
    public static get Instance(): VerbFunction
    {
        if (!VerbFunction._instance)
        {
            VerbFunction._instance = new VerbFunction();
        }
        return VerbFunction._instance;
    }
    public getStem(found: string): string
    {
        return found.slice(0, -2);
    }
    public presentTense(found: VerbForm, Item: string, type: Type): string[]
    {
        let result: string[] = [];
        for (let i = 0; i < found.personal.length; i++)
        {
            let combination: string = "";
            switch (found.personal[i])
            {
                case "yo":
                    combination = Item + "o";
                    break;
                case "tú":
                    if (type === Type.Ar)
                    {
                        combination = Item + "as";
                    }
                    else
                    {
                        combination = Item + "es";
                    }
                    break;
                case "él":
                    if (type === Type.Ar)
                    {
                        combination = Item + "a";
                    }
                    else
                    {
                        combination = Item + "e";
                    }
                    break;
                case "nosotros":
                    if (type === Type.Ar)
                    {
                        combination = Item + "amos";
                    }
                    else if (type === Type.Er)
                    {
                        combination = Item + "emos";
                    }
                    else
                    {
                        combination = Item + "imos";
                    }
                    break;
                case "vosotros":
                    if (type === Type.Ar)
                    {
                        combination = Item + "áis";
                    }
                    else if (type === Type.Er)
                    {
                        combination = Item + "éis";
                    }
                    else
                    {
                        combination = Item + "ís";
                    }
                    break;
                case "ellos":
                    if (type === Type.Ar)
                    {
                        combination = Item + "an";
                    }
                    else
                    {
                        combination = Item + "en";
                    }
                    break;
            }

            result.push(combination);
        }

        return result;
    }
    public subjunctiveTense(found: VerbForm, Item: string, type: Type): string[]
    {
        let result: string[] = [];
        for (let i = 0; i < found.personal.length; i++)
        {
            let combination: string = "";
            switch (found.personal[i])
            {
                case "yo":
                    if (type === Type.Ar)
                    {
                        combination = Item + "e";
                    }
                    else 
                    {
                        combination = Item + "a";
                    }
                    break;
                case "tú":
                    if (type === Type.Ar)
                    {
                        combination = Item + "es";
                    }
                    else
                    {
                        combination = Item + "as";
                    }
                    break;
                case "él":
                    if (type === Type.Ar)
                    {
                        combination = Item + "e";
                    }
                    else
                    {
                        combination = Item + "a";
                    }
                    break;
                case "nosotros":
                    if (type === Type.Ar)
                    {
                        combination = Item + "emos";
                    }
                    else 
                    {
                        combination = Item + "amos";
                    }
                    break;
                case "vosotros":
                    if (type === Type.Ar)
                    {
                        combination = Item + "éis";
                    }
                    else 
                    {
                        combination = Item + "áis";
                    }
                    break;
                case "ellos":
                    if (type === Type.Ar)
                    {
                        combination = Item + "en";
                    }
                    else
                    {
                        combination = Item + "an";
                    }
                    break;
            }

            result.push(combination);
        }

        return result;
    }
    public pretéritoTense(found: VerbForm, Item: string, type: Type): string[]
    {
        let result: string[] = [];
        for (let i = 0; i < found.personal.length; i++)
        {
            let combination: string = "";
            switch (found.personal[i])
            {
                case "yo":
                    if (type === Type.Ar)
                    {
                        combination = Item + "é";
                    }
                    else 
                    {
                        combination = Item + "í";
                    }
                    break;
                case "tú":
                    if (type === Type.Ar)
                    {
                        combination = Item + "aste";
                    }
                    else
                    {
                        combination = Item + "iste";
                    }
                    break;
                case "él":
                    if (type === Type.Ar)
                    {
                        combination = Item + "ó";
                    }
                    else
                    {
                        combination = Item + "ió";
                    }
                    break;
                case "nosotros":
                    if (type === Type.Ar)
                    {
                        combination = Item + "amos";
                    }
                    else
                    {
                        combination = Item + "imos";
                    }
                    break;
                case "vosotros":
                    if (type === Type.Ar)
                    {
                        combination = Item + "asteis";
                    }
                    else
                    {
                        combination = Item + "isteis";
                    }
                    break;
                case "ellos":
                    if (type === Type.Ar)
                    {
                        combination = Item + "aron";
                    }
                    else
                    {
                        combination = Item + "ieron";
                    }
                    break;
            }

            result.push(combination);
        }

        return result;
    }
}