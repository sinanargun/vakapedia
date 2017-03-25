/**
 * PinController
 *
 * @description :: Server-side logic for managing pins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	pinPlaces: function(req,res)
	{

		var pin = sails.models.pin;

		 pin.pinPlaces({
		      id: req.param('id'),
		      location_x: req.param('location_x'),
		      location_y: req.param('location_y'),
		      date_start: req.param('date_start'),
		      date_end: req.param('date_end')
		    }, function (err, result) {
		    
		      if (err) return res.send(err);
		 
		      return res.send(true);
		    });
	},


	findSimilarLocation: function(req,res)
	{

		var pin = sails.models.pin;


		console.log("Location_x-->" + req.param('location_x'));

		pin.findSimilarLocation({
		      location_x: req.param('location_x'),
		      location_y: req.param('location_y')
		    }, function (err, user ) {
		    
		      console.log(user);
		 
		      
		    });
	}

};

