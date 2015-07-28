var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '7eb03b39c91e55f';

module.exports = {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then(function(response) {
			return response.json()
		})
	}

};