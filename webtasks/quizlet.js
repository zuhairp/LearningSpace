var request = require('superagent@1.2.0');

module.exports = function(context, cb) {
  var set_id = context.data.set_id;
  request
    .get("https://api.quizlet.com/2.0/sets/"  + set_id)
    .query({ client_id: 'CFK4z9tNMg'})
    .end(function(err, res){
      cb(null, res.body);
    });
}
