function ErVerb( word: string )
{
    let wordArray: string[] = []
    for ( let i = 0; i < word.length - 2; i++ )
    {
        wordArray.push( word[ i ] );
    }
    let yo = wordArray.push( 'o' );
    let tú = wordArray.push( "es" );
    let él = wordArray.push( "e" );
    let nosotros = wordArray.push( "eoms" );
    let vosotros = wordArray.push( "éis" );
    let ellas = wordArray.push( "en" );
}