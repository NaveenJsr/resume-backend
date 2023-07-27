const express = require( 'express' );
const router = express.Router();

const { create, getResume } = require( '../controllers/resume' );

router.post( "/create", create );
router.get( "/resume/:name", getResume );

module.exports = router;