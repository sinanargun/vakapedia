/**
 * Pin.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	 attributes: {


 	 },


  pinPlaces: function (inputs, cb) {
    
    Pin.create({
      user_id: inputs.user_id,
      location_x: inputs.location_x,
      location_y: inputs.location_y,
      location_name: inputs.location_name,
      date_start: inputs.date_start,
      date_end: inputs.date_end
    })
    .exec(cb);
  },

  findSimilarLocation: function(inputs, cb){


	var location_x_upper = parseFloat(inputs.location_x) + 5.0;
	var location_x_lower = parseFloat(inputs.location_x) - 5.0;

	var location_y_upper = parseFloat(inputs.location_y) + 5.0;
	var location_y_lower = parseFloat(inputs.location_y) - 5.0;


  	Pin.find({ location_x: { $gte: location_x_lower }, location_x : {$lte: location_x_upper},
  				location_y: { $gte: location_y_lower }, location_y : {$lte: location_y_upper}
  				 })
  	.exec(cb);	
  }




};

