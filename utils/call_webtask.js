var request = require('superagent');

module.exports = (name, params) => {
  return request
    .get(`https://wt-zuhairparvez-gmail-com-0.run.webtask.io/${name}`)
    .query(params)
    .query({webtask_no_cache: 1})
    .then(response => response.body)
}
