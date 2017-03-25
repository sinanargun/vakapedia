/**
 * Match.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	  opener_user:{
        type:"string"
      },
      joined_user:{
        joined_user:"string"
      },
      location_name:{
        type: "string"
      },
      common_hours: {
      	type: "string"
      },
      is_opener_joined: {
      	type: "boolean",
      	defaultsTo: false
      },
      is_joined_joined: {
      	type: "boolean",
      	defaultsTo: false
      }
  },

  openTrip: function (inputs, cb) {
    
    Match.create({
      opener_user: inputs.opener_user,
      location_name: inputs.location_name
    })
    .exec(cb);
  },

  joinTrip: function(inputs,cb) {
  	   
  	Match.update({opener_user:inputs.opener_user},
  		{joined_user: inputs.joined_user,common_hours: inputs.common_hours}).exec(function afterwards(err, updated){
  	  if (err) {
  	    return res.negotiate(err);
  	  }
  	});
  }
};

