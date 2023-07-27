const express = require( 'express' );
const router = express.Router();

const { create, resumeByName, readResume } = require( '../controllers/resume' );

router.post( "/create", create );
router.get( "/resume/:name", readResume );


router.param( 'name', resumeByName )
module.exports = router;

