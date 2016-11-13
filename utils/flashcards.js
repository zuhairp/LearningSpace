const call_webtask = require('./call_webtask.js')

module.exports = set_id => call_webtask('quizlet', {set_id: set_id})
.then(response => {
  if(response.http_code == 404){
    return Promise.reject(new Error("Set does not exist"));
  }
  else if(response.http_code == 403){
    return Promise.reject(new Error("Set is protected"));
  }
  else {
    return response.terms;
  }
})
