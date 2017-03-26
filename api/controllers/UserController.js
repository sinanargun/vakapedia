/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	createUser: function(req,res)
	{
		var output = {};
		var postParameters = {
		      'name': req.param('name'),
		      'surname': req.param('surname'),
		      'email': req.param('email'),
		      'gender': req.param('gender')};


		if(!module.exports.isValid(postParameters))
		{
			return res.send({ 'error': 'You should send right postParameters' });
		} 

		var user = sails.models.user;

		user.createUser(postParameters, function (err, user) {
		    
		if (err) return res.negotiate(err);

		   	output.userId = user.id;
		 
		    return res.send(output);
		});
	},


	getUser: function(req,res)
	{
		var user = sails.models.user;

		user.getUser({id: req.query.id}, function (err,user) {
			
			if (err) return res.negotiate(err);

		    return res.send(user);
		});
	},


	isValid: function(postParameters)
	{	

		var validator = require('validator');

		var hasError = 0;
		if(postParameters.email != undefined && !validator.isEmail(postParameters.email))
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

