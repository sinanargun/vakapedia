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

		var user = sails.models.user;

		 user.createUser({
		      name: req.param('name'),
		      surname: req.param('surname'),
		      email: req.param('email'),
		      gender: req.param('gender'),
		    }, function (err, user) {
		    
		      if (err) return res.negotiate(err);

		      req.session.me = user.id;
		      output.userId = req.session.me;
		 
		      return res.send(output);
		    });
	},


	getUser: function(req,res)
	{
		var user = sails.models.user;

		user.getUser({id: req.param('id')},
			function (err,user) {
			
			if (err) return res.negotiate(err);

		    return res.send(true);
			});
	}
	
};

