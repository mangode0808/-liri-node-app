require("dotenv").config();
var keys = require('./keys.js');

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');


var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

var params = { screen_name: 'mangode0808' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    for (var i = 0; i < tweets.length; i++) {
    if (tweets.length === 20) {
        {
            console.log('\n ------ Tweets ------\n');
            console.log(tweets[i].text + '\n');
        }
    }
}
});
// spotify
//   .search({ type: 'track', query: song })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
