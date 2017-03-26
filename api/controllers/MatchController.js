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
		      'common_hours': req.param('common_hours')
		};

		var match = sails.models.match;

		 match.joinTrip(postParameters, function (err, result) {
		    
		    output.result = 1;
			if (err) output.result = 0;

			return res.send(output);
		    });

	}
	
};

