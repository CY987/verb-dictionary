import { Pronoun, Type, VerbForm } from "./Data.js";
import { Ending, } from "./RegularVerbEnding.js";

export class VerbFunction
{
    private static _instance: VerbFunction;
    private constructor() { }
    public static get Instance(): VerbFunction
    {
        if ( !VerbFunction._instance )
        {
            VerbFunction._instance = new VerbFunction();
        }
        return VerbFunction._instance;
    }
    public getStem( found: string ): string
    {
        return found.slice( 0, -2 );
    }
    public presentTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        const table = Ending.Present[ type ];

        return found.personal.map( p => Item + table[ p ] );
    }
    public subjunctiveTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    if ( type === Type.Ar )
                    { combination = Item + "e"; }
                    else
                    { combination = Item + "a"; }
                    break;
                case Pronoun.Tú:
                    if ( type === Type.Ar )
                    { combination = Item + "es"; }
                    else
                    { combination = Item + "as"; }
                    break;
                case Pronoun.ÉL:
                    if ( type === Type.Ar )
                    { combination = Item + "e"; }
                    else
                    { combination = Item + "a"; }
                    break;
                case Pronoun.Nosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "emos"; }
                    else
                    { combination = Item + "amos"; }
                    break;
                case Pronoun.Vosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "éis"; }
                    else
                    { combination = Item + "áis"; }
                    break;
                case Pronoun.Ellos:
                    if ( type === Type.Ar )
                    { combination = Item + "en"; }
                    else
                    { combination = Item + "an"; }
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public pretéritoTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    if ( type === Type.Ar )
                    { combination = Item + "é"; }
                    else
                    { combination = Item + "í"; }
                    break;
                case Pronoun.Tú:
                    if ( type === Type.Ar )
                    { combination = Item + "aste"; }
                    else
                    { combination = Item + "iste"; }
                    break;
                case Pronoun.ÉL:
                    if ( type === Type.Ar )
                    { combination = Item + "ó"; }
                    else
                    { combination = Item + "ió"; }
                    break;
                case Pronoun.Nosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "amos"; }
                    else
                    { combination = Item + "imos"; }
                    break;
                case Pronoun.Vosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "asteis"; }
                    else
                    { combination = Item + "isteis"; }
                    break;
                case Pronoun.Ellos:
                    if ( type === Type.Ar )
                    { combination = Item + "aron"; }
                    else
                    { combination = Item + "ieron"; }
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public imperfectTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    if ( type === Type.Ar )
                    { combination = Item + "aba"; }
                    else
                    { combination = Item + "ía"; }
                    break;
                case Pronoun.Tú:
                    if ( type === Type.Ar )
                    { combination = Item + "abas"; }
                    else
                    { combination = Item + "ías"; }
                    break;
                case Pronoun.ÉL:
                    if ( type === Type.Ar )
                    { combination = Item + "aba"; }
                    else
                    { combination = Item + "ía"; }
                    break;
                case Pronoun.Nosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "ábamos"; }
                    else
                    { combination = Item + "íamos"; }
                    break;
                case Pronoun.Vosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "abais"; }
                    else
                    { combination = Item + "íais"; }
                    break;
                case Pronoun.Ellos:
                    if ( type === Type.Ar )
                    { combination = Item + "aban"; }
                    else
                    { combination = Item + "ían"; }
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public futureTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    combination = Item + "é";
                    break;
                case Pronoun.Tú:
                    combination = Item + "ás";
                    break;
                case Pronoun.ÉL:
                    combination = Item + "á";
                    break;
                case Pronoun.Nosotros:
                    combination = Item + "emos";
                    break;
                case Pronoun.Vosotros:
                    combination = Item + "éis";
                    break;
                case Pronoun.Ellos:
                    combination = Item + "án";
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public futureSimpleTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    combination = "voy a " + Item;
                    break;
                case Pronoun.Tú:
                    combination = "vas a " + Item;
                    break;
                case Pronoun.ÉL:
                    combination = "va a " + Item;
                    break;
                case Pronoun.Nosotros:
                    combination = "vamos a " + Item;
                    break;
                case Pronoun.Vosotros:
                    combination = "vais a " + Item;
                    break;
                case Pronoun.Ellos:
                    combination = "van a " + Item;
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public conditionalTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    combination = Item + "ía";
                    break;
                case Pronoun.Tú:
                    combination = Item + "ías";
                    break;
                case Pronoun.ÉL:
                    combination = Item + "ía";
                    break;
                case Pronoun.Nosotros:
                    combination = Item + "íamos";
                    break;
                case Pronoun.Vosotros:
                    combination = Item + "íais";
                    break;
                case Pronoun.Ellos:
                    combination = Item + "ían";
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public impSubRaTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    if ( type === Type.Ar )
                    { combination = Item + "ara"; }
                    else
                    { combination = Item + "iera"; }
                    break;
                case Pronoun.Tú:
                    if ( type === Type.Ar )
                    { combination = Item + "aras"; }
                    else
                    { combination = Item + "ieras"; }
                    break;
                case Pronoun.ÉL:
                    if ( type === Type.Ar )
                    { combination = Item + "ara"; }
                    else
                    { combination = Item + "iera"; }
                    break;
                case Pronoun.Nosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "áramos"; }
                    else
                    { combination = Item + "iéramos"; }
                    break;
                case Pronoun.Vosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "arais"; }
                    else
                    { combination = Item + "ierais"; }
                    break;
                case Pronoun.Ellos:
                    if ( type === Type.Ar )
                    { combination = Item + "aran"; }
                    else
                    { combination = Item + "ieran"; }
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public impSubSeTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    if ( type === Type.Ar )
                    { combination = Item + "ase"; }
                    else
                    { combination = Item + "iese"; }
                    break;
                case Pronoun.Tú:
                    if ( type === Type.Ar )
                    { combination = Item + "ases"; }
                    else
                    { combination = Item + "ieses"; }
                    break;
                case Pronoun.ÉL:
                    if ( type === Type.Ar )
                    { combination = Item + "ase"; }
                    else
                    { combination = Item + "iese"; }
                    break;
                case Pronoun.Nosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "ásemos"; }
                    else
                    { combination = Item + "iésemos"; }
                    break;
                case Pronoun.Vosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "aseis"; }
                    else
                    { combination = Item + "ieseis"; }
                    break;
                case Pronoun.Ellos:
                    if ( type === Type.Ar )
                    { combination = Item + "asen"; }
                    else
                    { combination = Item + "iesen"; }
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public gerundTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    if ( type === Type.Ar )
                    { combination = "estoy " + Item + "ando"; }
                    else
                    { combination = "estoy " + Item + "iendo"; }
                    break;
                case Pronoun.Tú:
                    if ( type === Type.Ar )
                    { combination = "estás " + Item + "ando"; }
                    else
                    { combination = "estás " + Item + "iendo"; }
                    break;
                case Pronoun.ÉL:
                    if ( type === Type.Ar )
                    { combination = "está " + Item + "ando"; }
                    else
                    { combination = "está " + Item + "iendo"; }
                    break;
                case Pronoun.Nosotros:
                    if ( type === Type.Ar )
                    { combination = "estamos " + Item + "ando"; }
                    else
                    { combination = "estamos " + Item + "iendo"; }
                    break;
                case Pronoun.Vosotros:
                    if ( type === Type.Ar )
                    { combination = "estáis " + Item + "ando"; }
                    else
                    { combination = "estáis " + Item + "iendo"; }
                    break;
                case Pronoun.Ellos:
                    if ( type === Type.Ar )
                    { combination = "están " + Item + "ando"; }
                    else
                    { combination = "están " + Item + "iendo"; }
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public pastGerundTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    if ( type === Type.Ar )
                    { combination = "estuve " + Item + "ando"; }
                    else
                    { combination = "estuve " + Item + "iendo"; }
                    break;
                case Pronoun.Tú:
                    if ( type === Type.Ar )
                    { combination = "estuviste " + Item + "ando"; }
                    else
                    { combination = "estuviste " + Item + "iendo"; }
                    break;
                case Pronoun.ÉL:
                    if ( type === Type.Ar )
                    { combination = "estuvo " + Item + "ando"; }
                    else
                    { combination = "estuvo " + Item + "iendo"; }
                    break;
                case Pronoun.Nosotros:
                    if ( type === Type.Ar )
                    { combination = "estuvimos " + Item + "ando"; }
                    else
                    { combination = "estuvimos " + Item + "iendo"; }
                    break;
                case Pronoun.Vosotros:
                    if ( type === Type.Ar )
                    { combination = "estuvisteis " + Item + "ando"; }
                    else
                    { combination = "estuvisteis " + Item + "iendo"; }
                    break;
                case Pronoun.Ellos:
                    if ( type === Type.Ar )
                    { combination = "estuvieron " + Item + "ando"; }
                    else
                    { combination = "estuvieron " + Item + "iendo"; }
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public presentPerfectTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personal.length; i++ )
        {
            let combination: string = "";
            switch ( found.personal[ i ] )
            {
                case Pronoun.Yo:
                    if ( type === Type.Ar )
                    { combination = "haya " + Item + "ado"; }
                    else
                    { combination = "haya " + Item + "ido"; }
                    break;
                case Pronoun.Tú:
                    if ( type === Type.Ar )
                    { combination = "hayas " + Item + "ado"; }
                    else
                    { combination = "hayas " + Item + "ido"; }
                    break;
                case Pronoun.ÉL:
                    if ( type === Type.Ar )
                    { combination = "haya " + Item + "ado"; }
                    else
                    { combination = "haya " + Item + "ido"; }
                    break;
                case Pronoun.Nosotros:
                    if ( type === Type.Ar )
                    { combination = "hayamos " + Item + "ado"; }
                    else
                    { combination = "hayamos " + Item + "ido"; }
                    break;
                case Pronoun.Vosotros:
                    if ( type === Type.Ar )
                    { combination = "hayáis " + Item + "ado"; }
                    else
                    { combination = "hayáis " + Item + "ido"; }
                    break;
                case Pronoun.Ellos:
                    if ( type === Type.Ar )
                    { combination = "hayan " + Item + "ado"; }
                    else
                    { combination = "hayan " + Item + "ido"; }
                    break;
            }
            result.push( combination );
        }
        return result;
    }
    public imperativeTense( found: VerbForm, Item: string, type: Type ): string[]
    {
        let result: string[] = [];
        for ( let i = 0; i < found.personalImperative.length; i++ )
        {
            let combination: string = "";
            switch ( found.personalImperative[ i ] )
            {
                case Pronoun.Tú:
                    if ( type === Type.Ar )
                    { combination = Item + "a"; }
                    else
                    { combination = Item + "e"; }
                    break;
                case Pronoun.TúNegativo:
                    if ( type === Type.Ar )
                    { combination = "no " + Item + "es"; }
                    else
                    { combination = "no " + Item + "as"; }
                    break;
                case Pronoun.Usted:
                    if ( type === Type.Ar )
                    { combination = Item + "e"; }
                    else
                    { combination = Item + "a"; }
                    break;
                case Pronoun.Nosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "emos"; }
                    else
                    { combination = Item + "amos"; }
                    break;
                case Pronoun.Vosotros:
                    if ( type === Type.Ar )
                    { combination = Item + "ad"; }
                    else if ( type === Type.Er )
                    { combination = Item + "ed"; }
                    else
                    { combination = Item + "id"; }
                    break;
                case Pronoun.VosotrosNegativo:
                    if ( type === Type.Ar )
                    { combination = "no " + Item + "éis"; }
                    else
                    { combination = "no " + Item + "áis"; }
                    break;
                case Pronoun.Ustedes:
                    if ( type === Type.Ar )
                    { combination = Item + "en"; }
                    else
                    { combination = Item + "an"; }
                    break;
            }
            result.push( combination );
        }
        return result;
    }
}