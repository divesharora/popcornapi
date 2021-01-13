const express= require("express");
const router = express.Router();


const getKey = require('../handlers/route1.js')

router.get('/getkey',getKey.getKeyFunction);


module.exports = router
