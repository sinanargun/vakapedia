/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  /*  name:{
        type:"string", 
        required:true,
        minLength: 3
      },
    surname:{
        type:"string",
        required:true,
        minLength: 3
      },
    email:{
        type:"email",
        required:true,
        unique: true
      },
    location:{
    	type:"float"
    },
    points: {
    	type: "integer"
    },
    is_worked: {
    	type: "binary"
    } */
  },


   createUser: function (inputs, cb) {
    
    User.create({
      name: inputs.name,
      surname: inputs.surname,
      email: inputs.email,
      gender: inputs.gender
    })
    .exec(cb);
  },

  getUser: function (inputs, cb) {
    User.findOne({id: inputs.id})
    .exec(cb);
  },

};

