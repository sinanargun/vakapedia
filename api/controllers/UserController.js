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

		var user = sails.models.user;

		console.log(req.param('key'));
		console.log(postParameters);

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
	}
	
};

