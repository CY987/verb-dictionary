import { Tense, Type, VerbForm, WordType } from "./Data.js";
import { EstarPastHead, EstarPresentHead, HaberPastHead, ImperativeHead, Morpheme, } from "./RegularVerbEnding.js";

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
    private getElement( tense: Tense, type: Type )
    {
        return Morpheme[ tense ][ type ];
    }
    public getStem( found: string ): string
    {
        return found.slice( 0, -2 );
    }
    public presentTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => Item + table[ p ] );
    }
    public subjunctiveTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => Item + table[ p ] );
    }
    public pretéritoTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => Item + table[ p ] );
    }
    public imperfectTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => Item + table[ p ] );
    }
    public futureTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => Item + table[ p ] );
    }
    public futureSimpleTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => table[ p ] + Item );
    }
    public conditionalTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => Item + table[ p ] );
    }
    public impSubRaTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => Item + table[ p ] );
    }
    public impSubSeTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => Item + table[ p ] );
    }
    public gerundTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => EstarPresentHead[ p ] + Item + table[ p ] );
    }
    public pastGerundTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => EstarPastHead[ p ] + Item + table[ p ] );
    }
    public pretéritoPerDeSubTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => HaberPastHead[ p ] + Item + table[ p ] );
    }
    public imperativeTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personalImperative.map( p => ImperativeHead[ p ] + Item + table[ p ] );
    }
    // irregular-----------------------------
    public irrPretéritoPerDeSubTense( found: VerbForm, Item: string[] ): string[]
    {
        return found.personal.map( p => HaberPastHead[ p ] + Item[ 0 ] );
    }
    public irrGerundTense( found: VerbForm, Item: string[] ): string[]
    {
        return found.personal.map( p => EstarPresentHead[ p ] + Item[ 0 ] );
    }
    public irrPastGerundTense( found: VerbForm, Item: string[] ): string[]
    {
        return found.personal.map( p => EstarPastHead[ p ] + Item[ 0 ] );
    }
    public mergeIrregular(
        regularResult: string[],
        irregularResult?: string[]
    ): string[]
    {
        if ( !irregularResult )
        {
            return regularResult;
        }

        return regularResult.map(
            ( regularValue, index ) =>
                irregularResult[ index ] || regularValue
        );
    }
}

