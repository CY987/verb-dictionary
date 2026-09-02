import { Tense, TenseSyn, Type, VerbForm, WordType } from "./Data.js";
import { ImperativeHead, Morpheme, } from "./RegularVerbEnding.js";
import { nonRegularVerbs } from "./NewIrregularVerbData.js";
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
    private getWord( voc: string, tense: Tense ): string[]
    {
        const irregularData = nonRegularVerbs.find( item => item.voc === voc );
        return irregularData.obj[ tense ]
    }
    private _estarPresent = this.getWord( "estar", Tense.Present );
    private _estarPretérito = this.getWord( "estar", Tense.Pretérito );
    private _haberPresent = this.getWord( "haber", Tense.Present );
    private _haberSubjunctivoRa = this.getWord( "haber", Tense.ImperfectSubjunctiveRa );
    private getElement( tense: Tense | TenseSyn, type: Type )
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
        const table = this.getElement( word.tag, word.type );
        return found.personal.map( ( p, index ) => this._estarPresent[ index ] + " " + Item + table[ p ] );
        // return found.personal.map( p => EstarPresentHead[ p ] + Item + table[ p ] );
    }
    public pastGerundTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( Tense.Gerund, word.type );
        return found.personal.map( ( p, index ) => this._estarPretérito[ index ] + " " + Item + table[ p ] );
    }
    public pretéritoPerDeSubTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( Tense.PastParticiple, word.type )
        // return found.personal.map( p => Item + table[ p ] );
        return found.personal.map( ( p, index ) => this._haberSubjunctivoRa[ index ] + " " + Item + table[ p ] );
    }
    public imperativeTense( found: VerbForm, Item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )
        // return found.personalImperative.map( p => Item + table[ p ] );
        return found.personalImperative.map( p => ImperativeHead[ p ] + Item + table[ p ] );
    }
    public gerundEstar( found: VerbForm, Item: string[] ): string[]
    {
        return found.personal.map( p => Item[ 0 ] );
    }
    public prePerfecto( found: VerbForm, Item: string[] )
    {
        return found.personal.map( ( p, index ) => this._haberPresent[ index ] + " " + Item[ 0 ] );
    }
    // irregular-----------------------------
    public irrFutureSimpleTense( found: VerbForm, Item: string[], word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type );
        return found.personal.map( ( p, index ) => table[ p ] + Item[ index ] );
    }

    public irrPretéritoPerDeSubTense( found: VerbForm, Item: string[] ): string[]
    {
        // return found.personal.map( p => Item[ 0 ] );
        return found.personal.map( ( p, index ) => this._haberSubjunctivoRa[ index ] + " " + Item[ 0 ] );
    }
    public irrGerundTense( found: VerbForm, Item: string[] ): string[]
    {

        // return found.personal.map( p => Item[ 0 ] );
        return found.personal.map( ( p, index ) => this._estarPresent[ index ] + " " + Item[ 0 ] );
    }
    public irrPastGerundTense( found: VerbForm, Item: string[] ): string[]
    {
        // return found.personal.map( p => Item[ 0 ] );
        return found.personal.map( ( p, index ) => this._estarPretérito[ index ] + " " + Item[ 0 ] );
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
            {
                return irregularResult[ index ] !== undefined
                    ? irregularResult[ index ]
                    : regularValue;
            }
            // irregularResult[ index ] || regularValue
        );
    }
    public merge( irregularResult: string[] )
    {
        return
    }
}

