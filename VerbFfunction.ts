import { Type, VerbForm } from "./Data";

export class VerbFfunction
{
    private static _instance: VerbFfunction;
    private constructor() { }
    public static get Instance(): VerbFfunction
    {
        if ( !VerbFfunction._instance )
        {
            VerbFfunction._instance = new VerbFfunction();
        }
        return VerbFfunction._instance;
    }
    public getStem( found: string ): string
    {
        return found.slice( 0, -2 );
    }
    public presentTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case "yo":
                    combination = Item + "o";
                    break;
                case "tú":
                    if ( type === Type.Ar )
                    {
                        combination = Item + "as";
                    }
                    else
                    {
                        combination = Item + "es";
                    }
                    break;
                case "él":
                    if ( type === Type.Ar )
                    {
                        combination = Item + "a";
                    }
                    else
                    {
                        combination = Item + "e";
                    }
                    break;
                case "nosotros":
                    if ( type === Type.Ar )
                    {
                        combination = Item + "amos";
                    }
                    else if ( type === Type.Er )
                    {
                        combination = Item + "emos";
                    }
                    else
                    {
                        combination = Item + "imos";
                    }
                    break;
                case "vosotros":
                    if ( type === Type.Ar )
                    {
                        combination = Item + "áis";
                    }
                    else if ( type === Type.Er )
                    {
                        combination = Item + "éis";
                    }
                    else
                    {
                        combination = Item + "ís";
                    }
                    break;
                case "ellos":
                    if ( type === Type.Ar )
                    {
                        combination = Item + "an";
                    }
                    else
                    {
                        combination = Item + "en";
                    }
                    break;
            }

            result.push( combination );
        }

        return result;
    }

}