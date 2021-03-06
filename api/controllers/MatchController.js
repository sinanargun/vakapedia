/**
 * MatchController
 *
 * @description :: Server-side logic for managing matches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	openTrip: function(req,res)
	{
		var output = {};
		var postParameters = {
			  'opener_user': req.param('opener_user'),
		      'location_name': req.param('location_name')
		};

		if(!module.exports.isValid(postParameters))
		{
			return res.send({ 'error': 'You should send right postParameters' });
		} 

		var match = sails.models.match;
		match.openTrip(postParameters, function (err, result) {
		    
		    output.result = 1;
			if (err) output.result = 0;

			return res.send(output);
		    });

	},

	joinTrip: function(req,res)
	{
		var output = {};
		var postParameters = {
			  'opener_user': req.param('opener_user'),
		      'joined_user': req.param('joined_user'),
		      'location_name' : req.param('location_name'),
		      'common_hours': req.param('common_hours')
		};


		if(!module.exports.isValid(postParameters))
		{
			return res.send({ 'error': 'You should send right postParameters' });
		} 

		var match = sails.models.match;
		match.joinTrip(postParameters, function (err, result) {
		    
		    output.result = 1;
			if (err) output.result = 0;

			return res.send(output);
		    });

	},



	findJoinedTrips: function(req,res)
	{
		var async = require("async");
		var match = sails.models.match;

		var output = [];
		match.findJoinedTrips({joined_user: req.query.joined_user}, function (err, trips) {
		    
								if (err) 
								{
									return res.send(false);
								}

 								var user = sails.models.user; 								 

								async.eachSeries(trips, function (trip, callback) {
 								 
 								 user.getUser({id: trip.opener_user}, function (err,user) {
									if(user)
									{
										trip['name'] = user.name;
										trip['surname'] = user.surname;	
									}	
									output.push(trip);
									callback();
								});		
								}, function (err,location) {
 									 if (err) { throw err; }
 									 //console.log('Well done :-)!');
 									 res.send(output);
								});	
								
						});		


	},

	isValid: function(postParameters)
	{	

		var validator = require('validator');

		var hasError = 0;
		if(postParameters.opener_user != undefined && validator.isEmpty(postParameters.opener_user))
		{
			hasError++;
		}

		if(postParameters.joined_user != undefined && validator.isEmpty(postParameters.joined_user))
		{
			hasError++;
		}

		if(postParameters.location_name != undefined && validator.isEmpty(postParameters.location_name))
		{
			hasError++;
		}

		if(hasError > 0)
		{
			return false;
		}
		else
		{
			return true;
		}

	}

	
};

