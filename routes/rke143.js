const express = require('express');
const router = express.Router();

const rke143Data = require('../data/nodejs.json');


router.post('/', (req, res) => {
    //name - rke
    //code - 143

    //invalid credentials

    if(req.body.name === 'rke' && req.body.code === "143") {
        res.status(200).json({rke143Data});        
    } else if(req.body.nimi === 'rke' && req.body.kood === "143") {
        res.status(200).json({rke143Data});        
    }    
    else {
        res.status(200).json({message: "invalid credentials"}); 
    }    
});


module.exports = router;