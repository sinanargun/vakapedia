/**
 * PinController
 *
 * @description :: Server-side logic for managing pins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	
	pinPlaces: function(req,res)
	{

		var output = {};

		var postParameters = {
			  'user_id': req.param('user_id'),
		      'location_x': req.param('location_x'),
		      'location_y': req.param('location_y'),
		      'location_name' : req.param('location_name'),
		      'date_start': req.param('date_start'),
		      'date_end': req.param('date_end')
		};

		var pin = sails.models.pin;

		 pin.pinPlaces(postParameters, function (err, result) {
		    
		    output.result = 1;
			if (err) output.result = 0;

			return res.send(output);
		    });
	},


	findSimilarLocation: function(req,res)
	{
		var async = require("async");
		var pin = sails.models.pin;

		var output = [];
		pin.findSimilarLocation({
		     			 location_x: req.query.location_x,
		     			 location_y: req.query.location_y
		   				 }, function (err, locations) {
		    
								if (err) 
								{
									return res.send(false);
								}

 								var user = sails.models.user; 								 

								async.eachSeries(locations, function (location, callback) {
 								 
 								 user.getUser({id: location.user_id}, function (err,user) {
									if(user)
									{
										location['name'] = user.name;
										location['surname'] = user.surname;	
									}	
									output.push(location);
									callback();
								});		
								}, function (err,location) {
 									 if (err) { throw err; }
 									 //console.log('Well done :-)!');
 									 res.send(output);
								});	
								
						});		
	}	
			

};

