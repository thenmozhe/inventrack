function parse_url(str, component) {

var key = ['source', 'scheme', 'authority', 'userInfo', 'user', 'pass', 'host', 'port',
          'relative', 'path', 'directory', 'file', 'query', 'fragment'],
  ini = (this.php_js && this.php_js.ini) || {},
  mode = (ini['phpjs.parse_url.mode'] &&
    ini['phpjs.parse_url.mode'].local_value) || 'php',
  parser = {
    php: /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // Added one optional slash to post-scheme to catch file:/// (should restrict this)
  };
 
  var m = parser[mode].exec(str),
    uri = {},
    i = 14;
  while (i--) {
    if (m[i]) {
      uri[key[i]] = m[i];
    }
  }
 
  if (component) {
    return uri[component.replace('PHP_URL_', '').toLowerCase()];
  }
  if (mode !== 'php') {
    var name = (ini['phpjs.parse_url.queryKey'] &&
        ini['phpjs.parse_url.queryKey'].local_value) || 'queryKey';
    parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
    uri[name] = {};
    uri[key[12]].replace(parser, function ($0, $1, $2) {
      if ($1) {uri[name][$1] = $2;}
    });
  }
  delete uri.source;
  return uri;
}

// See `parse_url` above
var MONGO_PARSED = parse_url(process.env.MONGOHQ_URL);

var config = {
  detailedErrors: false
, debug: false
, hostname: "0.0.0.0"
, port: process.env.PORT || 4000
, model: {
    defaultAdapter: 'mongo'
  }
, db: {
    mongo: {
      username: MONGO_PARSED.user
    , dbname: MONGO_PARSED.path.substring(1)    // Get rid of the leading `/`
    , password: MONGO_PARSED.pass
    , host: MONGO_PARSED.host
    , port: parseInt(MONGO_PARSED.port)
    }
  }
, sessions: {
    store: 'cookie'
  , key: 'did'
  , expiry: 14 * 24 * 60 * 60
  }
  ,mailer : {
    fromAddressUserName : 'noreply',
    transport : {
        service : 'Gmail',
        auth : {
            user : 'invent.track@gmail.com',
            pass : 'track.invent'
            }
        }
      }
};

module.exports = config;