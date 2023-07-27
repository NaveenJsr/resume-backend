const express = require( "express" );
const mongoose = require( "mongoose" );
const bodyParser = require( "body-parser" );
require( 'dotenv' ).config();


//import routes
const resumeRoutes = require( './routes/resume' );

//app
const app = express();

//db
mongoose.connect( process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} )
    .then( () => console.log( "database connected" ) )
    .catch( ( err ) => console.log( err ) );

//middlewares
app.use( bodyParser.json() );


//routes middleware
app.use( "/api", resumeRoutes )

app.listen( 5000, () =>
{
    console.log( "server is running on port 3000" )
} );
