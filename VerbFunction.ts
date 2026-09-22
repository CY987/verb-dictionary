import { Tense, TenseSynthesis, Type, VerbForm, WordType } from "./Data.js";
import { ImperativeHead, Morpheme, } from "./RegularVerbEnding.js";
import { Irregular, nonRegularVerbs } from "./NewIrregularVerbData.js";
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
        console.log(
            "getWord:",
            voc,
            tense,
            irregularData
        );
        return irregularData.obj[ tense ]
    }
    private _estarPresent = this.getWord( "estar", Tense.Present );
    private _estarPretérito = this.getWord( "estar", Tense.Pretérito );
    private _haberPresent = this.getWord( "haber", Tense.Present );
    private _haberPretérito = this.getWord( "haber", Tense.Pretérito );
    private _haberImperfect = this.getWord( "haber", Tense.Imperfect );
    private _haberFuturo = this.getWord( "haber", Tense.Futuro );
    private _haberConditional = this.getWord( "haber", Tense.Conditional );
    private _haberSubjunctivo = this.getWord( "haber", Tense.Subjunctivo );
    private _haberImSubjunctivoRa = this.getWord( "haber", Tense.ImperfectSubjunctiveRa );
    private getElement( tense: Tense | TenseSynthesis, type: Type )
    {
        return Morpheme[ tense ][ type ];
    }
    public getStem( found: string ): string
    {
        return found.slice( 0, -2 );
    }
    public simpleTense( found: VerbForm, item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type );
        return found.personal.map( p => item + table[ p ] );
    }
    private perfectTense( found: VerbForm, item: string, word: WordType, haber: string[] ): string[]
    {
        const table = this.getElement( Tense.PastParticiple, word.type );
        return found.personal.map( ( p, index ) => haber[ index ] + " " + item + table[ p ] );
    }
    private irregularPerfectTense( found: VerbForm, word: Irregular, haber: string[] ): string[]
    {
        const item = this.getWord( word.voc, Tense.PastParticiple );
        return found.personal.map( ( _, index ) => haber[ index ] + " " + item[ 0 ] );
    }
    public futureSimpleTense( found: VerbForm, item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )

        return found.personal.map( p => table[ p ] + item );
    }
    public gerundTense( found: VerbForm, item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type );
        return found.personal.map( ( p, index ) => this._estarPresent[ index ] + " " + item + table[ p ] );
    }
    public pastGerundTense( found: VerbForm, item: string, word: WordType ): string[]
    {
        const table = this.getElement( Tense.Gerund, word.type );
        return found.personal.map( ( p, index ) => this._estarPretérito[ index ] + " " + item + table[ p ] );
    }
    public imperativeTense( found: VerbForm, item: string, word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type )
        return found.personalImperative.map( p => ImperativeHead[ p ] + item + table[ p ] );
    }
    public gerundEstar( found: VerbForm, item: string[] ): string[]
    {
        return found.personal.map( () => item[ 0 ] );
    }
    public pastGerundEstar( item: string ): string[]
    {
        return this.getWord( item, Tense.Gerund );
    }
    public prePerfecto( found: VerbForm, item: string, word: WordType ): string[]
    {
        return this.perfectTense( found, item, word, this._haberPresent );
    }
    public prePluscuamperfecto( found: VerbForm, item: string, word: WordType ): string[]
    {
        return this.perfectTense( found, item, word, this._haberImperfect );
    }
    public pretéritoPluPoint( found: VerbForm, item: string, word: WordType ): string[]
    {
        return this.perfectTense( found, item, word, this._haberPretérito );
    }
    public futuroPerfecto( found: VerbForm, item: string, word: WordType ): string[]
    {
        return this.perfectTense( found, item, word, this._haberFuturo );
    }
    public conditionalPerfecto( found: VerbForm, item: string, word: WordType ): string[]
    {
        return this.perfectTense( found, item, word, this._haberConditional );
    }
    public pretéritoPerDeSub( found: VerbForm, item: string, word: WordType ): string[]
    {
        return this.perfectTense( found, item, word, this._haberSubjunctivo );
    }
    public pluscuaDeSubTense( found: VerbForm, item: string, word: WordType ): string[]
    {
        return this.perfectTense( found, item, word, this._haberImSubjunctivoRa );
    }
    public pretéritoPluDeSubRa( found: VerbForm, item: string, word: WordType ): string[]
    {
        const table = this.getElement( Tense.PastParticiple, word.type )
        return found.personal.map( ( p, index ) => this._haberSubjunctivo[ index ] + " " + item + table[ p ] );
    }
    // irregular-----------------------------
    public irrFutureSimpleTense( found: VerbForm, item: string[], word: WordType ): string[]
    {
        const table = this.getElement( word.tag, word.type );
        return found.personal.map( ( p, index ) =>
        {
            if ( ( found.voc === "llover" || found.voc === "nevar" ) && index !== 2 )
            {
                return "";
            }
            return table[ p ] + item[ index ];
        } );
    }
    public irrGerundTense( found: VerbForm, item: string[] ): string[]
    {
        return found.personal.map( ( p, index ) => this._estarPresent[ index ] + " " + item[ 0 ] );
    }
    public irrPastGerundTense( found: VerbForm, word: Irregular ): string[]
    {
        const item = this.getWord( word.voc, Tense.Gerund )
        return found.personal.map( ( p, index ) => this._estarPretérito[ index ] + " " + item[ 0 ] );
    }
    public irrPluscuaDeSubTense( found: VerbForm, word: Irregular ): string[]
    {
        return this.irregularPerfectTense( found, word, this._haberImSubjunctivoRa );
    }
    public irrPrePerfecto( found: VerbForm, word: Irregular ): string[]
    {
        return this.irregularPerfectTense( found, word, this._haberPresent );
    }
    public irrPrePluscuamperfecto( found: VerbForm, word: Irregular ): string[]
    {
        return this.irregularPerfectTense( found, word, this._haberImperfect );
    }
    public irrPretéritoPluPoint( found: VerbForm, word: Irregular ): string[]
    {
        return this.irregularPerfectTense( found, word, this._haberPretérito );
    }
    public irrFuturoPerfecto( found: VerbForm, word: Irregular ): string[]
    {
        return this.irregularPerfectTense( found, word, this._haberFuturo );
    }
    public irrConditionalPerfecto( found: VerbForm, word: Irregular ): string[]
    {
        return this.irregularPerfectTense( found, word, this._haberConditional );
    }
    public irrpretéritoPerDeSub( found: VerbForm, word: Irregular ): string[]
    {
        return this.irregularPerfectTense( found, word, this._haberSubjunctivo );
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
                irregularResult[ index ] ??
                regularValue
            // {
            // return irregularResult[ index ] !== undefined
            //     ? irregularResult[ index ]
            //     : regularValue;
            // }
        );
    }
}

