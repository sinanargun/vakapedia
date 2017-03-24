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

		var User = sails.models.user;

		 User.createUser({
		      name: req.param('name'),
		      surname: req.param('surname'),
		      email: req.param('email'),
		      location: req.param('location'),
		      points: req.param('points'),
		      is_worked: req.param('is_worked')
		    }, function (err, user) {
		    
		      if (err) return res.negotiate(err);

		      req.session.me = user.id;
		      output.userId = req.session.me;
		 
		      return res.send(output);
		    });
	},
	
};

