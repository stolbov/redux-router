import request from 'superagent';

export default function fetchLayersByUrl (url, callback) {
  request
    .get(url)
    .end((err, result) => {
      if (err) { throw err; }
      var body = JSON.parse(result.text);
      setTimeout(function () {
        return callback(null, body.services);
      }, 3000);
    })
  ;
}
