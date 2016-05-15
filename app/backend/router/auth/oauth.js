'use strict';

var express = require('express');
var router = express.Router();


module.exports = function (passport) {

	


	


	

	router.get('/auth/github', passport.authenticate('github'));

	router.get('/auth/github/callback', passport.authenticate('github'), function (req ,res) {
		res.send(req.user);
	});

	


	


	


	return router;

};