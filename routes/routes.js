var express = require("express");
var strftime = require("strftime");
var router = express.Router();

router.use('/:date', function (req, res, next) {
	req.timeServer = {};
	next();
});

router.use('/:date', function (req, res, next) {
	var reqDate = req.params.date;
    req.timeServer.formattedDate = 
    	new Date(isNaN(reqDate) ? reqDate : reqDate * 1000);
    next();
});

router.get('/:date', function (req, res) {
	var date = req.timeServer.formattedDate;
	var dateObject = {
		unix: null,
		natural: null
	};

	if (date.getTime() > 0) {
    	dateObject.unix = date.getTime() / 1000,
    	dateObject.natural = strftime("%B %e, %Y", date)
    }
    res.json(dateObject);
});

module.exports = router;