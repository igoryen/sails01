module.exports = {
// hi: function (req, res) {
//   return res.send("Hi there!");
// },
	hi: function (req, res) {
		return res.view('igoryen', {
			user: user,
			corndogs: theUser.corndogCollection
		});
	},
	bye: function (req, res) {
		return res.redirect("http://www.sayonara.com");
	}
};