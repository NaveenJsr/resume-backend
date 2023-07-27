const Data = require( '../models/data' );


exports.create = ( req, res ) =>
{
    const data = new Data( req.body );

    data.save()
        .then( () =>
        {
            return res.send( "data succesfully saved" );
        } )
        .catch( ( err ) =>
        {
            return res.status( 400 ).json( {
                err: "form has error"
            } );
        } );
};

exports.resumeByName = ( req, res, next, name ) =>
{
    Data.findOne( { first_name: name } )
        .then( ( data ) =>
        {
            return res.json( data );
            next();
        } )
        .catch( ( err ) =>
        {
            return res.status( 400 ).json( {
                err: "data not found"
            } );
        } );
};

exports.readResume = ( req, res ) =>
{
    console.log( req.name );
    return res.json( re.name );
}