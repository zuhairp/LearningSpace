const call_webtask = require('./call_webtask.js')

module.exports = set_id => call_webtask('quizlet', {set_id: set_id}).then(response => response.terms)
