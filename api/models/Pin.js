/**
 * Pin.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	location_x:{
    	type:"float"
    }
  },

  pinPlaces: function (inputs, cb) {
    
    Pin.create({
      _id: inputs.id,
      location_x: inputs.location_x,
      location_y: inputs.location_y,
      date_start: inputs.date_start,
      date_end: inputs.date_end
    })
    .exec(cb);
  },

  findSimilarLocation: function(inputs, cb){

console.log("Hello-->" + inputs.location_x);

  	Pin.find()
  	.exec(cb);

  	

  }




};

